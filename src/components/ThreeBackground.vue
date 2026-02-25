<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import * as THREE from 'three';

const containerRef = ref<HTMLDivElement>();
let renderer: THREE.WebGLRenderer;
let scene: THREE.Scene;
let camera: THREE.PerspectiveCamera;
let particles: THREE.Points;
let geometryMeshes: THREE.Mesh[] = [];
let animationId: number;
let mouseX = 0;
let mouseY = 0;
let timer: THREE.Timer;

const init = () => {
  if (!containerRef.value) return;

  timer = new THREE.Timer();
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  containerRef.value.appendChild(renderer.domElement);

  // ── Particle System ──
  const particlesGeometry = new THREE.BufferGeometry();
  const count = 1500;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  const color1 = new THREE.Color('#f97316');
  const color2 = new THREE.Color('#fbbf24');
  const color3 = new THREE.Color('#fb923c');
  const color4 = new THREE.Color('#ef4444');

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    positions[i3] = (Math.random() - 0.5) * 20;
    positions[i3 + 1] = (Math.random() - 0.5) * 20;
    positions[i3 + 2] = (Math.random() - 0.5) * 15;

    const r = Math.random();
    const c = r < 0.3 ? color1 : r < 0.55 ? color2 : r < 0.8 ? color3 : color4;
    colors[i3] = c.r;
    colors[i3 + 1] = c.g;
    colors[i3 + 2] = c.b;

    sizes[i] = Math.random() * 0.03 + 0.005;
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.025,
    vertexColors: true,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  // ── Floating Geometric Wireframes ──
  const geometries = [
    new THREE.IcosahedronGeometry(0.4, 1),
    new THREE.OctahedronGeometry(0.35, 0),
    new THREE.TetrahedronGeometry(0.3, 0),
    new THREE.TorusGeometry(0.3, 0.1, 8, 16),
    new THREE.DodecahedronGeometry(0.3, 0),
    new THREE.TorusKnotGeometry(0.25, 0.08, 64, 8),
  ];

  const warmColors = ['#f97316', '#fbbf24', '#fb923c', '#ef4444', '#f59e0b', '#e11d48'];

  for (let i = 0; i < 8; i++) {
    const geo = geometries[i % geometries.length];
    const mat = new THREE.MeshBasicMaterial({
      color: warmColors[i % warmColors.length],
      wireframe: true,
      transparent: true,
      opacity: 0.08 + Math.random() * 0.07,
    });

    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(
      (Math.random() - 0.5) * 14,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 6
    );
    mesh.userData = {
      rotSpeedX: (Math.random() - 0.5) * 0.008,
      rotSpeedY: (Math.random() - 0.5) * 0.01,
      floatSpeed: Math.random() * 0.0008 + 0.0003,
      floatRange: Math.random() * 0.6 + 0.3,
      originalY: mesh.position.y,
      originalX: mesh.position.x,
      driftSpeed: Math.random() * 0.0003 + 0.0001,
    };

    scene.add(mesh);
    geometryMeshes.push(mesh);
  }

  // ── Ambient Light Lines (Decorative) ──
  const lineGeo = new THREE.BufferGeometry();
  const linePositions = new Float32Array(60);
  for (let i = 0; i < 60; i += 6) {
    const x = (Math.random() - 0.5) * 16;
    const y = (Math.random() - 0.5) * 12;
    const z = (Math.random() - 0.5) * 4;
    linePositions[i] = x;
    linePositions[i + 1] = y;
    linePositions[i + 2] = z;
    linePositions[i + 3] = x + (Math.random() - 0.5) * 2;
    linePositions[i + 4] = y + (Math.random() - 0.5) * 2;
    linePositions[i + 5] = z;
  }
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  const lineMat = new THREE.LineBasicMaterial({
    color: '#f97316',
    transparent: true,
    opacity: 0.04,
  });
  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);
};

const animate = () => {
  animationId = requestAnimationFrame(animate);
  timer.update();
  const elapsed = timer.getElapsed();

  if (particles) {
    particles.rotation.x += 0.00015;
    particles.rotation.y += 0.0003;

    // Fast mouse parallax
    particles.position.x += (mouseX * 0.5 - particles.position.x) * 0.08;
    particles.position.y += (-mouseY * 0.5 - particles.position.y) * 0.08;
  }

  geometryMeshes.forEach((mesh) => {
    mesh.rotation.x += mesh.userData.rotSpeedX;
    mesh.rotation.y += mesh.userData.rotSpeedY;
    mesh.position.y =
      mesh.userData.originalY +
      Math.sin(elapsed * mesh.userData.floatSpeed * 1000) * mesh.userData.floatRange;
    mesh.position.x =
      mesh.userData.originalX +
      Math.sin(elapsed * mesh.userData.driftSpeed * 1000 + 1.5) * 0.3;
  });

  renderer.render(scene, camera);
};

const onMouseMove = (e: MouseEvent) => {
  mouseX = (e.clientX / window.innerWidth) * 2 - 1;
  mouseY = (e.clientY / window.innerHeight) * 2 - 1;
};

const onResize = () => {
  if (!renderer || !camera) return;
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

onMounted(() => {
  init();
  animate();
  window.addEventListener('mousemove', onMouseMove);
  window.addEventListener('resize', onResize);
});

onUnmounted(() => {
  cancelAnimationFrame(animationId);
  window.removeEventListener('mousemove', onMouseMove);
  window.removeEventListener('resize', onResize);
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<template>
  <div
    ref="containerRef"
    class="fixed inset-0 z-0 pointer-events-none"
    aria-hidden="true"
  />
</template>

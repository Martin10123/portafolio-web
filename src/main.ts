import { createApp } from "vue";
import "./style.css";
import "animate.css";
import "aos/dist/aos.css";
import AOS from "aos";
import App from "./App.vue";

AOS.init({
  duration: 800, // duración en ms
  once: true, // si quieres que se anime solo una vez
});

createApp(App).mount("#app");

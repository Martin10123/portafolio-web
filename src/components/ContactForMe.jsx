import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

export const ContactForMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    cellphone: "",
    message: "",
  });
  const [cargando, setCargando] = useState(false);
  const [messageConfirmation, setMessageConfirmation] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "El campo nombre es requerido";
    if (!formData.lastname.trim())
      newErrors.lastname = "El campo apellido es requerido";
    if (!formData.email.trim()) newErrors.email = "El campo email es requerido";
    if (!formData.cellphone.trim())
      newErrors.cellphone = "El campo número de teléfono es requerido";
    if (!formData.message.trim())
      newErrors.message = "El campo mensaje es requerido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setCargando(true);

    try {
      const SERVICEID = "service_wo7fv2h";
      const TEMPLATEID = "template_cruvx5c";
      const USERID = "r_axSwKxYmOFgL8ph";

      await emailjs.send(SERVICEID, TEMPLATEID, formData, USERID);
      setMessageConfirmation("Mensaje enviado correctamente");
      setFormData({
        name: "",
        lastname: "",
        email: "",
        cellphone: "",
        message: "",
      });
    } catch (error) {
      console.error("Error enviando email:", error);
      setMessageConfirmation("Error al enviar el mensaje");
    }

    setCargando(false);
    setTimeout(() => setMessageConfirmation(""), 6000);
  };

  return (
    <section className="w-full bg-[#f5f5f5b5] px-4 py-8 lg:p-20" id="contact">
      <div className="container lg:max-w-5xl mx-auto">
        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-center mb-2">
            Contactame
          </h2>
          <p className="text-center text-gray-600 text-base lg:text-lg">
            Si le gustaría trabajar conmigo en su próximo proyecto, no dude en
            ponerse en contacto conmigo. Puede enviarme un correo electrónico.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
          <div className="flex flex-col gap-4 border p-4 rounded-xl bg-white">
            <h3 className="mb-4 text-xl font-semibold text-gray-800">
              Información de contacto
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 md:flex-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  className="w-full p-3.5 border border-gray-300 rounded-xl text-sm"
                  onChange={handleChange}
                  value={formData.name}
                />
                <input
                  type="text"
                  name="lastname"
                  placeholder="Apellido"
                  className="w-full p-3.5 border border-gray-300 rounded-xl text-sm"
                  onChange={handleChange}
                  value={formData.lastname}
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
              {errors.lastname && (
                <p className="text-red-500 text-sm">{errors.lastname}</p>
              )}

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full p-3.5 border border-gray-300 rounded-xl text-sm"
                onChange={handleChange}
                value={formData.email}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <input
                type="number"
                name="cellphone"
                placeholder="Número de teléfono..."
                className="w-full p-3.5 border border-gray-300 rounded-xl text-sm"
                onChange={handleChange}
                value={formData.cellphone}
              />
              {errors.cellphone && (
                <p className="text-red-500 text-sm">{errors.cellphone}</p>
              )}

              <textarea
                name="message"
                placeholder="Mensaje"
                rows={6}
                className="w-full p-3.5 border border-gray-300 rounded-xl text-sm resize-none"
                onChange={handleChange}
                value={formData.message}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 bg-blue-600 text-white font-bold rounded-xl mt-2"
                disabled={cargando}
              >
                {cargando ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>

            {messageConfirmation && (
              <p className="text-center text-sm text-blue-500 mt-2">
                {messageConfirmation}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-4 border p-4 rounded-xl bg-white">
            <div className="divide-y divide-gray-200">
              <div className="flex gap-x-7 py-6">
                <MdOutlineEmail size={30} />
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">Email</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    martinsimarra4@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <FiPhone size={30} />
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">
                    Número de telefono
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    +57 (300) 683-0624
                  </p>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <FaGithub size={30} />
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">
                    Github repositorio
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    <a href="https://github.com/Martin10123" target="_blank">
                      Repositorio
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex gap-x-7 py-6">
                <FaLinkedin size={30} />
                <div className="grow">
                  <h3 className="font-semibold text-gray-800">
                    Linkedin perfil
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    <a
                      href="https://www.linkedin.com/in/martinsimarrapro/"
                      target="_blank"
                    >
                      Perfil
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

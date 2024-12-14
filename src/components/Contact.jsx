import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCargando(true);

    try {
      const SERVICEID = "service_wo7fv2h";
      const TEMPLATEID = "template_cruvx5c";
      const USERID = "r_axSwKxYmOFgL8ph";

      emailjs.sendForm(SERVICEID, TEMPLATEID, e.target, USERID).then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setMensajeConfirmacion("Mensaje enviado correctamente");

          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          setMensajeConfirmacion("Error al enviar el mensaje");
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setCargando(false);
    }

    setTimeout(() => {
      setMensajeConfirmacion("");
    }, 6000);
  };

  return (
    <section className="w-full pt-24 md1:min-h-screen" id="contact">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-tertiary md1:rounded-xl md1:shadow-md md1:bg-transparent">
        <h2 className="mb-10 text-4xl font-bold text-gray-900">Contacto me</h2>
        <p className="mb-8 lg:mb-16 font-medium text-gray-700 sm:text-xl">
          Si tienes alguna pregunta o alguna propuesta de trabajo, no dudes en
          contactarme. Estoy disponible para trabajar en proyectos de desarrollo
          web.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="nombre"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="user_name"
              className="block w-full text-sm text-white bg-transparent rounded-lg border border-gray-300 shadow-sm p-4"
              placeholder="Nombre..."
              value={formData.user_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="correo"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Correo
            </label>
            <input
              type="email"
              id="correo"
              name="user_email"
              className="shadow-sm bg-transparent border text-white border-gray-300 text-sm rounded-lg block w-full p-4"
              placeholder="Email..."
              value={formData.user_email}
              onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="mensaje"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="message"
              rows="6"
              className="block w-full text-sm text-white bg-transparent rounded-lg shadow-sm border border-gray-300 p-4"
              placeholder="Mensaje..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-quaternary py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
          >
            {cargando ? "Enviando..." : "Enviar mensaje"}
          </button>

          {mensajeConfirmacion && (
            <p
              className={`text-center text-sm text- p-2 rounded-lg font-medium bg-white ${
                mensajeConfirmacion === "Mensaje enviado correctamente"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {mensajeConfirmacion}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

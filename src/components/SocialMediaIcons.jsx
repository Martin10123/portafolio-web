import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";

export const SocialMediaIcons = () => (
  <div className="flex items-center justify-center gap-8">
    <a href="https://www.facebook.com/martinelias1012" target="_blank">
      <FaFacebook
        className="fill-gray-600 duration-200 hover:transform hover:scale-125 hover:fill-blue-500 cursor-pointer"
        size={25}
      />
    </a>
    <a href="https://www.linkedin.com/in/martinsimarrapro/" target="_blank">
      <FaLinkedin
        className="fill-gray-600 duration-200 hover:transform hover:scale-125 hover:fill-blue-500 cursor-pointer"
        size={25}
      />
    </a>
    <a href="https://wa.me/573006830624" target="_blank">
      <FaWhatsapp
        className="fill-gray-600 duration-200 hover:transform hover:scale-125 hover:fill-blue-500 cursor-pointer"
        size={25}
      />
    </a>
    <a href="https://t.me/Martin10124" target="_blank">
      <FaTelegramPlane
        className="fill-gray-600 duration-200 hover:transform hover:scale-125 hover:fill-blue-500 cursor-pointer"
        size={25}
      />
    </a>
    <a href="https://github.com/Martin10123" target="_blank">
      <FaGithub
        className="fill-gray-600 duration-200 hover:transform hover:scale-125 hover:fill-blue-500 cursor-pointer"
        size={25}
      />
    </a>
  </div>
);

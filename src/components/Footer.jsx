import { SocialMediaIcons } from "./SocialMediaIcons";

export const Footer = () => {
  return (
    <footer className="w-full px-4 py-8">
      <div className="container mx-auto">
        <p className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} All rights reserved. Designed by{" "}
          <a
            href="https://www.linkedin.com/in/martinsimarrapro/"
            className="text-blue-500"
          >
            Martin Elias
          </a>
        </p>
      </div>

      <div className="mt-8 lg:mt-10">
        <SocialMediaIcons />
      </div>
    </footer>
  );
};

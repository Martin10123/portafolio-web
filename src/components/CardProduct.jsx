import { PropTypes } from "prop-types";

export const CardProduct = ({
  image,
  title,
  description,
  year,
  github,
  webpage,
}) => {
  return (
    <div
      className="md:max-w-[21rem] border border-gray-200 rounded-lg shadow hover:transform hover:scale-105 transition-transform duration-300
      grid grid-rows-[auto,1fr,auto]"
    >
      <div href="#">
        <img className=" rounded-t-lg" src={image} alt={title} />
      </div>

      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {title}
          <br />
          <span className="text-sm font-normal text-gray-700">
            Año de desarrollo: {year}
          </span>
        </h5>
        <p className="mb-3 text-sm font-normal text-gray-700">{description}</p>
      </div>

      <div className="flex justify-center items-center gap-4 p-4 border-t border-gray-200">
        <a
          className="w-1/3 text-sm font-semibold text-gray-700 text-center border border-gray-200 rounded-lg px-3 py-1.5 duration-300 hover:bg-gray-200"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="w-1/3 text-sm font-semibold text-white text-center bg-blue-500 rounded-lg px-3 py-1.5 duration-300 hover:bg-blue-600"
          href={webpage}
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto
        </a>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  year: PropTypes.string,
  github: PropTypes.string,
  webpage: PropTypes.string,
};

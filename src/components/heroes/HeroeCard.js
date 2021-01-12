import React from 'react';

export const HeroeCard = ({ hero }) => {
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  return (
    <div className="relative rounded-xl transform hover:scale-105 cursor-pointer duration-150 overflow-hidden image">
      <img
        src={`./assets/heroes/${id}.jpg`}
        alt={superhero}
        className="rounded-xl"
      />
      <div className="absolute bg-hero rounded-b-xl left-0 right-0 bottom-0  p-2 border-t-4 border-white flex footer duration-150">
        {publisher === 'DC Comics' ? (
          <div className="bg-white absolute -top-9 lg:-top-8 right-3 rounded-full p-1 justify-self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 151.47 151.47"
              className="w-14 h-14"
            >
              <g fill-rule="evenodd" clip-rule="evenodd" fill="#1f2937">
                <path d="M75.6 0C33.83.08-.09 34.13 0 75.88c.08 41.75 34.13 75.67 75.88 75.6 41.75-.11 75.67-34.14 75.6-75.89C151.38 33.84 117.33-.08 75.58 0zM46 16.99l-2.64 9.39 8.01 5.56-9.63.15-2.72 9.26-3.18-9.26-9.81.11 7.67-5.82-3.15-9 7.75 5.48zm86.3 13.04l-2.64 9.4 8.02 5.55-9.66.16-2.7 9.26-3.17-9.26-9.82.13 7.68-5.85-3.18-9 7.78 5.48zm-56.67 2.54a43.18 43.18 0 11.16 86.36 43.18 43.18 0 01-.16-86.36zm-39.74 70.9l-2.64 9.37 8.02 5.56-9.64.13-2.72 9.26-3.18-9.23-9.79.1 7.68-5.82-3.18-9 7.75 5.49zm83.93 10.46l-2.65 9.4 8.02 5.55-9.63.16-2.73 9.26-3.17-9.26-9.79.1 7.67-5.82-3.17-9 7.75 5.48z" />
                <path d="M55.48 59.76l-17.7 13.5 29.92 39.31 17.33-13.2 1.46-10.64-21.06-27.62zm3.65 12.54l15.19 19.95-4.93 3.76-.63-.8L54.2 76.07zM68.79 50.52l-1.2 8.84 21.65 28.42 10.35 1.4 11.45-8.73 1.46-10.64-7.68-10.05-9.52 7.27 4.42 5.82-4.95 3.81-14.98-19.7 4.93-3.77 4.44 5.83 9.55-7.25-7.25-9.53-9.97-1.37-12.7 9.68z" />
              </g>
            </svg>
          </div>
        ) : (
          <div className="bg-white absolute xl:-top-10 lg:-top-8 right-3 rounded-full p-1 justify-self-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 592.3 569.2"
              className="xl:w-16 xl:h-16 lg:w-14 lg:h-14"
            >
              <g
                transform="matrix(1.17075 0 0 1.17075 -3.7 -14.8)"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <ellipse
                  cx="256.1"
                  cy="255.8"
                  rx="239.3"
                  ry="229.5"
                  stroke="#000"
                  stroke-width="27.3"
                />
                <ellipse
                  cx="256.1"
                  cy="255.8"
                  fill="#fff"
                  rx="192.5"
                  ry="184.6"
                />
                <ellipse
                  cx="256.1"
                  cy="255.8"
                  rx="135.3"
                  ry="129.8"
                  stroke="#000"
                  stroke-width="15.4"
                />
                <g stroke="#000" stroke-width="13.6">
                  <path
                    fill="#fff"
                    d="M279.3 44L101.6 434.4h68.3l46.5-112.6h62.1l.8 38.8 59-2.3-4.7-313.5z"
                  />
                  <path
                    fill="none"
                    d="M280 262v-88.4L242 262zM280.1 236.4l57.4 58.3M279.3 347.4l58.2-45.8"
                  />
                </g>
              </g>
            </svg>
          </div>
        )}
        <div className="self-auto text-gray-200 ml-2 mb-2 title">
          <h2 className="text-xl font-extrabold text-gray-100">{superhero}</h2>
          <p className="uppercase text-xs mb-4 text-gray-400">{alter_ego}</p>
          <p>{publisher}</p>
          <p>{first_appearance}</p>
          <p className="font-thin text-sm text-gray-400">{characters}</p>
        </div>
      </div>
    </div>
  );
};

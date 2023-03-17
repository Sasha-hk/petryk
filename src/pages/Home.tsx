import { FC, useEffect, useState } from "react";

import { Link } from "react-router-dom";

export const Home: FC = () => {
  const [experience, setExperience] = useState<number>(0);

  useEffect(() => {
    // Calculate experience
    const startWork = new Date();

    startWork.setUTCFullYear(2022);
    startWork.setUTCMonth(3);
    startWork.setUTCDate(1);
    startWork.setUTCHours(0);
    startWork.setUTCMinutes(0);
    startWork.setUTCSeconds(0);
    startWork.setUTCMilliseconds(0);

    setExperience(
      new Date(new Date().getTime() - startWork.getTime()).getUTCMonth(),
    );

    // Prevent navigation affect on mobile phones
    let vh = window.innerHeight * 0.01;
    const wrapper = document.getElementById("__next");
    if (wrapper) {
      vh = window.innerHeight * 0.01;
      wrapper.style.minHeight = "0";
      wrapper.style.height = vh * 100 + "px";

      window.addEventListener("resize", () => {
        vh = window.innerHeight * 0.01;
        wrapper.style.minHeight = "0";
        wrapper.style.height = vh * 100 + "px";
      });
    }
  }, []);

  return (
    <header
      className="
      h-full
      container
      flex
      2xl:items-center
      2xl:justify-between
      md:justify-around
      sm:items-start
      sm:pt-20
      sm:py-4
    "
    >
      <div
        className="
        2xl:w-50
        sm:w-full
        sm:text-center
        sm:flex
        sm:flex-col
      "
      >
        <div
          className="
          font-bold
        "
        >
          <h1 className="text-primary-500 dark:text-primary m-0">
            Oleksandr Petryk
          </h1>
          <h2 className="m-0">Back-end developer</h2>
        </div>

        <div
          className="
          mt-4
          mb-6
          text-lg
        "
        >
          <span>English: B1</span> <br />
          <span>{`Commercial experience: ${experience} months`}</span> <br />
        </div>
        <Link
          to="/about"
          className="
            px-10
            py-2
            mt-5
            space-x-2
            rounded-md
            inline-flex
            items-center
            2xl:justify-start
            sm:self-center
            bg-primary-500
            dark:bg-primary
            text-color-light
            stroke-color-light
            dark:stroke-color-dark
            dark:text-color-dark
            shadow-sm
            shadow-primary-500/50
            hover:shadow-primary/50
            hover:shadow-lg
            transition-md
            duration-100
            ease-in-out
          "
        >
          <span className="text-xl font-bold">learn more</span>
          <svg
            width="7"
            height="13"
            viewBox="0 0 7 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1.5L6 6.5L1 11.5"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      <div className="sm:hidden ml-5">
        <img
          src="./Oleksandr Petryk.jpg"
          alt="Oleksandr Petryk's picture"
          width={400}
          height={700}
          className="shrink-0 rounded-md 2xl:w-80 lg:w-70"
        />
      </div>
    </header>
  );
};

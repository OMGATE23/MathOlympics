import { Infinity, Medal, Sword, Trophy } from "phosphor-react";

export function Home() {
  const pages = [
    {
      name: "Play Levels",
      subtitle: "Play each level and win badges, medals and also trophies!",
      link: "/level",
      element: <Sword className="block" size={40} />,
      colors: "bg-lime-200 text-lime-900 hover:bg-lime-500 hover:text-white",
    },
    {
      name: "Play Infinity Mode",
      subtitle:
        "Play infinity mode until you lose. The more you win the better the award!",
      link: "/infinity",
      element: <Infinity className="block" size={40} />,
      colors: "bg-red-300 text-red-900 hover:bg-red-500 hover:text-white",
    },
    {
      name: "Your awards",
      subtitle: "Check your cool trophies and awards!",
      link: "achievements",
      element: <Trophy className="block" size={40} />,
      colors:
        "bg-purple-300 text-purple-900 hover:bg-purple-500 hover:text-white",
    },
  ];
  return (
    <div className="flex min-h-[80vh] my-4 flex-col items-center justify-center gap-12">
      <div>
        <h1 className="text-[3rem] w-[90%] mx-auto tb:text-[4rem] flex flex-col tb:flex-row items-center tb:w-fit text-blue-800 font-extrabold">
          <Medal className="mr-2" weight="duotone" />
          <span>Welcome To,</span>{" "}
          <span className="text-blue-950">MathOlympics!</span>
        </h1>
        <p className="text-2xl text-center mt-4 text-sky-950">Making Maths fun for kids!</p>
      </div>
      <div className="flex flex-col tb:flex-row justify-center tb:w-[90vw] mx-auto gap-12  items-center tb:h-[50vh]">
        {pages.map(({ name, subtitle, link, element, colors }) => {
          return (
            <a
              href={link}
              key="name"
              className={
                "text-center flex justify-center items-center  w-[75%] max-w-[300px] aspect-square tb:w-[25vw]   transition-all duration-200 outline outline-1 rounded-xl hover:scale-[1.05] " +
                colors
              }
            >
              <div className="flex flex-col items-center gap-2 mx-4">
                {element}
                <p className="text-[1.5rem] font-bold">{name}</p>
                <p className="text-[0.9rem]">{subtitle}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

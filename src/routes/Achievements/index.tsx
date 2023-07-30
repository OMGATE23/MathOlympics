import { getAwards } from "../../hooks/getAwards";

export function Achievements() {
  const { awards, remainingAwards } = getAwards();
  return (
    <div>
      <div>
        <h2 className="text-center my-4 text-5xl font-bold">
          <span className="text-blue-900">Level Mode</span> Awards
        </h2>
        <div className="grid grid-cols-2 w-fit mx-auto bg-sky-900 outline outline-2 ml:grid-cols-4 justify-items-center content-center gap-4 p-4">
          {awards.map(({ type, level, award }) => {
            if (type === "level") {
              return (
                <div className=" bg-sky-800 gap-2 aspect-square w-[150px] ml:w-[250px] flex flex-col justify-center items-center px-4 py-2">
                  <img className=" w-[100px] ml:w-[150px]" src={award} />
                  <p className=" text-sm text-center ml:text-xl text-white">
                    For completing level{" "}
                    <span className="text-orange-500">{level}</span>
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-center my-4 text-5xl font-bold">
          <span className="text-blue-900">Infinity Mode</span> Awards
        </h2>
        <div className="grid grid-cols-1 w-fit mx-auto bg-sky-900 outline outline-2 ml:grid-cols-1 justify-items-center content-center gap-4 p-4">
          <div className="  bg-sky-800 gap-2 aspect-square w-[150px] ml:w-[250px] flex flex-col justify-center items-center px-2 py-4">
            <img className=" w-[100px] ml:w-[150px]" src={awards[0].award} />
            <p className="text-sm text-center ml:text-xl text-white">
              For completing{" "}
              <span className="text-orange-500">{awards[0].level}</span>{" "}
              questions
            </p>
          </div>
        </div>
        <div>
        <h2 className="text-center my-4 text-5xl font-bold">
          <span className="text-blue-900">Remaining</span> Awards
        </h2>
        <div 
            className="grid grid-cols-2 w-fit mx-auto bg-sky-900 outline outline-2 ml:grid-cols-4 justify-items-center content-center gap-4 p-4"
            style = {{
                filter : 'grayscale(0.50)'
            }}
        >
          {remainingAwards.map(({ type, level, award }) => {
            if (type === "level") {
              return (
                <div className=" bg-sky-800 gap-2 aspect-square w-[150px] ml:w-[250px] flex flex-col justify-center items-center px-2 py-4 ">
                  <img className=" w-[100px] ml:w-[150px]" src={award} />
                  <p className=" text-sm text-center ml:text-xl text-white">
                    For completing level{" "}
                    <span className="text-orange-500">{level}</span>
                  </p>
                </div>
              );
            }
          })}
        </div>
      </div>
      </div>
    </div>
  );
}

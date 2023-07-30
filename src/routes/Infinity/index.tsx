import { useEffect, useState } from "react";
import Problem from "../../components/Problem";
import {
  getCurrentProblem,
  getEncouragement,
  getHighScore,
  setCurrentProblem,
  setHighScore,
  useGetEquationParams,
  useGetMathEquation,
} from "../../hooks";
import Modal from "../../components/Modal";
import { toast } from "react-toastify";
import Confetti from 'react-confetti'

interface Problem {
  equation: string;
  solution: any;
}
export function Infinity() {
  const [currentProblem, setCurrProblem] = useState<number>(1);
  const [answer, setAnswer] = useState<string>();
  const [message, setMessage] = useState<string>("");
  const [problem, setProblem] = useState<Problem>();
  const [modalVis, setModalVis] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [showConfetti, setShowConfetti] = useState(false);

  function infinityAnswerHandler() {
    if (answer === problem?.solution) {
      setMessage("correct!");
      setCurrentProblem(currentProblem + "");
      setIsCorrect(true);
      let params = useGetEquationParams(currentProblem + 1);
      setProblem(useGetMathEquation(params.nums, params.bracketProb));
      setCurrProblem((prev) => prev + 1);
      setModalVis(false);

      let highScore = Number.parseInt(getHighScore());

      if (highScore && highScore < currentProblem) {
        setHighScore(currentProblem + "");
      }
      toast.success("Your Answer was correct!");

      setShowConfetti(true);

      
    } else {
      setIsCorrect(false);
      setCurrentProblem("1");
      setCurrProblem(1);
      setMessage("Wrong :(");
      setModalVis(true);
    }
  }
  useEffect(() => {
    console.log(getCurrentProblem());
    if (!getCurrentProblem()) {
      setCurrProblem(1);
      setCurrentProblem("1");
    } else {
      setCurrProblem(+getCurrentProblem() || 1);
    }

    if (!getHighScore()) {
      setHighScore("1");
    }
    let getLevel = +getCurrentProblem();
    console.log(getLevel);
    const params = useGetEquationParams(getLevel || currentProblem);
    setProblem(() => useGetMathEquation(params.nums, params.bracketProb));
  }, []);

  useEffect(() => {
    console.log(showConfetti);
    if(showConfetti){
        setTimeout(() => {
            setShowConfetti(false);
          }, 4000);
    }
  });

  const [windowSize , setWindowSize] = useState({
    width : window.innerWidth,
    height : window.innerHeight
  })
  
  

  useEffect(() => {
    window.onresize = () => setWindowSize({
      width : window.innerWidth,
      height : window.innerHeight
    })
  })
  return (
    <div className="">
      <div className="text-center">
        <h1 className="font-bold text-5xl ml:text-6xl text-blue-900">
          Infinity
        </h1>
        <div className="flex flex-col ml:flex-row justify-center gap-2 text-2xl ml:text-4xl my-4 font-bold text-blue-900">
          <p>
            Current Problem :{" "}
            <span className="text-blue-500">{currentProblem}</span>
          </p>
          <p>
            Your Highscore :{" "}
            <span className=" text-orange-600">{getHighScore()}</span>
          </p>
        </div>
      </div>
      <Problem
        setAnswer={setAnswer}
        message={message}
        answerHandler={infinityAnswerHandler}
        problem={problem}
        isCorrect={isCorrect}
        showConfetti={showConfetti}
      />
      {modalVis && (
        <Modal message="You got an answer wrong" setModalVis={setModalVis} />
      )}
      {showConfetti && <Confetti width = {windowSize.width} height = {windowSize.height} />}
    </div>
  );
}

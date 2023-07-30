import Problem from "../../components/Problem";
import { useEffect, useRef, useState } from "react";
import {
  useGetMathEquation,
  useGetEquationParams,
  getEncouragement,
  getLevel,
  getProblemNumber,
} from "../../hooks";
import { toast } from "react-toastify";
import Confetti from "react-confetti";
interface Problem {
  equation: string;
  solution: any;
}

export function Level() {
  const [problem, setProblem] = useState<Problem>();
  const [problemNumber, setProblemNumber] = useState<number>(1);
  const [answer, setAnswer] = useState<string>('');
  const [level, setLevel] = useState<number>(1);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const [showConfetti, setShowConfetti] = useState(false);
  const inputRef = useRef(null);

  function answerLevelHandler() {
    setAnswer('')
    if (answer == problem?.solution) {
      setIsCorrect(true);
      
      localStorage.setItem("problemNumber", problemNumber + 1 + "");
      setProblemNumber((prev) => {
        if (prev % 5 == 0) {
          setLevel(level + 1);
          localStorage.setItem("level", level + 1 + "");
          localStorage.setItem("problemNumber", 1 + "");
          return 1;
        }
        return prev + 1;
      });

      const params = useGetEquationParams(level);
      setProblem(() => useGetMathEquation(params.nums, params.bracketProb));
      if (inputRef && inputRef.current) {
        console.log(inputRef.current.value);
        inputRef.current.value = "";
      }
      setMessage("Correct!");
      toast.success("Your Answer was correct!");
      setShowConfetti(true);
    } else {
      setIsCorrect(false);
      setMessage("Wrong :(");
    }
  }

  useEffect(() => {
    if (!localStorage.getItem("level")) {
      localStorage.setItem("level", "1");
      setLevel(1);
    } else {
      let level = localStorage.getItem("level");
      if (level) {
        setLevel(+level);
      }
    }

    if (!localStorage.getItem("problemNumber")) {
      localStorage.setItem("problemNumber", "1");
      setProblemNumber(1);
    } else {
      let problemNum = localStorage.getItem("problemNumber");
      if (problemNum) {
        setProblemNumber(+problemNum);
      }
    }

    let getLevel = +localStorage.getItem("level");
    console.log(getLevel);
    const params = useGetEquationParams(getLevel || level);
    setProblem(() => useGetMathEquation(params.nums, params.bracketProb));
  }, []);

  useEffect(() => {
    console.log(showConfetti);
    if (showConfetti) {
      setTimeout(() => {
        setShowConfetti(false);
      }, 4000);
    }
  });

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.onresize = () =>
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
  });
  return (
    <div>
        <h1 className="text-4xl ml:text-6xl mb-2 font-extrabold text-blue-900 text-center">Level Mode</h1>
      <div className="flex flex-col w-[100vw] justify-center items-center ml:gap-4 gap-2 ml:text-3xl ml:flex-row text-center text-2xl font-bold mb-4 text-blue-800">
        <p>
          Current Level :{" "}
          <span className="text-blue-500">{localStorage.getItem("level")}</span>
        </p>
        <p>
          Current Problem Number :{" "}
          <span className="text-red-500">
            {localStorage.getItem("problemNumber")}
          </span>
        </p>
      </div>

      <Problem
        setAnswer={setAnswer}
        message={message}
        answerHandler={answerLevelHandler}
        problem={problem}
        isCorrect={isCorrect}
        answer = {answer}
      />
      {showConfetti && <Confetti width = {windowSize.width} height = {windowSize.height} />}
    </div>
  );
}

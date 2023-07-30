import { useEffect, useRef, useState } from "react"
import { getEncouragement } from "../../hooks";

interface ProblemProps {
  setAnswer : React.Dispatch<React.SetStateAction<string | undefined>>,
  message : string;
  answerHandler : any;
  problem : {
    equation : string , 
    solution : any
  };
  isCorrect : boolean;
  showConfetti : boolean;
  answer : number | null
}

export default function Problem({setAnswer , message , answerHandler , problem , isCorrect , showConfetti , answer} : ProblemProps) {
    const [windowSize , setWindowSize] = useState({
      width : window.innerWidth,
      height : window.innerHeight
    })
    const [submit , setSubmit] = useState(false)
    
    const inputRef = useRef(null)

    useEffect(() => {
      window.onresize = () => setWindowSize({
        width : window.innerWidth,
        height : window.innerHeight
      })
    })

    useEffect(() => {
      console.log(isCorrect , showConfetti)
      
    } , [isCorrect])
  return (
    <div className="min-h-[60vh] w-full flex justify-center items-center">
        
        <div className=" mx-auto w-[100vh] ml:w-[60%] h-[60vh] ml:h-[40vh] flex flex-col ml:flex-row justify-evenly items-center">
          <div className="text-2xl rounded-t-xl ml:rounded-tr-none ml:rounded-l-xl text-center h-full flex flex-col justify-center bg-blue-400 w-[75%] ml:w-[50%] gap-4">
            <p className="">Equation : </p>
            <p className="font-bold bg-blue-600 w-fit px-8 py-4 rounded-lg mx-auto">{problem && problem?.equation.replace('*' , "X")}</p>
          </div>
            
            
            <div className="flex flex-col ml:rounded-bl-none rounded-b-xl ml:rounded-r-xl bg-blue-200 h-full  justify-center items-center px-4 py-2 gap-4 w-[75%] ml:w-[50%]">
              <label className="flex flex-col ml:flex-row gap-2">
                <p className="text-center py-2 text-2xl font-bold">Answer:</p>
              <input ref = {inputRef} type="number" className='outline outline-1 text-2xl px-4 py-1 rounded-lg w-[90%] mx-auto' onChange={e => setAnswer(+e.target.value)} value={answer} />
              </label>
              <button onClick={() => {
                answerHandler()
                setSubmit(true)
              }} className=' py-2 px-4 text-[1.2rem] text-white font-bold rounded-lg bg-blue-600 hover:bg-blue-800 ml-2 transition-all duration-200 '>
                Submit answer</button>
                {submit && <p className = {`${isCorrect ? 'bg-green-400 ' : 'bg-red-500 '} py-2 px-4 rounded-md`}>{message}</p>}
                
            </div>
            
        </div>
    </div>
  )
}

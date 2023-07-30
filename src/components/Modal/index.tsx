interface Props {
    message : string;
    setModalVis : React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({message , setModalVis} : Props) {
  return (
    <div className="w-[100vw] flex justify-center outline outline-[5px] items-center h-[100vh] aspect-square text-xl bg-[rgba(0,0,0,0.1)] absolute top-0 left-0">
        <div className="w-[100vw] h-[100vh]"></div>
        <div className="min-w-[300px] flex justify-center gap-12 items-center flex-col w-[20vw] absolute mx-auto shadow-lg rounded-xl aspect-square bg-white">
            {message ? message : "Modal"}
            <div className="flex flex-col gap-2">
                <a onClick={() => setModalVis(false)} className="outline outline-2 px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600 transition-all duration-200" href = "/infinity">Try Again</a>
                <a onClick={() => setModalVis(false)} className="outline outline-2 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200" href="/">Go Home</a>
            </div>
            
        </div>
    </div>
  )
}

import { House } from "phosphor-react";
import { useRef, useState } from "react";

const encouragingPhrases = [
    "Great job! Keep it up!",
    "You're a math superstar!",
    "Fantastic! Math is fun!",
    "Way to go! Crushin' it!",
    "Math whiz in the making!",
    "Awesome work! Keep going!",
    "You're on fire! 🔥",
    "Math champ in action!",
    "Math power: Activate!",
    "Keep up the good work!",
    "You've got this!",
    "Math genius at work!",
    "Brilliant math skills!",
    "You make math fun!",
    "You're amazing at math!",
    "Math wizardry in progress!",
    "Mathlete in action!",
    "You're a math hero!",
    "Math success awaits!",
    "You're unstoppable!",
];

function getRandomQuote(){
    return encouragingPhrases[Math.floor(Math.random() * encouragingPhrases.length)]
}
export function Header() {
    
    const [linkContent , setLinkContent] = useState(getRandomQuote)

    
  return (
    <div className="py-4 px-2 font-semibold text-white bg-blue-500 mb-8">
        <a 
            href="/" 
            
            className="text-[1.2rem] transition-all duration-400 min-w-[250px] max-w-fit h-full px-4 flex items-center justify-left gap-2"
            onMouseEnter={() => setLinkContent("Go to Home?")}
            onMouseLeave={() => setLinkContent(getRandomQuote)}

        >
        <House size={32}/>
        <div>{linkContent}</div>
        </a>

        <a>
           
        </a>
    </div>
  )
}

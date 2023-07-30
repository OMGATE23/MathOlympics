const encouragementForWrongAnswers = [
  "No worries, try again!",
  "Mistakes help us learn. Keep going!",
  "Don't give up! Try once more!",
  "You're getting closer! Keep at it!",
  "It's okay to make mistakes. Keep trying!",
  "You're on the right track. Keep going!",
  "Every challenge is an opportunity!",
  "Believe in yourself! You can do it!",
  "You're so close! Keep pushing!",
  "Math success is near!",
  "Keep your head up! You're awesome!",
  "You're a resilient math wizard!",
  "Math is about practice. Keep at it!",
  "Keep shining, math star!",
  "Learning takes time. Keep trying!",
  "You're a math hero in training!",
  "Mistakes are part of learning!",
  "Perseverance is key. You've got this!",
];

const encouragementForCorrectAnswers = [
  "Awesome! You nailed it!",
  "Correct! You're a math whiz!",
  "Fantastic job! You got it right!",
  "Brilliant! You're on fire!",
  "Perfecto! You're a math master!",
  "You did it! Way to go!",
  "Correctamundo! Great work!",
  "You're on a roll! Keep it up!",
  "Impressive! You got it!",
  "Hooray! You're a math pro!",
  "You aced it! Well done!",
  "You're unstoppable! Correct!",
  "Math genius in action!",
  "You're right on target!",
  "Math wizardry at its best!",
  "Superb! Correct answer!",
  "You make math look easy!",
  "You're crushing it! Correct!",
  "Math-tastic! You got it right!",
  "You're a math superstar!",
];

export function getEncouragement(isCorrect : boolean) {
    if(isCorrect){
        return encouragementForCorrectAnswers[Math.floor(Math.random() * encouragementForCorrectAnswers.length)]
    } else {
        return encouragementForWrongAnswers[Math.floor(Math.random() * encouragementForWrongAnswers.length)]
    }
}

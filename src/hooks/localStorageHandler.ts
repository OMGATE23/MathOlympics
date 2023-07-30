export function getLevel(){
    return localStorage.getItem('level')
}

export function getProblemNumber(){
    return localStorage.getItem('problemNumber')
}

export function getCurrentProblem(){
    return localStorage.getItem('currentProblem')
}

export function getHighScore(){
    return localStorage.getItem('highscore')
}

export function setHighScore(highscore : string){
    localStorage.setItem('highscore' , highscore)
}

export function setCurrentProblem(currProb : string){
    localStorage.setItem('currentProblem' , currProb)
}

export function setLevel(level : string){
    localStorage.setItem('level' , level)
}

export function setProblemNumber(probNum : string){
    localStorage.setItem('problemNumber' , probNum)
}
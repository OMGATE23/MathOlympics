export function useGetEquationParams(level : number){
    if(level <=5){
        return {nums : 2 , bracketProb : 0}
    }
    if(level <=10){
        return{nums : 3 , bracketProb : 0}
    }
    if(level <= 15){
        return{nums : 4 , bracketProb : 0.5}
    }
    if(level <=20){
        return{nums : 5 , bracketProb : 0.5}
    }

    if(level <= 25){
        return{nums : 5 , bracketProb : 0.7}
    }

    if(level <= 30){
        return{nums : 6 , bracketProb : 0.5}
    }

    if(level <= 35){
        return{nums : 6 , bracketProb : 0.7}
    }

    if(level <=40){
        return{nums : 7 , bracketProb : 0.7}
    }

    return {nums : 10 , bracketProb : 1.0}
}
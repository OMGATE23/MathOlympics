import { getHighScore, getLevel } from ".";

const awardsList = [
    
]

export function getAwards(){
    let levelsCrossed = +getLevel();
    
    if(levelsCrossed > 40){
        levelsCrossed = 40
    }
    let highscore = +getHighScore();
    let awardLevel =  Math.floor(levelsCrossed/5);
    console.log(awardLevel)
    let awards = []
    let remainingAwards = []
    for(let i =  1 ; i <=awardLevel ; i++){
        awards.push({type : "level" , level : + i*5 , award : './assets/award-' + i +'.png'})
    }

    for(let i = awardLevel + 1 ; i <= 8 ; i++){
        remainingAwards.push({type : "level" , level : + i*5 , award : './assets/award-' + i +'.png'})
    }
    awards.push({type : 'infinity' ,level : highscore , award : './assets/infinity-award.png'})
    console.log(levelsCrossed , highscore)
    console.log(awards)
    console.log(remainingAwards)

    return {awards : awards.reverse() , remainingAwards}
}
const testScores = {
    chris: 100,
    ashton: 40,
    ezrah: 89,
    pam: 35,
    jim: 34,
    stanley: 90,
    michael: 100,
    toby: 69,
    dwight: 25
}

// for(let person in testScores){
//     console.log(`${person} scored ${testScores[person]}`)
// }

let total = 0;
let scores = Object.values(testScores);
for(let score of scores){
    total += score;
}

console.log(total/scores.length)
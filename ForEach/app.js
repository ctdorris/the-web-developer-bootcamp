const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

numbers.map(function(num){
    return num * 2;
})

// numbers.forEach(function (el) {
//     if (el % 2 === 0){
//         console.log(el)
//     }
// })

// for (let el of numbers) {
//     console.log(el);
// }

const movies = [
    {
        title: 'Amadeus',
        score:99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Parasite',
        score: 95
    }
]

const titles = movies.map(function(movie){
    return movie.title;
})

const names = ["tomothee   ","    darth_vader", "sassyfrassy   ", " elton john  "]

function cleanNames(list){
    const cleanList = list.map(function(name){
        return name.trim();
    })
    return cleanList;
}

// movies.forEach(function(movie){
//     console.log(`${movie.title} - ${movie.score}/100`);
// })
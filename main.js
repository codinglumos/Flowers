
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/

/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
const filteredFlowers = []  // Do not modify

    // Write your algorithm first, and then your code. Feel free to remove this comment
    //Of all the flowers- review all of them and determine which has prices below $2. If they are below $2 then put them in the filteredFlowers array with all their information.
        //determine the criteria to make flowers inexpensive 
        //assign what an inexpensive flower is
        //iterate each flower (object) in the flowers array
        //look at the price of each flower
        //evaluate if the price is < $2
        //if it is < $2 then push the whole set of flower data into the filteredFlowers array
        //console.log the new array of filteredFlowers to show the ones that cost less than $2
    for (const flower of flowers) {
        if (flower.price < 2.00) {
            filteredFlowers.push(flower)

        }
    }
    return filteredFlowers  // Do not modify

}
 //Call the funtion here to make it work without the () you are just referring to it not calling it
console.log(inexpensiveFlowers())

// This function should return flowers that grow in USDA zones of 3 and 8.
const zoneFlowers = () => {
    //return flower.usdaZones = 3 || 8
const filteredFlowers = []  // Do not modify
        //determine the criteria to find flower's usdaZone 
        //assign what zone the flower is
        //iterate each flower(string) in the flowers array
        //look at the zone of each flower
        //evaluate if the zone is = 3, 8
        //if it is = 3, 8 then push the whole set of flower data into the filteredFlowers array
        //console.log the new array of filteredFlowers to show the ones that are in zones = 3, 8
 for (const flower of flowers) {
    if  (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
        filteredFlowers.push(flower)
        //console.log(zoneFlowers)
    }
   
    
    }

//     Write your algorithm first, and then your code. Feel free to remove this comment
//     Of all the flowers- review all of them and determine which are in usdazones 3 and 8. If they are in zomes 3 and 8 then put them in the filteredFlowers array with all their information.

  return filteredFlowers  // Do not modify
}
console.log(zoneFlowers())

//     This function should return flowers that come in the color Orange

const orangeFlowers = () => {
    //return flower.color = "orange"
const filteredFlowers = []  // Do not modify

// Write your algorithm first, and then your code. Feel free to remove this comment
// //Of all the flowers- review all of them and determine which ones are orange in color. If they are orange then put them in the filteredFlowers array with all their information.
for (const flower of flowers) {
    if (flower.colors.includes("Orange")) {
        filteredFlowers.push(flower)
    }
}

return filteredFlowers  // Do not modify

}
console.log(orangeFlowers())


// /*
//     This function should return an HTML representation of each flower.

//     Expected string format:
//         <article>
//             <h1>Bird of Paradise</h1>

//             <h2>Colors</h2>
//             <section>White</section>
//             <section>Orange</section>

//             <h2>USDA Zones</h2>
//             <div>9</div>
//             <div>10</div>
//             <div>11</div>
//         </article>
// */
const flowersAsHTML = () => {
let flowersHTMLString = ""  // Do not modify

for (const flower of flowers) {
    const article = `<article> \n`
    flowersHTMLString += article
   
    const h1 = `<h1>${flower.type}</h1>\n` 
    flowersHTMLString += h1
        //console.log the information below: ?
    flowersHTMLString += '<h2>Colors</h2> \n'   
        for (const color of flower.colors) {
           // console.log(`<h2>"Color"</h2>`)
            const section = `<section>${color}</section>\n`
            flowersHTMLString += section
            
        }
        flowersHTMLString += '<h2>USDA Zones</h2> \n'
        for (const usdaZone of flower.usdaZones) {
            //console.log(`<h2>"USDA Zones"</h2>`) 
            const div = `<div>${usdaZone}</div>\n`
            flowersHTMLString += div
            
        }
        flowersHTMLString += `</article>`
    }
 



return flowersHTMLString  // Do not modify
 }
 console.log(flowersAsHTML())
//     /*
//         Algorithmic thinking is most important on this one.
//         We would rather see the correct algorithm than the
//         correct code. If you have code that works, but no
//         algorithm, then you failed the exercise.
//     */

/*THOUGHTS
We want the flower name, colors, and zones to be listed in the final product for each flower surrounded by an article
Each flower name, color and zone under each flower needs to be surrounded by a heading (the name is heading 1 and color/zone are heading 2)- the headings are children of the article
Each item in the color/zone arrays needs to be surrounded by a div- the divs are children of each of their headings

ONE
We want to have an article element holding headings, sections, and divs
Iterate the flower array 
console.log each flower and its objects surrounded by opening  *article tags  (closing tag will be added with += later)

TWO
We want the heading 1 to hold the type of the flower and headings 2 to hold the color/zone of the flower
Iterate the flower array (add another for loop into the initial one)
console.log the flower type surrounded by the open and closing *h1 tags (make sure you place a 'tab' before the opening h1)
console log the colors/zones surrounded by the open and closing *h2 tags (make sure you place a 'tab' before the opening h1)

THREE
We want the divs to hold the strings inside the color and zone arrays
Iterate the flower array (add another for loop into the second one)
console log the length of the color arrays for each flower and surround them by the open and closing *div tags (make sure you place a 'tab' before the opening div)
console log the length of the zone arrays for each flower and surround them by the open and closing *div tags (make sure you place a 'tab' before the opening div)
*/










































































/*  DO NOT TOUCH THIS CODE  */
 const getFlowers = () => flowers
 module.exports = {
     inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
 }
/*  DO NOT TOUCH THIS CODE  */


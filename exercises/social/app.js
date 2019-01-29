/*
Create a model to represent the database of a new social media platform you're creating. It can be about whatever you want, but it needs the following:

At least 3 nested levels of data (including objects and arrays)
At least 1 method
Span across at least 50 lines of code. (No empty lines)
*/


var racer1 = {
    racerName: "TegoTooFast",
    age: 45,
    cars: [
        {
            carType: "supercar",
            make: "Nissan",
            model: "GT-R",
            year: "2009",
        }
    ],
    racaerTeam: [
        {
            racerName: "WayRider",
            age: 45,
            car: [
                {
                    carType: "muscle-car",
                    make: "Mopar",
                    model: "Plymouth Barracuda",
                    year: "1972",
                }
            ]

        },
        {
            racerName: "GemmaTheGoddess",
            age: 22,
            car: [
                {
                    carType: "hypercar",
                    make: "Ferarri",
                    model: "XK-12",
                    year: "2020",
                }
            ]

        },
        {
            racerName: "Mk-16",
            age: "XX",
            car: [
                {
                    carType: "Unknown",
                    make: "undiscovered",
                    model: "alien",
                    year: "2250",
                }
            ]

        }
    ]

}

racer1.racaerTeam[0].extra = {son:"KnightRider", carLevel:10}
console.log(racer1.racaerTeam[0])
racer1.racaerTeam[2].car.push({carLevel: NaN, carOrigin: "Unknown"})
console.log(racer1.racaerTeam[2].car)
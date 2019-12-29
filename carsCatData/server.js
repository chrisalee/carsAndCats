const express = require("express");
    app = express();
    port = 8000;
    server = app.listen(port, () => console.log(`listening on port ${port}`))

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

var allDogs = [
    {
        name: "Zeeks",
        url: "/zeeks",
        image: "dog1.jpg",
        age: 1,
        food: "Puppy Chow Chex",
        sleeping: [
            "End of Bed",
            "Under the bed",
            "on the counter",
        ]
    },
    {
        name: "Goldie",
        url: "/goldie",
        image: "dog2.jpg",
        age: 10,
        food: "Hot Dogs",
        sleeping:[
            "Outside",
            "Under the car",
            "In a box",
        ]
    },
    {
        name: "Happy",
        url: "/happy",
        image: "dog3.jpg",
        age: 3,
        food: "Leaves",
        sleeping:[
            "End of Bed",
            "Under the bed",
            "on the counter",
        ]
    },
    {
        name: "Rad",
        url: "/rad",
        image: "dog4.jpg",
        age: 15,
        food: "waste",
        sleeping:[
            "in hell",
            "cats stink",
            "on the dryer",
        ]
    }
]

var allCars = [
    {
        name: "Porsche",
        url: "/porsche",
        image: "car1.jpg",
        year: 2020,
    },
    {
        name: "Ford",
        url: "/ford",
        image: "car2.jpg",
        year: 2004,
    },
    {
        name: "Corvette",
        url: "/corvette",
        image: "car3.jpg",
        year: 2019,
    },
    {
        name: "Fancy",
        url: "/fancy",
        image: "car4.jpg",
        year: 2022,
    }
    
]

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/allDogs', (reg, res) => {
    res.render('allDogs', {allDogs: allDogs});
})
app.get('/zeeks', (req, res) => {
    res.render('dog', {dog: allDogs[0]});
})
app.get('/goldie', (req, res) => {
    res.render('dog', {dog: allDogs[1]});
})
app.get('/happy', (req, res) => {
    res.render('dog', {dog: allDogs[2]});
})
app.get('/rad', (req, res) => {
    res.render('dog', {dog: allDogs[3]});
})

app.get('/allCars', (reg, res) => {
    res.render('allCars', {allCars: allCars})
})
app.get('/porsche', (req, res) => {
    res.render('car', {car: allCars[0]});
})
app.get('/ford', (req, res) => {
    res.render('car', {car: allCars[1]});
})
app.get('/corvette', (req, res) => {
    res.render('car', {car: allCars[2]});
})
app.get('/fanct', (req, res) => {
    res.render('car', {car: allCars[3]});
})

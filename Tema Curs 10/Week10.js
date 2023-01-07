
const Car = () =>{
  function Cartype() {
    this.type = "";
    this.brand = "";
    this.model = null;
    this.fuel = null;
  }

  function BuildCar(settings) {
    Cartype.call(this);
    const { type, brand, model, fuel} = settings;
    this.type = type;
    this.brand = brand;
    this.model = model;
    this.fuel = fuel;
  }

  function secondCar(settings) {
    Cartype.call(this);
    const { type, brand, fuel} = settings;
    this.type = type;
    this.brand = brand;
    this.fuel = fuel;
  }
  BuildCar.prototype = Object.create(Cartype.prototype);
  secondCar.prototype = Object.create(Cartype.prototype);

  function CarList (...args){
    this.Cartype = args;
  }
  var Car1 = new BuildCar({
    type: "SportsCar",
    brand:"Dacia",
    model: "Logan",
    fuel:"GPL",
  });

  var Car2 = new BuildCar ({
    type:"OffRoad",
    brand: "BMW",
    model: "Seria 3",
    fuel: "Disel",
  });

  var Car3 = new BuildCar({
    type:"Sedan",
    brand: "Audi",
    model:"A4",
    fuel:"Disel",
  });

  var Car4 = new BuildCar({
    type:"OffRoad",
    brand:"Dacia",
    model:"Sandero",
    fuel:"Gasoline",
  });
   var Car5 = new BuildCar({
    type:"OffRoad",
    brand:"Dacia",
    model:"Duster",
    fuel:"Gasoline",
   });

   var Car6 = new BuildCar({
    type:"Sedan",
    brand:"Audi",
    model:"A6",
    fuel:"Diesel",
   });

   var Car7 = new secondCar ({
    type:"Sedan",
    brand:"Bmw",
    fuel:"Gasoline",
   });

   var Car8 = new secondCar ({
    type:"Sedan",
    brand:"Bmw",
    fuel:"Disel",
   });

   var Car9 = new secondCar ({
    type:"Sedan",
    brand:"Dacia",
    fuel:"Disel",
   });

   var Car10 = new secondCar({
    type:"OffRoad",
    brand:"Audi",
    fuel: "Disel",
    });
    var Car11 = new secondCar({
      type:"OffRoad",
      brand:"Dacia",
      fuel: "Disel",
      });
      var Car12 = new secondCar({
        type:"OffRoad",
        brand:"Dacia",
        fuel: "Disel",
        });

    const CarColection1 = {Car1, Car2, Car3, Car4, Car5,} ;
    const CarColection2 = {Car6, Car7, Car8, Car9, Car10};
    const Colection = new CarList(CarColection1, CarColection2);
    console.log(Colection);
};

Car();

const City = () => {
    function Location(settings) {
        this.City = "";
        this.Language = "";
        this.country = "";
    }
 function City(settings){
  Location.call(this);
    const { City, Language, country} = settings;
    this.City = City;
    this.Language = Language;
    this.country = country;
 }
 City.prototype = Object.create(Location.prototype);

 var City1 = new City({
  City: "Barcelona",
  Language: "Spanish",
  country: "Spain",
 });

 var City2 = new City({
  City:"Madrid",
  Language:"Spanish",
  country:"Spain",
 });

 var City3 = new City ({
  City:"New York",
  Language:"English",
  country:"USA",
 });

 var City4 = new City ({
  City:"Dallas",
  Language:"English",
  country:"USA",
 });

 var City5 = new City ({
  City:"London",
  Language:"English",
  country:"England",
 });

 var City6 = new City ({
  City:"Berlin",
  Language:"German",
  country:"Germany",
 });

 function Country(settings){
  Location.call(this);
    const { Continent, Language, Population} = settings;
    this.Continent = Continent;
    this.Language = Language;
    this.Population = Population; 
 }
 Country.prototype = Object.assign(Country.prototype, Location.prototype);

 var Romania = new Country({
  Continent: "Europe",
  Language: "Romanian",
  Population: "20 Milion",
 });

 var Spain = new Country({
  Continent: "Europe",
  Language: "Spanish",
  Population: "47 Milion",
 });

 var USA = new Country({
  Continent: "North America",
  Language:"Elglish",
  Population:"300 Milion",
 });

 var Mexico = new Country({
  Continent:"North America",
  Language:"spanish ",
  Population:"126 Milion",
 });
 var Japan = new Country({
  Continent:"Asia",
  Language:"japonese ",
  Population:"125 Milion",
 });
 var Germany = new Country({
  Continent:"Europe",
  Language:"German",
  Population:"83 Milion",
 });
 function Citylist(...args){
    this.List = args;
 }
const town ={City1, City2, City3, City4, City5, City6};
const Loc ={Romania, Spain, USA, Mexico, Japan, Germany};
const Place = new Citylist(town, Loc);
console.log(Place);
};

City();

const dif = (x, y) => {
   return x - y;
 };
 console.log(dif(8, 7));
 console.log(dif(52, 60));
 const place = (x) => {
   return x;
 };
 console.log(place("Targu-Mures"));
 function message(object) {
   return "Salut Bogdan";
 }
 console.log(message());
 const numbers = (array) => {
   return array;
 };
 console.log(numbers([1, 5, 15, 20, 35]));
 const Num = [1, 2, 3, 4, 5, 6];
 Num.forEach((number) => console.log(number));
 function sumN() {
   var Sum = 0;
   for (var i = 0; i < arguments.length; i++) {
     Sum += arguments[i];
   }
   return Sum;
 }
 console.log(sumN(4, 5));
 console.log(sumN(20,6));

 function promise() {
   const promiseP = new Promise((resolve, reject) => {
     var a = "";
     if (a <= 5) {
       resolve(true);
     } else {
       reject(false);
     }
   });
   return promiseP;
 }
 console.log(promise(4));
 console.log(promise(5));
 
 
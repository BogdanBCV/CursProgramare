const createCar = (name, color,year, wheels, doors, engine) => {
    const car = {
        name: 'Toyota',
        settings: {
          color: 'white',
          doors: 5,
        }
      };

    const modelYear = {
        model: "Corola",
        Year: 2020 ,
        engine: "2.0"

    }
  const setname = (name) => {};
  const setcolor = (color) => {};
  const setyear = (year) => {};
  const createWheels = (wheels) => {};
  const createDoor = (doors) => {};
  const createengine = (engine) => {};
  
var carClone = { ...car };
var mycar = { ...carClone, ...modelYear };
return mycar;
}
const Toyota = createCar();
console.log(Toyota);




  const person = {
    name: "Costas",
    address: {
      street: "Lalaland 12"
    }
  };

  const A = { address: { street } } = person;
  console.log(A);

  const car = {
    name: 'Toyota',
    settings: {
      color: 'white',
      doors: 5,
    }
  };
 const newCar = { settings: {color,doors}} = car;
 console.log(newCar);

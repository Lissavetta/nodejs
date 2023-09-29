class User {

  constructor(name, age, city, street, house) {
    this.name = name;
	this.age = age;
	this.city = city;
	this.street = street;
	this.house = house;

}

  sayHi() {
    console.log(`User information: ${this.name}, ${this.age}, ${this.city}, ${this.street}, ${this.house}`);
  }
  
}

function getTotalAge(massiv){
	let totalAge = 0;
	massiv.forEach(element => {
		totalAge+=element.age;
	});
	return totalAge;
}

function getUsersStreets(massiv){
	let usersStreets = massiv.map(element=>element.street); // element = User in massive
	return usersStreets;
}

function getOldPeople(massiv){
	let oldPeople = massiv.filter(element => element.age > 60);
	return oldPeople;
}

const Users = [
	new User("Alexander", 24, 'Moscow', 'Lenina', '12'),
	new User("Maxim", 67, 'Vitebsk', 'Potato street', '5k1'),
	new User("Vlad", 300, 'Sigioshara', 'Romanian street', '666'),
	new User("Elizaveta", 20, 'Lobnya', 'Krupskoy', '24'),
	new User("Ekaterina", 14, 'Lobnya', 'Pobedy', '14'),
	new User("Nikolay", 45, 'Vodniki', 'Fizkulturnaya', '2')
]


const totalAge = getTotalAge(Users);
console.log(totalAge);

const usersStreets = getUsersStreets(Users);
console.log(usersStreets);

const oldPeople = getOldPeople(Users);
for(let i = 0; i < oldPeople.length; i++){
	oldPeople[i].sayHi();
}
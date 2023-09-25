class User {

  constructor(name, age, address) {
    this.name = name;
	this.age = age;
	this.address = address;
  }

  sayHi() {
    console.log(`User information: ${this.name}, ${this.age}, ${this.address}`);
  }
  
}

function getTotalAge(massiv){
	let totalAge = 0;
	for (let i = 0; i < massiv.length; i++){
		totalAge += massiv[i].age;
	}
return totalAge;
}

function getUsersStreets(massiv){
	let usersStreets = [];
	for (let i = 0; i < massiv.length; i++){
		usersStreets.push(massiv[i].address[1])
	}
return usersStreets;
}

function getOldPeople(massiv){
	let oldPeople = [];
	for (let i = 0; i < massiv.length; i++){
		if (massiv[i].age > 60){
		oldPeople.push(massiv[i]);
		}
	}
return oldPeople;
}

let Users = [
	user1 = new User("Alexander", 24, ['Moscow', 'Lenina', '12']),
	user2 = new User("Maxim", 67, ['Vitebsk', 'Potato street', '5k1']),
	user3 = new User("Vlad", 300, ['Sigioshara', 'Romanian street', '666']),
	user4 = new User("Elizaveta", 20, ['Lobnya', 'Krupskoy', '24']),
	user5 = new User("Ekaterina", 14, ['Lobnya', 'Pobedy', '14']),
	user6 = new User("Nikolay", 45, ['Vodniki', 'Fizkulturnaya', '2'])
]


let totalAge = getTotalAge(Users);
console.log(totalAge);

let usersStreets = getUsersStreets(Users);
console.log(usersStreets);

let oldPeople = getOldPeople(Users);
for(let i = 0; i < oldPeople.length; i++){
	oldPeople[i].sayHi();
}
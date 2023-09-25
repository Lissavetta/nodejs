class User {
	constructor(ID, name, age) {
	  this.ID = ID;
	  this.name = name;
	  this.age = age;
	}
	sayHi() {
	  console.log(`ID = ${this.ID}, Name = ${this.name}, Age = ${this.age}`);
	}
}
  
let userList = [
	user1 = new User(1, "Alexander", 10),
	user2 = new User(2, "Olga", 23),
	user3 = new User(17, "Matthew", 47),
	user4 = new User(989, "Dominic", 25),
	user5 = new User(3, "Gendalf", 2000),
	user6 = new User(4, "Sirius", 38)
]
  
function sleep(time) {
	const promise = new Promise(function (resolve, reject) {
		if(typeof(time) === "number"){
		setTimeout(() => resolve(), time);
		}
		else{
		setTimeout(() => reject(new Error("А не может time быть не численным значением! Дурашка:)")), seconds * 1000);
		}
	});
	return promise
}
  
async function getUser(ID_num){
	await sleep(1000);
	console.log(`ID ${ID_num} loaded`);
	return userList.find((element) => element.ID == ID_num);
}
  
async function loadUsersSquentially(ID_list){
	let loadedUsers = [];
	for(let i = 0; i < ID_list.length; i++){
	  loadedUsers.push(await getUser(ID_list[i]));
	}
	for(let i = 0; i < loadedUsers.length; i++){
	  loadedUsers[i].sayHi();
	}
return loadedUsers;
}
  
async function loadUsersInParallel(ID_list){
	let loadedUsers = [];
	const promises = Array(ID_list.length).fill(null).map((_, i) => 
		getUser(ID_list[i])
	)
	for (const j of promises){  
	  loadedUsers.push(await j)
	}
	for(let i = 0; i < loadedUsers.length; i++){
	  loadedUsers[i].sayHi()
	}
return loadedUsers;
}

async function task2(){
	let findUserIds = [1, 2, 3, 4];
	await loadUsersSquentially(findUserIds);
	await loadUsersInParallel(findUserIds);
}
task2();
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or

// There will be no Python developers if no Python developer has signed up.

// For example, given the following input array:

var list1 = [
	{ firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
	{
		firstName: 'Victoria',
		lastName: 'T.',
		country: 'Puerto Rico',
		continent: 'Americas',
		age: 30,
		language: 'Python'
	},
	{ firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

// Your function should return Victoria, Puerto Rico.

// Notes:

// The input array will always be valid and formatted as in the example above.

// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

// Kata #4 Python Developer
const getFirstPython = (list) => {
	for (let i of list) {
		if (i.language === 'Python') return `${i.firstName}, ${i.country}`;
	}
	return 'There will be no Python developers';
};

// Better Solution
// const getFirstPython =list => {
//   const dev = list.find(x => x.language === "Python")
//   return dev ? `${dev.firstName}, ${dev.country}` : "There will be no Python developers"
// }

// getFirstPython(list1)

// ======. Example =======

// else if ternary
// dev ? `${dev.firstName}, ${dev.country}` : dev.continent === 'Asia' ?"show me the money" : "There will be no Python developers"

// else if conditional not as a ternary
// if (dev) {
//   `${dev.firstName}, ${dev.country}`
// } else if (dev.continent === 'Asia') {
//   "show me the money"
// } else {
//   "There will be no Python developers"
// }

// =======================

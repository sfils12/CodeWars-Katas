// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.

// For example, given the following input array:

var list1 = [
	{ firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
	{ firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
	{ firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
];

// Your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.

// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

// Kata Solution:
const isRubyComing = (list) => {
	let result = false;
	for (let i of list) {
		if (i.language === 'Ruby') result = true;
	}
	return result;
};

// Better Solution
// const isRubyComing = list => {
//   return list.some(dev => dev.language === "Ruby")
// }

// One Liner Solution

// const isRubyComing = list => list.some(dev => dev.language === "Ruby")

// isRubyComing(list1)

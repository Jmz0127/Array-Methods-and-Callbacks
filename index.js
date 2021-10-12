const { arrayExpression } = require('@babel/types');
const { fifaData } = require('./fifa.js');

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

// fifaData is the array for all of these!! Started by filtering for 2014 only since the rest of task 1 is asking for cuts of 2014 data
const finals2014 = fifaData.filter(function (item) {
	return item['Year'] === 2014 && item['Stage'] === 'Final';
});

console.log(finals2014);

//(a) Home Team name for 2014 world cup final
// array[index]['key']
console.log('Task 1a', finals2014[0]['Home Team Name']);

//(b) Away Team name for 2014 world cup final
// array[index]['key']
console.log('Task 1b', finals2014[0]['Away Team Name']);

//(c) Home Team goals for 2014 world cup final
console.log('Task 1c', finals2014[0]['Home Team Goals']);

//(d) Away Team goals for 2014 world cup final
console.log('Task 1d', finals2014[0]['Away Team Goals']);

//(e) Winner of 2014 world cup final */
console.log('Task 1e', finals2014[0]['Win conditions']);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

// filtering all of the teams that made it to final stage, use filter!!!

function getFinals(item) {
	const newArray2 = item.filter(function (item) {
		return item.Stage === 'Final';
	});
	return newArray2;
}
console.log('task 2', getFinals(fifaData));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

// Probably use map over what we had in task 2!!!

function getYears(data, getFinalsCB) {
	return getFinalsCB(data).map(function (item) {
		return item.Year;
	});
}
console.log('task 3', getYears(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */

// compare the points between home and away points. we don't care about overtime, just compare points!!!

function getWinners(data, getFinalsCB) {
	return getFinalsCB(data).map((item) => (item['Home Team Goals'] > item['Away Team Goals'] ? item['Home Team Name'] : item['Away Team Name']));
}

console.log('task 4', getWinners(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

// use index in addition to item here. Use map !!!

function getWinnersByYear(data, getYearsCB, getWinnersCB) {
	const winners = getWinnersCB(data, getFinals);
	const years = getYearsCB(data, getFinals);
	return winners.map((item, index) => `In ${years[index]}, ${winners[index]} won the world cup!`);
	return winners;
}

console.log('task 5', getWinnersByYear(fifaData, getYears, getWinners));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

// use .toFixed(2) to round to 2 decimal places

function getAverageGoals(data) {
	const averageHomeGoals = data.reduce(function (acc, item) {
		return acc + item['Home Team Goals'] + item['Away Team Goals'];
	}, 0);
	return (averageHomeGoals / data.length).toFixed(2);
}
console.log('task 6', getAverageGoals(fifaData));
/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {
	/* code here */
}

/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {
	/* code here */
}

/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {
	/* code here */
}

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo() {
	console.log('its working');
	return 'bar';
}
foo();
module.exports = {
	foo,
	getFinals,
	getYears,
	getWinners,
	getWinnersByYear,
	getAverageGoals
};

/* Create a function that takes an array and returns the first element. */

function getFirstElement(arr) {
	///Your code Starts here 
	
	
	if (arr.length > 0) {
		return arr[0];
	} else {
		return undefined;
	}
	
	
	///Your code Ends here
}
/*
Lines For TestCase

getFirstElement([1, 2, 3]);
getFirstElement([80, 5, 100]);
getFirstElement([-500, 0, 50]);
*/
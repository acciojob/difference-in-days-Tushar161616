var dateDiffInDays = function (date1, date2) {
    const d1 = new Date(date1); // Parse the first date
    const d2 = new Date(date2); // Parse the second date
    const diffTime = d2 - d1; // Difference in milliseconds
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Convert to days
    return diffDays; // Return the difference
};


// 	const ans = s.split('').reverse().join('');
// 	return ans ;
// 

// Do not change the code below.
const dateOne = prompt("Enter Start Date");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

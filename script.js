var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const newd1 = date1.split(-);
	const newd2 = date2.split(-);
	return newd1-newd2;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

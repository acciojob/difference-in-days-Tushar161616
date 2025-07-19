var dateDiffInDays = function (date1, date2) {
  //   write your code here

	// const date1 = new Date('7/11/2010');
	// const date2 = new Date('12/12/2010');
	const diffDays = date2.getDate() - date1.getDate(); 
alert(diffDays)
	return diffDays;
	
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

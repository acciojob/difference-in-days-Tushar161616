var dateDiffInDays = function (date1, date2) {
  //   write your code here

	const date3 = reverse(date1);
	const date4 = reverse(date2);
	const diffDays = date4.getDate() - date3.getDate(); 
// alert(diffDays)
	return diffDays;
	
};
function reverse(s) {
	const ans = s.split('').reverse().join('');
	return ans ;
}

// Do not change the code below.
const dateOne = prompt("Enter Start Date");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

export const date = {
	getTimeNow
}

var today = new Date()
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]	

function getTimeNow() {
	return today.getDate()+' '+monthNames[today.getMonth()]+' '+today.getFullYear()
}
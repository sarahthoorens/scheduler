// Today's date and timestamp using day.js
let dateTime = document.getElementById('currentDay')
console.log(dayjs)
currentTime = dayjs().format('MMMM DD, YYYY HH:mm:ss')
console.log(currentTime)
dateTime.textContent = currentTime



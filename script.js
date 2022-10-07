// Today's date and timestamp using day.js
let dateTime = document.getElementById('currentDay')
console.log(dayjs)
currentTime = dayjs().format('MMMM DD, YYYY HH:mm:ss')
console.log(currentTime)
dateTime.textContent = currentTime
let calendarEntry= document.getElementById('input')
let saveBtn = document.getElementById('calendar-btn')


// Save new and render existing appointments upon page load
function saveLastEntry() {
    localStorage.setItem('appointment', calendarEntry.value);
    console.log(calendarEntry)
}

function renderAllEntries () {
    var lastEntries = localStorage.getItem('appointment');
    if (lastEntries !== null) {
        console.log(lastEntries);
        calendarEntry.value = lastEntries;
    } else {
        return;
    }
}
saveBtn.addEventListener('click', (e) => {
    e.preventDefault();
    saveLastEntry();
    renderAllEntries();
});

function init() {
    renderAllEntries();
}
init();

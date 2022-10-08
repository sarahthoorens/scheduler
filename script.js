const dateTimeEl = $('#currentDay')
const clearAll = $('#clear-btn')
let rightNow

let calendarEntry8= document.getElementById('input8')
let calendarEntry9= document.getElementById('input9')
let calendarEntry10= document.getElementById('input10')
let calendarEntry11= document.getElementById('input11')
let calendarEntry12= document.getElementById('input12')
let calendarEntry13= document.getElementById('input13')
let calendarEntry14= document.getElementById('input14')
let calendarEntry15= document.getElementById('input15')
let calendarEntry16= document.getElementById('input16')



// Today's date and timestamp using moment.js
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] HH:mm:ss a');
    dateTimeEl.text(rightNow);
  }
  setInterval(displayTime, 1000);
  

// Save new appointments upon page load
function saveLastEntry() {
    localStorage.setItem('appointment at 8', calendarEntry8.value)
    localStorage.setItem('appointment at 9', calendarEntry9.value);
    localStorage.setItem('appointment at 10', calendarEntry10.value)
    localStorage.setItem('appointment at 11', calendarEntry11.value);
    localStorage.setItem('appointment at 12', calendarEntry12.value)
    localStorage.setItem('appointment at 13', calendarEntry13.value);
    localStorage.setItem('appointment at 14', calendarEntry14.value)
    localStorage.setItem('appointment at 15', calendarEntry15.value);
    localStorage.setItem('appointment at 16', calendarEntry16.value)
  
    console.log(calendarEntry8.value, calendarEntry16.value)
}
$('span > button').on('click', function(event){
event.preventDefault();
console.log('i have been clicked');
    saveLastEntry();
})

function renderAllEntries () {
    var lastEntry8 = localStorage.getItem('appointment at 8');
    var lastEntry9 = localStorage.getItem('appointment at 9');
    var lastEntry10 = localStorage.getItem('appointment at 10');
    var lastEntry11 = localStorage.getItem('appointment at 11');
    var lastEntry12 = localStorage.getItem('appointment at 12');
    var lastEntry13 = localStorage.getItem('appointment at 13');
    var lastEntry14 = localStorage.getItem('appointment at 14');
    var lastEntry15 = localStorage.getItem('appointment at 15');
    var lastEntry16 = localStorage.getItem('appointment at 16');
    if (lastEntry8 !== null || lastEntry9 !== null || lastEntry10 !== null || lastEntry11 !== null || lastEntry12 !== null || lastEntry13 !== null
        || lastEntry14 !== null || lastEntry15 !== null || lastEntry16 !== null) {
        calendarEntry8.value = lastEntry8;
        calendarEntry9.value = lastEntry9;
        calendarEntry10.value = lastEntry10;
        calendarEntry11.value = lastEntry11;
        calendarEntry12.value = lastEntry12;
        calendarEntry13.value = lastEntry13;
        calendarEntry14.value = lastEntry14;
        calendarEntry15.value = lastEntry15;
        calendarEntry16.value = lastEntry16;
    } else {
        return;
    }
}


function init() {
    renderAllEntries();
}
init();


clearAll.on('click', function (event) {
    localStorage.clear();
    window.location.reload();

})

// Change row color based on current hour of the day

let today = new Date();
let currentHour = (today.getHours());
console.log(currentHour);
let convertedCurrentHour = `${currentHour}:00`;
console.log(convertedCurrentHour);


let rowEl = document.querySelectorAll('tr'); 
console.log(rowEl);
let hourEl = []

$(window).on('load', function(){
let hourEl = document.querySelectorAll('p.hour')
const len = hourEl.length;
for (let i = 0; i < len; i++) {
    console.log(hourEl[i].innerText);
if (convertedCurrentHour < hourEl[i].innerText) {
   rowEl[i].setAttribute('class','future');
}
   else if (convertedCurrentHour > hourEl[i].innerText) {
    rowEl[i].setAttribute('class', 'past');
}
else if (convertedCurrentHour === hourEl[i].innerText) {
    rowEl[i].setAttribute('class', 'present');
}
   }
});












// if (convertedCurrentHour < (hourEl.innerText)) { 
//     rowEl.classList.add('past');
//  };
//  else if (convertedCurrentHour === hourEl.innerText) {
 
//     rowEl.classList.add('present');
    
// let calendarEntries = [
//     at8, at9, at10, at11, at12, at13, at14, at15, at16
// ]


// const inputEl = $('#input');
// const timeblocks = document.querySelectorAll('[data-timeblock-id]')let calendarEntry= document.getElementById('input')
// }

// function renderAllEntries () {
//     var lastEntries = localStorage.getItem('appointment at 8');

//     if (lastEntries !== null) {
//         console.log(lastEntries);
//         timeEl8.value = lastEntries;
//     } else {
//         return;
//     }
// };


//     renderAllEntries();
// });

// function init() {
//     renderAllEntries();
// }
// init();

// console.log(calendarEntries)

// let timeEl8 = document.getElementById('input8')
// let timeEl9 = document.getElementById('input9');
// let timeEl10 = document.getElementById('input10');
// let timeEl11 = document.getElementById('input11');
// let timeEl12 = document.getElementById('input12');
// let timeEl13 = document.getElementById('input13');
// let timeEl14 = document.getElementById('input14');
// let timeEl15 = document.getElementById('input15');
// let timeEl16 = document.getElementById('input16');

// let calendarEntries = [timeEl8, timeEl9, timeEl10, timeEl11, timeEl12, timeEl13, timeEl14, timeEl15, timeEl16]
// timeblocks.forEach(button => {
//     button.addEventListener('click', () => {
//         const timeblockId = button.dataset.timeblockId;
//         const timeblock = document.getElementById(timeblockId);
//         localStorage.setItem('appointment', timeblock.value);
//         console.log(timeblock.value);
//     })
// })
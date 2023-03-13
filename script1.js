let day = document.getElementById('day')

function dayNumber() {
    number = prompt('Give a number')
    console.log(number)
    if (+number === 0) {
        console.log('Sunday');
        day.innerHTML = "Sunday"
    } else if (+number === 1) {
        console.log('Monday');
        day.innerHTML = "Monday"
    } else if (+number === 2) {
        console.log('Tuesday');
        day.innerHTML = "Tuesday"
    } else if (+number === 3) {
        console.log('Wednesday');
        day.innerHTML = "Wednesday"
    } else if (+number === 4) {
        console.log('Thursday');
        day.innerHTML = "Thursday"
    } else if (+number === 5) {
        console.log('Friday');
        day.innerHTML = "Friday"
    } else if (+number === 6) {
        console.log('Saturday');
        day.innerHTML = "Saturday"
    } else {
        console.log('Invalid day number');
        alert('Invalid day number')
    }
}
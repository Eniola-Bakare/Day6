const daysLeft = document.getElementsByClassName('day')[0]
const hourLeft = document.getElementsByClassName('hour')[0]
const minuteLeft = document.getElementsByClassName('minute')[0]
const secondLeft = document.getElementsByClassName('seconds')[0]

function countDown(){
    const dateEnd = new Date('November 30, 2022 00:00:00').getTime()
    const currentDate = new Date().getTime()
    // console.log(currentDate)
    // console.log(dateEnd)

    const differenceTime = dateEnd - currentDate
    // console.log(differenceTime)

    // getting each time element

    const seconds = 1000
    const minutes = seconds * 60
    const hour = minutes * 60
    const days = hour * 24

    const numOfDays = Math.floor(differenceTime/days); console.log(numOfDays)


    const hoursLeft = Math.floor((differenceTime % days)/ hour); //console.log(hoursLeft)


    const minutesLeft = Math.floor((differenceTime % hour)/ minutes); //console.log(minutesLeft)


    const secondsLeft = Math.floor((differenceTime % minutes)/ seconds); //console.log(secondsLeft)



    // changing the html texts
    daysLeft.textContent = numOfDays
    hourLeft.textContent = hoursLeft
    minuteLeft.textContent = minutesLeft
    secondLeft.textContent = secondsLeft

}

setInterval(countDown, 1000)
// countDown()
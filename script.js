const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0

let int = setInterval(blurring, 30)//setInterval(blurring, 30): This creates a timer that calls the blurring function every 30 milliseconds.

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`//The innerText property is used in JavaScript to modify or retrieve the visible text content of an HTML element
  loadText.style.opacity = scale(load, 0, 100, 1, 0)//When load = 0, opacity will be 1 (fully visible), and when load = 100, opacity will be 0 
  bg.style.filter = `blur(${scale(load, 0, 100, 60, 0)}px)`
   bg.style.transform = `scale(${scale(load, 1, 100, 10, 1)})`
}


// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {//utility function that takes a number from one range and converts it to another range.
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
// //num: The input number to be scaled (in this case, the load value).
// in_min and in_max: The minimum and maximum values of the input range (e.g., 0 to 100 for load).
// out_min and out_max: The minimum and maximum values of the output range (e.g., 30 to 0 for the blur or 1 to 0 for opacity).


// if load = 50, and you are mapping it from 0-100 (input range) to 30-0 (output range):

// Results: scale(50, 0, 100, 30, 0) => ((50 - 0) * (0 - 30)) / (100 - 0) + 30 = 15px

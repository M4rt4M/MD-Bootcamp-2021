// Timers
const TIMER_SECONDS = 5000;
const sayMessage = () => {
    console.log("hello from say message");
};

setTimeout(sayMessage, TIMER_SECONDS);

// Interval
setInterval(function() {
    console.log("hello from interval")
}, TIMER_SECONDS);

// Remove interval
const timer = setInterval(function() {
    console.log("Running every 2 seconds")
}, 2000);

clearInterval(timer); //use this e.g. to stop all timers
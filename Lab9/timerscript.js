var startTime = new Date().getTime();

console.log("Start time in milliseconds: " + startTime);

function stopTime() {
    var stopTime = new Date().getTime();

    console.log("Stop time in milliseconds: " + stopTime);

    // This stops the timer


    var timeDifference = stopTime - startTime; //difference in time

    // Convert milliseconds to get # of seconds
    var secondsDifference = timeDifference / 1000;

    alert("You have been on the page for: " + secondsDifference + " seconds");
}

// Why pay a fortune teller when you can just program your fortune yourself? Write a function named tellFortune() that:
// Takes 4 arguments: number of children, partner's name, geographic location, job title.
// Outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function tellFortune(bimbi, amore, posto, lavoro) {
    return window.console.log("You will be a " + lavoro + " in " + posto + ", and married to " + amore + " with " + bimbi + " kid(s).");
}

tellFortune(0, "GianPaolo", "Maldives", "designer");
tellFortune(1, "Paolo", "Italy", "producer");
tellFortune(2, "Chris Hemsworth", "Australia", "movie editor");
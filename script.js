






//////////////// current date obj/////////////////////////
const today = new Date();
const options = { month: 'long' ,day: "numeric" , year: 'numeric'};
const formattedDate = today.toLocaleDateString('en-US', options);

// checking if it displays the date 
console.log(formattedDate);

///////////////////////////////////////////////
// displsy the current date in the header
document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("date").innerHTML = formattedDate;
});
///////////////////////////////////////////////



//////////////////////CHRISTMAS//////////////////////////////
// xmas date obj
const christmas = new Date(today.getFullYear(), 11, 25);

// If today is after Christmas, set the date of Christmas to next year
if (today.getTime() > christmas.getTime()) {
    christmas.setFullYear(christmas.getFullYear() + 1);
}

// Calculate the time difference in milliseconds
const timeDifferenceXmas = christmas.getTime() - today.getTime();

// Calculate the number of days until Christmas
const daysUntilChristmas = "Only " + Math.ceil(timeDifferenceXmas / (1000 * 3600 * 24)) + " days left until Christmas";

var xmasDay = "Merry Christmas!";

// If the date is between 25 and 31 of December
if (today.getMonth() === 11 && today.getDate() >= 25 && today.getDate() <= 31) {  
    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("daysUntilChristmas").innerHTML = xmasDay;
      });
  }
else{
    // displays the days left until x-mas in span with the id 
    document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("daysUntilChristmas").innerHTML = daysUntilChristmas;
  });
}

//////////////////////VALENTINE//////////////////////

const valentines = new Date(today.getFullYear(), 1, 14);

// If today is after Valentine's Day, set the date of Valentine's to next year
if (today.getTime() > valentines.getTime()) {
    valentines.setFullYear(valentines.getFullYear() + 1);
}

// Calculate the time difference in milliseconds
const timeDifferenceValentine = valentines.getTime() - today.getTime();

// Calculate the number of days until Valentine's Day
const daysUntilValentines = "Only " + Math.ceil(timeDifferenceValentine / (1000 * 3600 * 24)) + " days left until Valentine's Day";

var valentinesDay = "Happy Valentine's Day!";

// If the date is between 14 and 17 of February
if (today.getMonth() === 1 && today.getDate() === 14) {  
    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("daysUntilValentines").innerHTML = valentinesDay;
      });
  }
else{
    // displays the days left until Valentine's Day in span with the id 
    document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("daysUntilValentines").innerHTML = daysUntilValentines;
  });
}

//////////////// Easter////////////////////////
const easter = new Date(today.getFullYear(), 3, 9);

if (today.getTime() > easter.getTime()) {
    easter.setFullYear(easter.getFullYear() + 1);
}

// Calculate the time difference in milliseconds
const timeDifferenceEaster = easter.getTime() - today.getTime();

const daysUntilEaster = "Only " + Math.ceil(timeDifferenceEaster / (1000 * 3600 * 24)) + " days left until Easter's Day";

var easterDay = "Happy Easter's Day!";

if (today.getMonth() === 3 && today.getDate() >= 8 && today.getDate() <= 12) {  
    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("daysUntilEaster").innerHTML = easterDay;
      });
  }
else{
    document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("daysUntilEaster").innerHTML = daysUntilEaster;
  });
}

////////// Veterns day ///////////////

const veterns = new Date(today.getFullYear(), 10, 11);

if (today.getTime() > veterns.getTime()) {
  veterns.setFullYear(veterns.getFullYear() + 1);
}

// Calculate the time difference in milliseconds
const timeDifferenceVeterns = veterns.getTime() - today.getTime();

const daysUntilVeterns = "Only " + Math.ceil(timeDifferenceVeterns / (1000 * 3600 * 24)) + " days left until Veterns's Day";

var veternsDay = "Happy Vetern's Day. Thank you for your Service!";

if (today.getMonth() === 10 && today.getDate() === 11 ) {  
    document.addEventListener("DOMContentLoaded", function(event) {
        document.getElementById("daysUntilVeterns").innerHTML = veternsDay;
      });
  }
else{
    document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("daysUntilVeterns").innerHTML = daysUntilVeterns;
  });
}

///// 4th of july

const fourthOfJuly = new Date(today.getFullYear(), 6, 4);

if (today.getTime() > fourthOfJuly.getTime()) {
fourthOfJuly.setFullYear(fourthOfJuly.getFullYear() + 1);
}

const timeDifferenceFourthOfJuly = fourthOfJuly.getTime() - today.getTime();

const daysUntilFourthOfJuly = "Only " + Math.ceil(timeDifferenceFourthOfJuly / (1000 * 3600 * 24)) + " days left until Fourth of July";

var fourthOfJulyMessage = "Happy Fourth of July!";

if (today.getMonth() === 6 && today.getDate() === 4 ) {
document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById("daysUntilFourthOfJuly").innerHTML = fourthOfJulyMessage;
});
} else {
document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById("daysUntilFourthOfJuly").innerHTML = daysUntilFourthOfJuly;
});
}


///////// halloween///////////

const halloween = new Date(today.getFullYear(), 9, 31);

if (today.getTime() > halloween.getTime()) {
halloween.setFullYear(halloween.getFullYear() + 1);
}

const timeDifferenceHalloween = halloween.getTime() - today.getTime();

const daysUntilHalloween = "Only " + Math.ceil(timeDifferenceHalloween / (1000 * 3600 * 24)) + " days left until Halloween";

var halloweenMessage = "Happy Halloween!";

if (today.getMonth() === 9 && today.getDate() === 31 ) {
document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById("daysUntilHalloween").innerHTML = halloweenMessage;
});
} else {
document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById("daysUntilHalloween").innerHTML = daysUntilHalloween;
});
}


////////thanksgiving////////////

const thanksgiving = new Date(today.getFullYear(), 10, 22);

if (today.getTime() > thanksgiving.getTime()) {
thanksgiving.setFullYear(thanksgiving.getFullYear() + 1);
}

const timeDifferenceThanksgiving = thanksgiving.getTime() - today.getTime();

const daysUntilThanksgiving = "Only " + Math.ceil(timeDifferenceThanksgiving / (1000 * 3600 * 24)) + " days left until Thanksgiving";

var thanksgivingMessage = "Happy Thanksgiving!";

if (today.getMonth() === 10 && today.getDate() >= 22 && today.getDate() <= 27 ) {
document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById("daysUntilThanksgiving").innerHTML = thanksgivingMessage;
});
} else {
document.addEventListener("DOMContentLoaded", function(event) {
document.getElementById("daysUntilThanksgiving").innerHTML = daysUntilThanksgiving;
});
}




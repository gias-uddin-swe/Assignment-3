
// https://github.com/gias-uddin-swe/Assignment-3



function KilometerToMeter(km) {
  if (km < 0) {
    return "negative number dosn't exist";
  } else {
    var meter = km * 1000;
  }
  return meter;
}
var result1 = KilometerToMeter(1);
console.log(result1);






//Second Problem Solving budgetCalculator
function budgetCalculator(watch, phone, laptop) {
  if (watch < 0) {
    return "Negative number dosn't exist";
  } else if (phone < 0) {
    return "Negative number dosn't exist";
  } else if (laptop < 0) {
    return "Negative number dosn't exist";
  } else {
    var watch = watch * 50;
    var phone = phone * 100;
    var laptop = laptop * 500;
    var total = watch + phone + laptop;
  }
  return total;
}
var result2 = budgetCalculator(1, 1, 1);
console.log(result2);






//third problem Solving hotelCost
function hotelCost(days) {
  var totalCost = 0;
  if (days < 0) {
    return "Negative days Dosn'n exist";
  } 
  else if (days < 10) {
    totalCost = days * 100;
  } 
  else if (days < 20) {
    var firstPart = 10 * 100;
    var remaining = days - 10;
    var secondpart = remaining * 80;
    totalCost = firstPart + secondpart;
  }
   else {
    var firstPart = 10 * 100;
    var secondpart = 10 * 80;
    var remaining = days - 20;
    var thirdPart = remaining * 50;
    totalCost = firstPart + secondpart + thirdPart;
  }
  return totalCost;
}
var result3 = hotelCost(1);
console.log(result3);





// last problme solving  megaFriend
function megaFriend(arrayName) {
  var lgth = 0;
  var longest;

  for (var i = 0; i < arrayName.length; i++) {
    if (arrayName[i].length > lgth) {
      var lgth = arrayName[i].length;
      longest = arrayName[i];
    }
  }

  return longest;
}

var arrayName = ["tanvir", "Gias Uddin", "programming Hero", "Gias", "Uddin"];
var result4 = megaFriend(arrayName);
console.log(result4);

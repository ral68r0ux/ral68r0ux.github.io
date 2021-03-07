const tempNumber = parseFloat(document.getElementById("temp").textContent);
//console.log(tempNumber);
const speedNumber = parseFloat(document.getElementById("wind").textContent);
//console.log(speedNumber);
let windChill = 35.74 + (0.6215*tempNumber) - (35.75*Math.pow(speedNumber, 0.16))
    + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16));
//console.log(windChill);
windChill = Math.round(windChill);
//console.log(windChill);

if (tempNumber<=50 && speedNumber>3) {
    document.getElementById("chill").textContent = "Wind Chill is " + windChill+"\xb0F";
}
else {
    document.getElementById("chill").textContent = "No Wind Chill today";
}

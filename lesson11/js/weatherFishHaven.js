const date = new Date();
const todaysNumber = date.getDay();

const weekDayName = new Array(7);
  weekDayName[0] = "Sunday";
  weekDayName[1] = "Monday";
  weekDayName[2] = "Tuesday";
  weekDayName[3] = "Wednesday";
  weekDayName[4] = "Thursday";
  weekDayName[5] = "Friday";
  weekDayName[6] = "Saturday";

  const apiURL = '//api.openweathermap.org/data/2.5/forecast?lat=42.0372&lon=-111.3960&id=5604473&appid=802354a04208bdad04e551c4b5cb1f9f&units=imperial' // city id = preston id
  
// send fetch and return
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
console.log(weatherInfo);
// Begin - Current Weather Summary    
    document.getElementById("currentForecast").textContent=weatherInfo.list[0].weather[0].description;
    document.getElementById("currentTemp").textContent=weatherInfo.list[0].main.temp;
    document.getElementById("currentWind").textContent=weatherInfo.list[0].wind.speed;
    document.getElementById("currentHumidity").textContent=weatherInfo.list[0].main.humidity;
    
    const tempNumber = parseFloat(weatherInfo.textContent=weatherInfo.list[0].main.temp);
    const speedNumber = parseFloat(weatherInfo.textContent=weatherInfo.list[0].wind.speed);

    let windChill = Math.round(35.74 + (0.6215*tempNumber) - (35.75*Math.pow(speedNumber, 0.16))
    + (0.4275 * tempNumber * Math.pow(speedNumber, 0.16)));

    if (tempNumber<=50 && speedNumber>3) {
      document.getElementById("windChill").textContent = windChill;
    }
    else {
      document.getElementById("windChill").textContent = "N/A";
    }
// End - Current Weather Summary

// Begin - Five Day Forcast
    let facts = weatherInfo.list;
    let fiveDayNum = todaysNumber;

    for (i=0; i<facts.length; i++){
      let hours = facts[i].dt_txt;

      if (hours.includes('18:00:00')) {
        fiveDayNum += 1;
        if(fiveDayNum === 7){fiveDayNum = 0;}

        // card setup
        
        let dayName = document.createElement('h3');
        dayName.textContent = weekDayName[fiveDayNum];
        
        let dayIcon = document.createElement('img');
        let dayIconCode = weatherInfo.list[i].weather[0].icon;
        let dayIconPath = '//openweathermap.org/img/w/' + dayIconCode + '.png';
        let dayIconAlt = weatherInfo.list[i].weather[0].description; 
        
        dayIcon.src = dayIconPath;
        dayIcon.alt = dayIconAlt;

        let dayTemp = document.createElement('p');
        dayTemp.textContent = weatherInfo.textContent=weatherInfo.list[i].main.temp + "\xB0";

        let card = document.createElement('div'); 
        card.appendChild(dayName);
        card.appendChild(dayIcon);
        card.appendChild(dayTemp);

        document.getElementById('card').appendChild(card);

      } // end of if statement
    } // emd of for statement
// End - Five Day Forcast

  })//end of fetch
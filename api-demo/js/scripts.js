//ADD the key and change units to imperial
//const apiURL = "//api.openweathermap.org/data/2.5/weather?id=5604473&appid=802354a04208bdad04e551c4b5cb1f9f&units=imperial" //city id = preston

const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=84414,us&appid=802354a04208bdad04e551c4b5cb1f9f&units=imperial"// zip code

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {  //the name weatherInfo can be anything you desire
    //Once it comes back, display it to the console.
    console.log(weatherInfo);

    /* bringing in data and putting in on the page */
    document.getElementById('place').innerHTML=weatherInfo.name; // this is how you insert data into you page. you must have a id name
    document.getElementById('currentTemp').innerHTML=weatherInfo.main.temp; //.main.temp is the location of the information in the json file
    document.getElementById('windSpeed').innerHTML=weatherInfo.wind.speed; //.wind.speet is the location of the information in the json file

    /* bringing in an image and putting on the page */
    const iconcode = weatherInfo.weather[0].icon;
    console.log(iconcode);
    const icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    console.log(icon_path);
    document.getElementById('weather_icon').src = icon_path;

    const mylist=weatherInfo.list;
    console.log(mylist);

    /* What is Today */
    /* const mydate = new Date(); // pulls the full date info

    const y = mydate.getDay(); // pulls the day number from the date info

    /* creating our own day name array */
/*  const myweekday = new Array(7);
    myweekday[0] = "Sunday";
    myweekday[1] = "Monday";
    myweekday[2] = "Tuesday";
    myweekday[3] = "Wednesday";
    myweekday[4] = "Thursday";
    myweekday[5] = "Friday";
    myweekday[6] = "Saturday";*/

    const d = new Date();

    const todayDayNumber = d.getDay;

    let forecastDayNumber = todayDayNumber;

    for (i=0; i<mylist.length; i++) {
      var time = mylist[i].dt_txt;
      if (time.includes('21:00:00')){
        forecastDayNumber +=1;
        if (forecastDayNumber===7){ //rotates back to sunday
          forecastDayNumber=0;
        }
      } // end of if statement
    } // end of for statement



 }); //end of "then" fat arrow function




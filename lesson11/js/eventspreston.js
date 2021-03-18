const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
 
      if (towns[i].name == "Preston") {
        
      let box = document.createElement("div");
        
        
        for (let x = 0; x < towns[i].events.length; x++) {
          let info = document.createElement("p");
          console.log(towns[i].events[x]);
          info.textContent = towns[i].events[x];        
          box.appendChild(info);
          document.getElementById("box").appendChild(box); 
        }        
      }
    }
  });


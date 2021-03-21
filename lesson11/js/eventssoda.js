const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
 
      if (towns[i].name == "Soda Springs") {
        
      let box = document.createElement("div");
        
        
        for (let x = 0; x < towns[i].events.length; x++) {
          let info = document.createElement("p");
    
          info.textContent = towns[i].events[x];        
          box.appendChild(info);
          document.getElementById("box").appendChild(box); 
        }        
      }
    }
  });


const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
   
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven" ) {
        let card = document.createElement('div');
        
        let info = document.createElement('section');
        let photo = document.createElement('picture');

        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let townImage = document.createElement('img');
        let yearFounded = document.createElement('p');
        let currentPop = document.createElement('p');
        let aveRainfall = document.createElement('p');

        h2.textContent = towns[i].name;
        h3.textContent = towns[i].motto;
        townImage.setAttribute('src', "images/" + towns[i].photo);
        townImage.setAttribute('alt', towns[i].name);
        townImage.setAttribute('width', '400');
        townImage.setAttribute('height', 'auto');
        yearFounded.textContent= "Year Founded: "+ towns[i].yearFounded;
        currentPop.textContent = "Current Population: " + towns[i].currentPopulation;
        aveRainfall.textContent = "Average Rain Fall: " + towns[i].averageRainfall + " in.";

        photo.appendChild(townImage);
        card.appendChild(photo);

        info.appendChild(h2);
        info.appendChild(h3);
        info.appendChild(yearFounded);
        info.appendChild(currentPop);
        info.appendChild(aveRainfall);
        card.appendChild(info);

        document.querySelector('div.cards').appendChild(card); 
      }
    }
  });


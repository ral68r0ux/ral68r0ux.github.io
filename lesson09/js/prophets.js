const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL) 
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      h2.classList.add('title');
      let prophImage = document.createElement('img');
      let birthDate = document.createElement('p');
      birthDate.classList.add('birthInfo');
      let birthPlace = document.createElement('p');
      birthPlace.classList.add('birthInfo');

      h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
      prophImage.setAttribute('src', prophets[i].imageurl);
      prophImage.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname);
      birthDate.textContent = 'Date of Birth: ' + prophets[i].birthdate;
      birthPlace.textContent = 'Place of Birth: ' + prophets[i].birthplace;

      card.appendChild(h2);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(prophImage);

      document.querySelector('div.cards').appendChild(card); 
    }
  });



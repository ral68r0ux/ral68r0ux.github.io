const requestURL = 'https://ral68r0ux.github.io/nobusiness.json';

fetch(requestURL) 
  .then(function (response) {
    return response.json();})
  .then(function (membersObject) {

    const members = membersObject['members'];
    console.log(members);
    const one = Math.floor(Math.random() * members.length);
    let two = Math.floor(Math.random() * members.length);
    let three = Math.floor(Math.random() * members.length);
console.log(one);
console.log(two);
console.log(three);
    while (one === two|| one === three || two === three) {
      two = Math.floor(Math.random() * members.length);
      three = Math.floor(Math.random() * members.length);
    }
    console.log(one);
    console.log(two);
    console.log(three);
    
    for (let i = 0; i < members.length; i++) {
      if (i == one || i == two || i == three) {
        let card = document.createElement('div');
        
        let info = document.createElement('section');
        let photo = document.createElement('picture');

        let h3 = document.createElement('h3');
        let logoImage = document.createElement('img');
        let street = document.createElement('p');
        let cityLine = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let webAddressText = document.createElement('p');
        let webAddress = document.createElement('a');

        logoImage.setAttribute('src', members[i].logo);
        logoImage.setAttribute('alt', 'Logo');
        logoImage.setAttribute('width', '150');
        logoImage.setAttribute('height', 'auto');
        h3.textContent = members[i].business;
        street.textContent= members[i].address;
        cityLine.textContent= members[i].city + " " + members[i].state + ", " + members[i].zipcode;
        phoneNumber.textContent = members[i].phonenumber;
        webAddressText.textContent = members[i].webaddress;
        webAddress.setAttribute('href', members[i].webaddress);

        photo.appendChild(logoImage);
        card.appendChild(photo);

        info.appendChild(h3);
        info.appendChild(street);
        info.appendChild(cityLine);
        info.appendChild(phoneNumber);
        info.appendChild(webAddressText)
        info.appendChild(webAddress)
        card.appendChild(info);

        document.querySelector('div.cards').appendChild(card); 
      }
    }
  });


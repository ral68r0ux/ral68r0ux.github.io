const requestURL = 'https://ral68r0ux.github.io/nobusiness.json';

fetch(requestURL) 
  .then(function (response) {
    return response.json();})
  .then(function (membersObject) {

    const members = membersObject['members'];
console.log(members); 
    
    for (let i = 0; i < members.length; i++) {

        let card = document.createElement('div');
        card.setAttribute('class', 'businessBlock');

        let info = document.createElement('section');
        info.setAttribute('class', 'infoBlock');
        
        let logo = document.createElement('picture');
        logo.setAttribute('class', 'logoBlock');

        let photo = document.createElement('picture');
        photo.setAttribute('class', 'photoBlock');

        let h3 = document.createElement('h3');
        let logoImage = document.createElement('img');
        let street = document.createElement('p');
        let cityLine = document.createElement('p');
        let phoneNumber = document.createElement('p');
        let domain = document.createElement('p');
        let photoimg = document.createElement('img');

        logoImage.setAttribute('src', members[i].logo);
        logoImage.setAttribute('alt', 'Logo');
        logoImage.setAttribute('width', '150');
        logoImage.setAttribute('height', 'auto');
        
        photoimg.setAttribute('src', members[i].imageurl);
        photoimg.setAttribute('alt', 'Store Image');
        photoimg.setAttribute('width', '300');
        photoimg.setAttribute('height', 'auto');
        
        h3.textContent = members[i].business;
        street.textContent= members[i].address;
        cityLine.textContent= members[i].city + " " + members[i].state + ", " + members[i].zipcode;
        phoneNumber.textContent = members[i].phonenumber;
        domain.textContent = members[i].webaddress;

        logo.appendChild(logoImage);
        photo.appendChild(photoimg);
        
        card.appendChild(logo);
        card.appendChild(photo);

        info.appendChild(h3);
        info.appendChild(street);
        info.appendChild(cityLine);
        info.appendChild(phoneNumber);
        info.appendChild(domain);
        card.appendChild(info);

        document.querySelector('div.directory').appendChild(card); 
      
    }
  });


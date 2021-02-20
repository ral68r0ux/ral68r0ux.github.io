// get all the imgs on the page with data-src
const imagesToLoad = document.querySelectorAll('img[data-src]');

const loadImages = (image) => {
  image.setAttribute('src', image.getAttribute('data-src'));
  image.onload = () => {
    image.removeAttribute('data-src');
  };
};

const imgOptions = {
  threshold: 0,
  rootMargin: '0px 0px 50px 0px'
};

if ('IntersectionObserver' in window){
  // is supported so let's go!
  const imgObserver = new IntersectionObserver((items, imgObserver) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        imgObserver.unobserve(item.target);
      }
    });
  }, imgOptions);

  // load image if necessary
  imagesToLoad.forEach((img) => {
    imgObserver.observe(img);
  });

 }else { //just load all images if not supported
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}


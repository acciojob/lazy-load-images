const imageContainer = document.getElementById("image-container");
const imageCount = 30;

const createImage = (src) => {
  const imageWrapper = document.createElement("div");
  imageWrapper.className = "image";

  const img = document.createElement("img");
  img.setAttribute("data-src", src);
  img.className = "lazy";

  const placeholder = document.createElement("div");
  placeholder.className = "placeholder";

  imageWrapper.appendChild(img);
  imageWrapper.appendChild(placeholder);
  return imageWrapper;
};

for (let i = 0; i < imageCount; i++) {
  const imageUrl = `https://picsum.photos/seed/${Math.random()}/300/300`;
  const image = createImage(imageUrl);
  imageContainer.appendChild(image);
}

// Do not modify the above code
// The above code just renders 30 random images on screen
// Write code below and modify the functions

// This function should set the src of images
// The src for each img element is given in the data-src attribute
const loadImage = (img) => {};

// You can set the data-loaded attribute true here
const onImageLoad = (img) => {};

// Check if image is visible on screen
const isInViewport = (element) => {};

// Load all the images visible on screen
const lazyLoadImages = () => {};

window.addEventListener("scroll", lazyLoadImages);
window.addEventListener("resize", lazyLoadImages);
window.addEventListener("DOMContentLoaded", lazyLoadImages);

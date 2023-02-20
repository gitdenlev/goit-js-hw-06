const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector(".gallery");

const htmlMarkup = images.map(
  (image) => `<li><img class = "photo" src = "${image.url}" alt = "${image.alt}" width = "333px"></li>`
).join("");

list.insertAdjacentHTML("beforeend", htmlMarkup);

const photos = document.querySelector(".photo");

list.style.display = "flex";
list.style.gap = "30px";
list.style.padding = "50px";
list.style.justifyContent = "center";
list.style.alignItems = "center";
list.style.listStyleType = "none";
list.style.borderRadius = "50px";
list.style.backgroundColor = "green";


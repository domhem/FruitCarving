var previewGal = document.querySelector('.preview-gallery-row');

/* Looping through images in the gallery folder */
for(let i = 1; i <= 4; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/gallery/gallery-' + i + '.jpg');
  previewGal.appendChild(newImage);
}

var partyb = document.getElementById("party");
var workb = document.getElementById("work");
var weddingb = document.getElementById("wedding");
var naughtyb = document.getElementById("naughty");

/* Change the gallery to the corresponding label*/
partyb.onclick = function(){
  previewGal.innerHTML = '';
  partyb.style.color="#FFFFFF";
  workb.style.color="#424242";
  weddingb.style.color="#424242";
  naughtyb.style.color="#424242";
  for(let i = 1; i <= 4; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/gallery/party/p' + i + '.jpg');
  previewGal.appendChild(newImage);
  }
}

workb.onclick = function(){
  previewGal.innerHTML = '';
  partyb.style.color="#424242";
  workb.style.color="#FFFFFF";
  weddingb.style.color="#424242";
  naughtyb.style.color="#424242";
  for(let i = 1; i <= 4; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/gallery/work/w' + i + '.jpg');
  previewGal.appendChild(newImage);
  }
}

weddingb.onclick = function(){
  previewGal.innerHTML = '';
  partyb.style.color="#424242";
  workb.style.color="#424242";
  weddingb.style.color="#FFFFFF";
  naughtyb.style.color="#424242";
  for(let i = 1; i <= 4; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/gallery/wedding/w' + i + '.jpg');
  previewGal.appendChild(newImage);
  }
}

naughtyb.onclick = function(){
  previewGal.innerHTML = '';
  partyb.style.color="#424242";
  workb.style.color="#424242";
  weddingb.style.color="#424242";
  naughtyb.style.color="#FFFFFF";
  for(let i = 1; i <= 4; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/gallery/naughty/n' + i + '.jpg');
  previewGal.appendChild(newImage);
  }
}

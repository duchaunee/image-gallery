
const items = document.querySelectorAll('.item');
const img = document.querySelectorAll('.item img');

const gallery = document.querySelector('.gallery');
const imgZoom = document.querySelector('.img-zoom');
const itemZoom = document.querySelector('.item-zoom');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const close = document.querySelector('.close');


var currenIndex;

function showGallery() {
    gallery.classList.remove('hide');
}

function hideGallery() {
    gallery.classList.add('hide');
}

items.forEach( (item, idx) => {
    item.addEventListener('click', () => {
        currenIndex = idx;
        itemZoom.src = img[idx].src;
        showGallery();
    })
})

close.addEventListener('click', hideGallery);
gallery.addEventListener('click', hideGallery);


imgZoom.addEventListener('click', (e) => {
    e.stopPropagation();
});


prev.addEventListener('click', () => {
    if (currenIndex == 0 ) currenIndex = img.length - 1;
    else currenIndex--;
    itemZoom.src = img[currenIndex].src;
})

next.addEventListener('click', () => {
    if (currenIndex == img.length - 1 ) currenIndex = 0;
    else currenIndex++;
    itemZoom.src = img[currenIndex].src;
})

// Esc hide gallery
document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27) hideGallery();
  });














$(document).ready(function(){
    $(".button").click(function(){
$(".popup").slideDown("slow");
});
  });


const container = document.querySelector('.container');
const popupContainer = document.querySelector('.popupContainer');
const chooseFrom = document.querySelector('.button');
const defaultSection = document.querySelector('.defaultSection');
const clickGallery = document.querySelector('.firstIcon');
const clickPhotos = document.querySelector('.secondIcon');
const popupSection = document.querySelector('.popup');
const clickCrop = document.querySelector('.cropIcon');

const secondPopupSection = document.querySelector('.secondPopup');
const useThis = document.querySelector('.useThisImage');
const container1 = document.querySelector('.container1');
const final = document.querySelector('.finalImage');
const emo1 = document.querySelector('.emozi1');
const emo2 = document.querySelector('.emozi2');
const emo3 = document.querySelector('.emozi3');
const emo4 = document.querySelector('.emozi4');
const emo5 = document.querySelector('.emozi5');

const cropSection = document.querySelector('.crop');//unhide it
const upperSection = document.querySelector('.upper-section');//hide it
const imagePortion = document.querySelector('.imagePortion');//hide it


const finalCutOut = document.querySelector('.finalCutOut');


const html = `<div  style="height:75vh" class="adjacent"></div>`;

const image = document.querySelector('#footImage');
const cropper = new Cropper(image, {
    aspectRatio:16/9,
    viewMode:0,
})
let croppedImage;

const handleClickGallery = function(){
    defaultSection.classList.add('hidden');
    
    cropSection.classList.remove('hidden');
    popupSection.classList.add('hidden');
    popupContainer.classList.add('hidden');
    container1.classList.add('hidden');
    

};
clickGallery.addEventListener('click', handleClickGallery);

const handleClickCrop = function(){
     croppedImage = cropper.getCroppedCanvas().toDataURL("image/jpg");
    document.querySelector('.output').src = croppedImage;
    
    secondPopupSection.classList.remove('hidden');
    defaultSection.classList.remove('hidden');
    defaultSection.classList.add('blur');
    image.classList.add('hidden');
    container.classList.add('specialClass');
    container.classList.remove('container');
    container1.insertAdjacentHTML('beforeend',html);
    container1.classList.remove('hidden');

    // cropSection.classList.add('hidden');
    upperSection.classList.add('hidden');
    imagePortion.classList.add('hidden');    

};

clickCrop.addEventListener('click', handleClickCrop);


emo1.addEventListener('click',function(){
    final.classList.remove('heartShape');
    final.classList.remove('squareShape');
    final.classList.remove('circleShape');
    final.classList.remove('rectangleShape');
});
emo2.addEventListener('click',function(){
    final.classList.add('heartShape');
    final.classList.remove('squareShape');
    final.classList.remove('circleShape');
    final.classList.remove('rectangleShape');
});
emo3.addEventListener('click',function(){
    final.classList.add('squareShape');
    final.classList.remove('heartShape');
    final.classList.remove('circleShape');
    final.classList.remove('rectangleShape');
});
emo4.addEventListener('click',function(){
    final.classList.add('circleShape');
    final.classList.remove('heartShape');
    final.classList.remove('squareShape');
    final.classList.remove('rectangleShape');
});
emo5.addEventListener('click',function(){
    final.classList.add('rectangleShape');
    final.classList.remove('heartShape');
    final.classList.remove('squareShape');
    final.classList.remove('circleShape');
});
useThis.addEventListener('click', function(){
    secondPopupSection.classList.add('hidden');
    final.classList.remove('hidden');
    

if(final.classList.contains('heartShape'))
{
const html2 = `<img src="${croppedImage}"  class=" output finalImage heartShape finalZoomIn">`;
finalCutOut.insertAdjacentHTML('beforeend',html2);
}
else if(final.classList.contains('squareShape'))
{
    const html2 = `<img src="${croppedImage}"  class="output finalImage squareShape finalZoomIn">`;
    finalCutOut.insertAdjacentHTML('beforeend',html2);
}
else if(final.classList.contains('circleShape'))
{
    const html2 = `<img src="${croppedImage}"  class="output finalImage circleShape finalZoomIn">`;
    finalCutOut.insertAdjacentHTML('beforeend',html2);
}
else if(final.classList.contains('rectangleShape'))
{
    const html2 = `<img src="${croppedImage}"  class="output finalImage rectangleShape finalZoomIn">`;
    finalCutOut.insertAdjacentHTML('beforeend',html2);
}
else {
    const html2 = `<img src="${croppedImage}" class="output finalImage finalZoomIn">`;
    finalCutOut.insertAdjacentHTML('beforeend',html2);
}

});
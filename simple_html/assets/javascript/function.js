const images = [
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Sevan_Armenia_%D0%A1%D0%B5%D0%B2%D0%B0%D0%BD_%D0%90%D1%80%D0%BC%D0%B5%D0%BD%D0%B8%D1%8F.jpeg',
        name: 'Lake - Wikipedia',
        best: false
    },
    {
        url: 'https://madera.objects.liquidweb.services/photos/15250-landscape-bass-lake-ca-sm-byc-2-Header-1400x612.jpg',
        name: 'Lake - yosemitethisyear.com',
        best: false
    },
    {
        url: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Loboc_river.png',
        name: 'River - Wikipedia',
        best: false
    },
    {
        url: 'https://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg',
        name: 'Beach - CNN',
        best: false
    },
    {
        url: 'https://r-cf.bstatic.com/images/hotel/max1024x768/222/222636340.jpg',
        name: 'Booking.com',
        best: false
    },
    {
        url: 'https://media.nationalgeographic.org/assets/photos/000/281/28106.jpg',
        name: 'River - National Geographic',
        best: false
    },
    {
        url: 'assets/img/7.jpg',
        name: 'Gedong',
        best: false
    },
    {
        url: 'assets/img/6.jpg',
        name: 'Hotel',
        best: false
    },
    {
        url: 'assets/img/5.jpg',
        name: 'Salad Buah 200ml',
        best: false
    },
    {
        url: 'assets/img/4.jpg',
        name: 'Cilok Cikruh',
        best: false
    },
    {
        url: 'assets/img/padoru.gif',
        name: 'X-mas is comming',
        best: true
    },
    {
        url: 'assets/img/2.jpg',
        name: 'Koala Windows 7',
        best: false
    },
    {
        url: 'assets/img/1.jpg',
        name: 'Gedong Lagi :)',
        best: false
    }
];

    
let article = '';
let bestImage = '';
for(let image of images){
    article += '<article class="preview" onclick="showImage(\''+image.url+'\')" style="background: url('+image.url+');background-size: cover;background-position: center;"><p>'+image.name+'</p></article>\n';
    if(image.best == true) bestImage += '<img src="'+image.url+'" class="best-image">\n';
}
document.getElementById('gallery').innerHTML = article;
document.getElementById('best-image-container').innerHTML = bestImage;

let previewContainer = document.getElementById('preview-container');
document.querySelector('.slideshow').style.background = 'url("'+images[0].url+'") center center / cover';
let i = 1;
setInterval(function(){
    document.querySelector('.slideshow').style.background = 'url("'+images[i].url+'") center center / cover';

    if(i == images.length-1){
        i = 0;
    }else{
        i++;
    }
}, 2500)
function showImage(url){
    console.log(url)
    previewContainer.style.display = 'flex';
    let previewImage = document.getElementById('preview-image')
    let previewCaption = document.getElementById('preview-caption')

    previewImage.setAttribute("src", url);
}

previewContainer.addEventListener('click', function(event) {
    previewContainer.style.display = 'none';
});
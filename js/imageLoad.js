let cat = [];
let mag = [];
let prom = [];


for (let i = 1; i <= 31; i++) {
    cat.push("img"+i+".jpg");
}


for (let i = 1; i <= 27; i++) {
    mag.push("img"+i+".jpg");
}

for (let i = 1; i <= 16; i++) {
    prom.push("img"+i+".jpg");
}

cat.forEach(function (n,index) {
    let image = new Image();

    image.addEventListener("click", function (e) {
        console.log(e.type)

    })
    image.setAttribute("alt" , "image catalogue "+ index)
    image.src = 'img/catalogue/'+n;
    image.classList.add("img-gallery");
    document.getElementById('cat-img-container').appendChild(image);
    console.log(n+ ' ; ');

})

mag.forEach(function (n , index) {
    let image = new Image();
    image.alt = "magazine image "+ index;
    image.src = 'img/magazine/'+n;
    image.classList.add("img-gallery");
    document.getElementById('mag-img-container').appendChild(image);
    console.log(n+ ' ; ');
})

prom.forEach(function (n,index) {
    let image = new Image();
    image.alt = "promotion image " + index;
    image.src = 'img/promotion/'+n;
    image.classList.add("img-gallery");
    document.getElementById('prom-img-container').appendChild(image);
    console.log(n+ ' ; ');
})
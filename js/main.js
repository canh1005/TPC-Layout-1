var lstNewProductImg = [
    { name: 'Direct Type / Pilot Type / Flange Type', imgUrl: '../assets/img/New-product/NDC 2.png' },
    { name: 'Miniature type', imgUrl: '../assets/img/New-product/hinh2.png' },
    { name: 'Miniature type', imgUrl: '../assets/img/New-product/hinh3.png' },
    { name: 'Digital Flow Switch', imgUrl: '../assets/img/New-product/digital.png' },
    { name: 'Miniature type', imgUrl: '../assets/img/New-product/NDC 2.png' },
    { name: 'Coolant control valve', imgUrl: '../assets/img/New-product/RS2000(SI UNIT TYPE).png' },
    { name: 'Miniature type', imgUrl: '../assets/img/New-product/hinh3.png' },
    { name: 'Coolant control valve', imgUrl: '../assets/img/New-product/RS2000(SI UNIT TYPE).png' },
    { name: 'Miniature type', imgUrl: '../assets/img/New-product/hinh2.png' },
    { name: 'Digital Flow Switch', imgUrl: '../assets/img/New-product/digital.png' },
    { name: 'Miniature type', imgUrl: '../assets/img/New-product/hinh2.png' },
    { name: 'Miniature type', imgUrl: '../assets/img/New-product/hinh2.png' },
]
var lstBrandImg = [
    '../assets/img/Brand/architect.png',
    '../assets/img/Brand/canada.png',
    '../assets/img/Brand/hipster.png',
    '../assets/img/Brand/hosoren.png',
    '../assets/img/Brand/camera.png',
    '../assets/img/Brand/appsflyer.png',
    '../assets/img/Brand/agencia.png',
    '../assets/img/Brand/hunt.png',
    '../assets/img/Brand/nexeon.png',
    '../assets/img/Brand/buthers.png',
]
function lstNewProduct() {
    lstNewProductImg.forEach((element) => {
        const lstData = element.imgUrl;
        const li = document.createElement('li');
        const name = document.createElement('div');
        name.innerHTML = element.name;
        const img = document.createElement('img');
        img.src = lstData;
        const a = document.createElement('a');
        a.appendChild(img);
        a.appendChild(name);
        li.appendChild(a);
        document.getElementById('new__product-list').appendChild(li);
    });
}
function lstBrand() {
    lstBrandImg.forEach(element => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const a = document.createElement('a');
        img.src = element;
        a.appendChild(img);
        li.appendChild(a);
        document.getElementById('brand__list').appendChild(li);
    })
}
lstNewProduct();
lstBrand();
var li = document.getElementsByClassName('header__items');
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
var li1 = document.getElementsByClassName('headline__list-items');
for (var i = 0; i < li1.length; i++) {
    li1[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
document.getElementById('btn-collapse').addEventListener('click', function () {
    let addCollapse = document.getElementById('header__list');
    
    if(addCollapse.className === 'header__list collapsed'){
        addCollapse.classList.remove('collapsed');
    }else{
        addCollapse.classList.add('collapsed');
    }
})
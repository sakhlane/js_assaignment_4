var productData = {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": 2599
  }

/**********************************/
/* code for assaignment solution **/
/****************************** */

console.log("js file work properly");

// creaet a container 
let container = document.createElement("div");
container.setAttribute("id","container");

document.body.append(container);

//################ left section ##############// 
var leftSection = document.createElement("div");
leftSection.setAttribute('class','left-section');
leftSection.setAttribute('id','left-section');
container.append(leftSection);

var leftImage = document.createElement("img");
leftImage.setAttribute('class','left-img');
leftSection.append(leftImage);

leftImage.src = productData.preview;

//############ right section #############//

let rightSetction = document.createElement("div");
rightSetction.setAttribute('id','right-section');
container.append(rightSetction);

//for name
let productName = document.createElement("div");
productName.setAttribute('class','product-name');
rightSetction.append(productName);
let productNameHeading = document.createElement('h1');
productName.append(productNameHeading);
productNameHeading.setAttribute('class','product-name-heading');
productNameHeading.innerHTML = "Men Navy Blue Solid Sweatshirt"

//for brand
let brand = document.createElement('div');
brand.setAttribute('class','brand');
rightSetction.append(brand);
let brnandTitle = document.createElement('h3');
brnandTitle.setAttribute('class','brand-title');
brand.append(brnandTitle);
brnandTitle.innerHTML = productData.brand;

//for price
let price = document.createElement('div');
price.setAttribute('class','product-pice')
rightSetction.append(price);
let priceAmount = document.createElement('h3');
priceAmount.setAttribute('class','price-amt');
priceAmount.innerHTML = "Price: Rs" +" "+ `<span>${productData.price}</span>`;
price.append(priceAmount);

// for description
let des = document.createElement('div');
des.setAttribute('class','description');
rightSetction.append(des);
let desTitile = document.createElement('h3');
desTitile.setAttribute('class','des-title');
des.append(desTitile);
desTitile.innerHTML = "Description";

//for description detail
let desDetail = document.createElement('div');
desDetail.setAttribute('class','des-detail');
rightSetction.append(desDetail);
let desDetailTitle = document.createElement('p');
desDetailTitle.setAttribute('class','des-detail-title');
desDetail.append(desDetailTitle);
desDetailTitle.innerHTML = productData.description;

// for product preview
let productPreview = document.createElement('div');
productPreview.setAttribute('class','product-preview');
rightSetction.append(productPreview);
let productPreviewTitile = document.createElement('h3');
productPreviewTitile.setAttribute('class','des-title');
productPreview.append(productPreviewTitile);
productPreviewTitile.innerHTML = "Product Preview";

// for product card container
let productCardContainer = document.createElement('div');
productCardContainer.setAttribute('id','pro-card-container');
rightSetction.append(productCardContainer);

// for button
let btnDiv = document.createElement('div');
btnDiv.setAttribute('class','btn-div')
rightSetction.append(btnDiv);
let btn = document.createElement("button");
btn.setAttribute('class','click-btn');
btnDiv.append(btn);
btn.id = "btn-click"
btn.innerText = "Add to Cart";


// for product cards
for(let i=0; i < productData.photos.length; i++ ){
   if(productData.isAccessory === false){
let productCard =document.createElement('div');
productCard.setAttribute('class','pro-card');
//  productCard[0].classList.add('active');
 
// for active class 
// ++++++++++++++++++++++++++++++++++++++++
productCard.addEventListener('click',function(){
  var current = document.getElementsByClassName("active");
  console.log(current[0]);

  if (current.length > 0)
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
});
// ++++++++++++++++++++++++++++++++++++++++++++++++++

productCard.id = `img-${i}`;
productCardContainer.append(productCard);
let proCardImage = document.createElement('img');
proCardImage.setAttribute('class','pro-card-img');
// proCardImage.setAttribute('id','pro-card-img');
productCard.append(proCardImage);
proCardImage.src = productData.photos[i];

}
}

let activeid = document.getElementById('img-0');
 activeid.classList.add('active')

// for changing image on click
let right0 = document.getElementById('img-0');
right0.addEventListener('click',function(){
  leftImage.src = productData.photos[0];  
})

let right1 = document.getElementById('img-1');
right1.addEventListener('click',function(){
  leftImage.src = productData.photos[1]
})

let right2 = document.getElementById('img-2');
right2.addEventListener('click',function(){
  leftImage.src = productData.photos[2]
})

let right3 = document.getElementById('img-3');
right3.addEventListener('click',function(){
  leftImage.src = productData.photos[3]
})

let right = document.getElementById('img-4');
right.addEventListener('click',function(){
  leftImage.src = productData.photos[4]
})


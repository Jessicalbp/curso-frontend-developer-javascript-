const menuEmail = document.querySelector('.navbar-email');
const menuHambur = document.querySelector('.menu');
const menuCarritoIncon = document.querySelector('.navbar-shopping-cart');
const productDetailclose = document.querySelector('.product-detail-close');
const desktopMenu  = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambur.addEventListener('click', toggleMobileMenu);
menuCarritoIncon.addEventListener('click', toggleCarritoAside);
productDetailclose.addEventListener('click', closeProductDetailAside);

function toggleDesktopMenu() {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
     }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isAsideClosed = shoppingCartContainer.classList.contains('inactive');

    if (!isAsideClosed) {
        shoppingCartContainer.classList.add('inactive');
     }

     closeProductDetailAside();

     mobileMenu.classList.toggle('inactive');
  }

  function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

     if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
     }

     const isProductDetailClosed = productDetailContainer.classList.contains('inactive');
  
     if (!isProductDetailClosed) {
       productDetailContainer.classList.add('inactive'); 
     }

     shoppingCartContainer.classList.toggle('inactive');
  }

  function openProductDetailAside () {
    shoppingCartContainer.classList.add('inactive');
    productDetailContainer.classList.remove('inactive')
  }

  function closeProductDetailAside () {
    productDetailContainer.classList.add('inactive');
  }

  const productList = [];
  productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/08/bicicleta-electrica-toyota.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"',
  });
  productList.push({
    name: 'Computer',
    price: 170,
    Image: 'https://www.unbosque.edu.co/sites/default/files/2020-07/computadores_0.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="computer"',
  });
  productList.push({
    name: 'Reloj',
    price: 750,
    Image: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/02/reloj-cocina-2620297.jpg?tf=3840x?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="reloj"',
  });
  productList.push({
    name: 'Coat',
    price: 300,
    Image: 'https://i.pinimg.com/736x/6c/3a/e3/6c3ae3b75c930fa46d9f0a4b8b710fdf.jpg?tf=3840x?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="coat"',
  });
  productList.push({
    name: 'Furnitures',
    price: 1900,
    Image: 'https://cdn.shopify.com/s/files/1/2393/8765/articles/556930138173_800x.jpg?v=1666722530?tf=3840x?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Furnitures"',
  });
  productList.push({
    name: 'Toys',
    price: 110,
    Image: 'https://s3.abcstatics.com/media/familia/2021/12/12/JUGUETES-GENERO-kyoD--1248x698@abc.jpg?tf=3840x?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="toys"',
  });

  function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Image);
    productImg.addEventListener('click', openProductDetailAside);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

    productInfoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);

}
}
renderProducts(productList);
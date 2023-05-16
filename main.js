const menuEmail = document.querySelector('.navbar-email');
const desktopMenu  = document.querySelector('.desktop-menu');
const menuCarritoIncon = document.querySelector('.navbar-shopping-cart')
const menuHambur = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const aside = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHambur.addEventListener('click', toggleMobileMenu);
menuCarritoIncon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
     }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');
     }

     mobileMenu.classList.toggle('inactive');
  }
  
  function toggleCarritoAside () {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

     if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
     }
     aside.classList.toggle('inactive');
  }

  const productList = [];
  productList.push({
    name: 'Bike',
    price: 120,
    Image: 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/08/bicicleta-electrica-toyota.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"',
  });
  productList.push({
    name: 'Computer',
    price: 1700,
    Image: 'https://www.unbosque.edu.co/sites/default/files/2020-07/computadores_0.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"',
  });
  productList.push({
    name: 'Reloj',
    price: 750,
    Image: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2022/02/reloj-cocina-2620297.jpg?tf=3840x?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bike"',
  });

  function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.Image);

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
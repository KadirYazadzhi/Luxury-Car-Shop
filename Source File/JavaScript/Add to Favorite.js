class FavouriteProducts {
    constructor() {
        this.products = JSON.parse(localStorage.getItem('favouriteProducts')) || [];
        this.favouriteSection = document.querySelector('.favourite-section');
        this.renderFavouriteProducts();
        this.formElement = document.getElementById('favourite-section');
    }

    addToFavourites(product) {
        if (this.products.some(p => p.name === product.name && p.model === product.model)) {
            alert('This product is already in favourites.');
            return;
        }
        this.products.push(product);
        this.updateStorage();
        this.renderFavouriteProducts();
        this.openForm();
    }

    removeFromFavourites(index) {
        this.products.splice(index, 1);
        this.updateStorage();
        this.renderFavouriteProducts();
    }

    openForm() {
        this.formElement.style.display = 'flex';
    }

    renderFavouriteProducts() {
        this.favouriteSection.innerHTML = '';
        this.products.forEach((product, index) => {
            const favouriteProduct = document.createElement('div');
            favouriteProduct.classList.add('cart-for-favourite-product');

            let productPrice = `$` + product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');

            const productTemplate = `
                <div class="product-info">
                    <img class="favourite-image" src="${product.image}" alt="${product.name}">
                    <i class="favourite-icon fa fa-heart"></i>
                    <p class="favourite-title-for-product-name">${product.name}</p>
                    <p class="favourite-title-for-product-model">${product.model}</p>
                    <div class="number">
                   <span class="special-product-number">${productPrice}</span>
                    </div>
                    <i class="remove fas fa-times"></i>
                </div>
                <div class="bottom-information">
                    <div class="bottom-button-right">
                        <i class="information fa fa-info-circle"></i>
                    </div>
                </div>
            `;
            favouriteProduct.innerHTML = productTemplate;

            const removeButton = favouriteProduct.querySelector('.remove');
            removeButton.addEventListener('click', () => {
                this.removeFromFavourites(index);
            });

            this.favouriteSection.appendChild(favouriteProduct);
        });
    }

    updateStorage() {
        localStorage.setItem('favouriteProducts', JSON.stringify(this.products));
    }
}

const favouriteProducts = new FavouriteProducts();

const addToFavouriteButtons = document.querySelectorAll('.favourite');

addToFavouriteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.swiper-slide');
        const productName = productElement.querySelector('.car-name').textContent;
        const productModel = productElement.querySelector('.car-model').textContent;
        const productImage = productElement.querySelector('img').src;
        const productPriceText = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productPriceText.replace(/[^0-9.-]+/g, ''));
        const product = { name: productName, model: productModel, image: productImage, price: productPrice };
        favouriteProducts.addToFavourites(product);
    });
});


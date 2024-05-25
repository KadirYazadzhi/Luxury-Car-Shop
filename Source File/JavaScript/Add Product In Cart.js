//Class for products details
class Product {
    constructor(name, model, image, price) {
        this.name = name;
        this.model = model;
        this.image = image;
        this.price = price;
    }
}

/*Shopping cart class, which has the function of adding products to the
cart by taking their details directly from the items in html
and do not allow one product add two times in the cart*/
class ShoppingCart {
    constructor() {
        this.products = JSON.parse(localStorage.getItem('cartProducts')) || [];
        this.subtotal = 0;
        this.cartContent = document.getElementById('cart-content');
        this.subtotalElement = document.getElementById('subtotal');
        this.formElement = document.getElementById('shopping-cart-section');
        this.renderCart();
        this.updateSubtotal();
    }
    openForm() {
        this.formElement.style.display = 'block';
    }

    addToCart(product) {
        if (this.products.some(p => p.name === product.name)) {
            alert('This product is already in the cart.');
            return;
        }
        this.products.push(product);
        this.updateStorage();
        this.renderCart();
        this.updateSubtotal();
        this.openForm();
    }

    removeFromCart(index) {
        this.products.splice(index, 1);
        this.updateStorage();
        this.renderCart();
        this.updateSubtotal();
    }

    updateSubtotal() {
        this.subtotal = this.products.reduce((total, product) => total + product.price, 0);
        this.subtotalElement.textContent = `$${this.subtotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
    }

    renderCart() {
        this.cartContent.innerHTML = '';
        this.products.forEach((product, index) => {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('flex', 'justify-between', 'items-center', 'mt-6', 'pt-6', 'border-t');

            const productInfo = document.createElement('div');
            productInfo.classList.add('flex', 'items-center');

            const image = document.createElement('img');
            image.src = product.image;
            image.width = 60;
            image.classList.add('rounded-full');
            productInfo.appendChild(image);

            const productDetails = document.createElement('div');
            productDetails.classList.add('flex', 'flex-col', 'ml-3');

            const productName = document.createElement('span');
            productName.classList.add('md:text-md', 'font-medium');
            productName.textContent = product.name + ` ` + product.model;
            productDetails.appendChild(productName);

            const productCode = document.createElement('span');
            productCode.classList.add('text-xs', 'font-light', 'text-gray-400');
            productCode.textContent = `#${Math.floor(Math.random() * 100000)}`;
            productDetails.appendChild(productCode);

            productInfo.appendChild(productDetails);
            cartProduct.appendChild(productInfo);

            const productActions = document.createElement('div');
            productActions.classList.add('flex', 'justify-center', 'items-center');

            const quantityControls = document.createElement('div');
            quantityControls.classList.add('pr-8', 'flex');

            const decrementButton = document.createElement('span');
            decrementButton.classList.add('font-semibold');
            decrementButton.textContent = '-';
            quantityControls.appendChild(decrementButton);

            const quantityInput = document.createElement('input');
            quantityInput.type = 'text';
            quantityInput.classList.add('focus:outline-none', 'bg-gray-100', 'border', 'h-6', 'w-8', 'rounded', 'text-sm', 'px-2', 'mx-2');
            quantityInput.value = '1';
            quantityControls.appendChild(quantityInput);

            const incrementButton = document.createElement('span');
            incrementButton.classList.add('font-semibold');
            incrementButton.textContent = '+';
            quantityControls.appendChild(incrementButton);

            productActions.appendChild(quantityControls);

            const productPrice = document.createElement('div');
            productPrice.classList.add('pr-8');
            const priceText = document.createElement('span');
            priceText.classList.add('text-xs', 'font-medium');
            priceText.textContent = `$${product.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
            productPrice.appendChild(priceText);
            productActions.appendChild(productPrice);

            const removeButton = document.createElement('i');
            removeButton.classList.add('fa', 'fa-close', 'text-xs', 'font-medium');
            removeButton.addEventListener('click', () => {
                this.removeFromCart(index);
            });
            productActions.appendChild(removeButton);

            cartProduct.appendChild(productActions);

            this.cartContent.appendChild(cartProduct);
        });
    }

    updateStorage() {
        localStorage.setItem('cartProducts', JSON.stringify(this.products));
        localStorage.setItem('SavedProducts', JSON.stringify(this.products));
    }
}

const shoppingCart = new ShoppingCart();

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.swiper-slide');
        const productName = productElement.querySelector('.car-name').textContent;
        const productModel = productElement.querySelector('.car-model').textContent;
        const productImage = productElement.querySelector('img').src;
        const productPriceText = productElement.querySelector('h3').textContent;
        const productPrice = parseFloat(productPriceText.replace(/[^0-9.-]+/g, ''));
        const product = new Product(productName, productModel, productImage, productPrice);
        shoppingCart.addToCart(product);
    });
});
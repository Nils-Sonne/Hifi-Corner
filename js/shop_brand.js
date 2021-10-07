document.addEventListener("DOMContentLoaded", function (){

    let current_URL = window.location.search;
    let search_params = new URLSearchParams(current_URL);
    let params_brand = search_params.get("brand");

    fetch("data/product_data.json")
    .then(response => response.json())
    .then(data => {

        let shop_box = document.querySelector(".shop__kategorier_nest");
        let breadcrumbs_text = document.querySelector(".breadcrumbs");
        let currentPageTitle = document.querySelector(".currentpage-titel")
        let current_data;

        current_data = data.products.filter(product => product.brand == params_brand);

        if (params_brand) {
            breadcrumbs_text.innerHTML = `<span class="breadcrumbs__home"><a href="shop.html" class="breadcrumbs__home_active">Home</a></span> / ${params_brand}</a></span>`;
            currentPageTitle.innerHTML = `${params_brand}`;
        }

        current_data.forEach(product => {

            let shop_varer = document.createElement("div");
            shop_varer.className = "shopkategorier__varer";
            shop_varer.setAttribute(`data-id`, product.id);

            shop_varer.innerHTML = `
            <div class="shop__kategorier_box">
                <img class="shop__kategorier_varebillede" src="images/product_img/${product.image_folder}/${product.image}" alt="varebillede">
            </div>
                <p class="product__text">${product.name}</p>
                <div class="price-boxes">
                <p class="product__pricesale">${product.price}</p>
                <p class="product__price">${product.sale}</p>
            </div>
                <a class="putinbasket button_brown-button" href="product.html?id=${product.id}">ADD TO CART</a>
            `;

            shop_box.appendChild(shop_varer);
        });
    });
});
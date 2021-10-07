document.addEventListener("DOMContentLoaded", function (){

    let current_URL = window.location.search;
    let search_params = new URLSearchParams(current_URL);
    let params_search = search_params.get("searchbar");

    fetch("data/product_data.json")
    .then(response => response.json())
    .then(data => {

        let shop_box = document.querySelector(".shop__kategorier_nest");
        let breadcrumbs_text = document.querySelector(".breadcrumbs");
        let currentPageTitle = document.querySelector(".currentpage-titel");
        let current_data = filterSearch(data.products, params_search);

        function filterSearch(arr, search) {
            return arr.filter(function(el) {
                return (el.name.indexOf(search) !== -1 || el.category.indexOf(search) !== -1 || el.brand.indexOf(search) !== -1)
            });
        }
        
        console.log(current_data);

        if (params_search) {
            breadcrumbs_text.innerHTML = `<span class="breadcrumbs__home"><a href="kategoriliste.html" class="breadcrumbs__home_active">Home</a></span> / ${params_search}</a></span>`;
            currentPageTitle.innerHTML = `${params_search}`;
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
                <a class="putinbasket button_brown-button" href="product.html?id=${product.id}">ADD TO CART</a>
            `;

            shop_box.appendChild(shop_varer);
        });
    });
});
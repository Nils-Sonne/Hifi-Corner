document.addEventListener("DOMContentLoaded", function () {
    fetch("data/image_slider.json")
        .then(response => response.json())
        .then(data => {

            var sliderSection = document.querySelector('.img-slider__container_img');
            data.products.forEach(products => {

                var section = document.createElement('section');
                section.className = "mySlides";
                section.setAttribute('data-id', products.id);
                section.innerHTML = ` 
                <div class="img-slider__container">
                        <div class="img-slider__text">
                        ${products.name}
                    </div>
                        <div class="fade">
                        <a href="shop_kategorier.html?id=${products.name}">
                        <img src="images/product_img/${products.image_folder}/${products.image}" class="pics" alt="${products.name}" /></a>
                        </div>
                </div>
            `;
                sliderSection.appendChild(section);
            });
        })
        .then(() => {

            var slideIndex = 0;
            showSlides();

            var prev = document.querySelector("#prev");
            var next = document.querySelector("#next");

            prev.addEventListener("click", nextSlide);
            function nextSlide() {
                plusSlides(-1);
            }

            next.addEventListener("click", nextSlide);
            function nextSlide() {
                plusSlides(1);
            }

            var slides, timer;

            function showSlides() {
                var i;
                slides = document.getElementsByClassName("mySlides");
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) { slideIndex = 1 }
                slides[slideIndex - 1].style.display = "block";

                timer = setTimeout(showSlides, 8000); // antal milisekunder pr. billede
            }

            function plusSlides(position) {
                //stopper timeren ved klik
                clearTimeout(timer);
                slideIndex += position;
                if (slideIndex > slides.length) { slideIndex = 1 }
                else if (slideIndex < 1) { slideIndex = slides.length }
                for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }

                slides[slideIndex - 1].style.display = "block";

                // laver en ny timer
                timer = setTimeout(showSlides, 4000);
            }
 

        })

});
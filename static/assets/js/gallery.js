document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-image");
    const captionText = document.getElementById("caption");
    const galleryItems = document.querySelectorAll(".gallery-item");
    let currentImages = [];
    let currentIndex = 0;

    const imagesByDay = {
        day1: [
            { src: "/static/assets/images/club4.jpg", alt: 'Night Out 1 - Image 1' },
            { src: "/static/assets/images/club5.jpg", alt: 'Night Out 1 - Image 2' },
            { src: "/static/assets/images/club6.jpg", alt: 'Night Out 1 - Image 2' }
        ],
        day2: [
            { src: 'day2_img1.jpg', alt: 'Night Out 2 - Image 1' },
            { src: 'day2_img2.jpg', alt: 'Night Out 2 - Image 2' }
        ],
        day3: [
            { src: 'day3_img1.jpg', alt: 'Night Out 3 - Image 1' },
            { src: 'day3_img2.jpg', alt: 'Night Out 3 - Image 2' }
        ],
        day4: [
            { src: 'day4_img1.jpg', alt: 'Night Out 4 - Image 1' },
            { src: 'day4_img2.jpg', alt: 'Night Out 4 - Image 2' }
        ],
        // Add more days as needed
    };

    galleryItems.forEach(item => {
        item.addEventListener("click", function() {
            const day = this.getAttribute('data-day');
            if (imagesByDay[day]) {
                currentImages = imagesByDay[day];
                currentIndex = 0;
                showModal(currentIndex);
            }
        });
    });

    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", function() {
        modal.style.display = "none";
    });

    const nextBtn = document.querySelector(".next");
    nextBtn.addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % currentImages.length;
        showModal(currentIndex);
    });

    const prevBtn = document.querySelector(".prev");
    prevBtn.addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showModal(currentIndex);
    });

    modal.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    function showModal(index) {
        modal.style.display = "block";
        modalImg.src = currentImages[index].src;
        captionText.innerHTML = currentImages[index].alt;
    }
});
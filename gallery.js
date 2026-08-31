document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(window.location.search);
    const year = params.get("year") || "2023";

    const galleryYear = document.getElementById("gallery-year");
    const galleryGrid = document.getElementById("gallery-grid");

    galleryYear.textContent = `${year} GALLERY`;

    const galleries = {

        "2023": [
            "ChatGPT Image Aug 30, 2026, 03_16_09 PM.png",
            "ChatGPT Image Aug 30, 2026, 03_17_07 PM.png",
            "ChatGPT Image Aug 30, 2026, 03_18_25 PM.png",
            "ChatGPT Image Aug 30, 2026, 03_22_00 PM.png",
            "ChatGPT Image Aug 30, 2026, 03_36_08 PM.png",
            "IMG-20230909-WA0015_1.jpg",
            "IMG-20230909-WA0043.jpg",
            "IMG-20230909-WA0045.jpg",
            "IMG-20230918-WA0004.jpg",
            "IMG-20230918-WA0022.jpg",
            "IMG-20230918-WA0043.jpg",
            "IMG-20230918-WA0045_1.jpg",
            "IMG-20230921-WA0004.jpg",
            "IMG-20230922-WA0041_1.jpg",
            "IMG-20230922-WA0049.jpg",
            "IMG-20230922-WA0051.jpg",
            "IMG-20230922-WA0055_1.jpg",
            "IMG-20230922-WA0063.jpg",
            "IMG-20240801-WA0019.jpg",
            "Screenshot 2026-08-30 150018.png",
            "Screenshot 2026-08-30 150356.png",
            "Screenshot 2026-08-30 150434.png",
            "Screenshot 2026-08-30 150455.png",
            "Screenshot 2026-08-30 150552.png",
            "Snapchat-58297816_1.jpg"
        ],

        "2024": [
            "IMG-20240811-WA0022_1.jpg",
            "IMG-20240827-WA0001.jpg",
            "IMG-20240828-WA0001.jpg",
            "IMG-20240907-WA0027.jpg",
            "IMG-20240907-WA0033.jpg",
            "IMG-20240907-WA0039.jpg",
            "IMG-20250812-WA0023 (1).jpg",
            "IMG-20250812-WA0023.jpg",
            "IMG-20250825-WA0040 (1).jpg",
            "IMG_20250827_115633 (1).jpg",
            "IMG_20250827_115635 (1).jpg",
            "IMG_8851 (1).JPG",
            "IMG_8852 (1).JPG",
            "Screenshot 2026-08-30 150651.png"
        ],

        "2025": [
            "ChatGPT Image Aug 30, 2026, 03_20_10 PM.png",
            "IMG-20250827-WA0035 (1).jpg",
            "IMG-20250827-WA0036 (1).jpg",
            "IMG-20250829-WA0072.jpg",
            "IMG-20250829-WA0073.jpg",
            "IMG-20250829-WA0074.jpg",
            "IMG-20250829-WA0075.jpg",
            "IMG-20250829-WA0076.jpg",
            "IMG-20250829-WA0077.jpg",
            "IMG-20250829-WA0078.jpg",
            "IMG-20250829-WA0079.jpg",
            "IMG-20250829-WA0080.jpg",
            "IMG-20250829-WA0081.jpg",
            "IMG-20250829-WA0093.jpg",
            "IMG-20250829-WA0095.jpg",
            "IMG-20250829-WA0096.jpg",
            "IMG-20250829-WA0097.jpg",
            "IMG-20250830-WA0009.jpeg",
            "IMG-20250831-WA0061.jpg",
            "IMG-20250831-WA0062.jpg",
            "IMG-20250831-WA0063.jpg",
            "IMG-20250831-WA0069.jpg",
            "IMG_3334.jpg",
            "IMG_3336.jpg",
            "IMG_3337 (1).jpg",
            "IMG_3350 (1).jpg",
            "IMG_3354.jpg",
            "Snapchat-1663767383.jpg"
        ]

    };

    const photos = galleries[year] || [];

    galleryGrid.innerHTML = "";

    let currentIndex = 0;

    /* CREATE PHOTO GRID */

    photos.forEach((filename, index) => {

        const img = document.createElement("img");

      img.src = `${year}/${filename}`;
        img.alt = `Team CFC ${year}`;
        img.loading = "lazy";

        img.addEventListener("click", () => {
            openViewer(index);
        });

        galleryGrid.appendChild(img);

    });


    /* CREATE FULLSCREEN VIEWER */

    const viewer = document.createElement("div");
    viewer.className = "photo-viewer";

    viewer.innerHTML = `
        <button class="viewer-close" aria-label="Close">×</button>

        <button class="viewer-prev" aria-label="Previous photo">
            &#10094;
        </button>

        <div class="viewer-content">
            <img class="viewer-image" src="" alt="">
            <div class="viewer-counter"></div>
        </div>

        <button class="viewer-next" aria-label="Next photo">
            &#10095;
        </button>
    `;

    document.body.appendChild(viewer);

    const viewerImage =
        viewer.querySelector(".viewer-image");

    const viewerCounter =
        viewer.querySelector(".viewer-counter");

    const closeButton =
        viewer.querySelector(".viewer-close");

    const previousButton =
        viewer.querySelector(".viewer-prev");

    const nextButton =
        viewer.querySelector(".viewer-next");


    /* OPEN PHOTO */

    function openViewer(index) {

        currentIndex = index;

        viewerImage.src =
           viewerImg.src = `${year}/${filename}`;

        viewerImage.alt =
            `Team CFC ${year}`;

        viewerCounter.textContent =
            `${currentIndex + 1} / ${photos.length}`;

        viewer.classList.add("show");

        document.body.classList.add("viewer-open");
    }


    /* CLOSE */

    function closeViewer() {

        viewer.classList.remove("show");

        document.body.classList.remove("viewer-open");

        viewerImage.src = "";
    }


    /* NEXT */

    function showNext() {

        currentIndex =
            (currentIndex + 1) % photos.length;

        openViewer(currentIndex);
    }


    /* PREVIOUS */

    function showPrevious() {

        currentIndex =
            (currentIndex - 1 + photos.length) %
            photos.length;

        openViewer(currentIndex);
    }


    closeButton.addEventListener(
        "click",
        closeViewer
    );

    nextButton.addEventListener(
        "click",
        showNext
    );

    previousButton.addEventListener(
        "click",
        showPrevious
    );


    /* CLICK OUTSIDE PHOTO */

    viewer.addEventListener("click", event => {

        if (event.target === viewer) {
            closeViewer();
        }

    });


    /* KEYBOARD CONTROLS */

    document.addEventListener("keydown", event => {

        if (!viewer.classList.contains("show")) {
            return;
        }

        if (event.key === "Escape") {
            closeViewer();
        }

        if (event.key === "ArrowRight") {
            showNext();
        }

        if (event.key === "ArrowLeft") {
            showPrevious();
        }

    });

});
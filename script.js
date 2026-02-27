function setUpGallery() {
    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {

        images[i].addEventListener("mouseover", function() {
            upDate(this);
        });

        images[i].addEventListener("mouseleave", function() {
            undo();
        });

        images[i].setAttribute("tabindex", "0");

        images[i].addEventListener("focus", function() {
            upDate(this);
        });

        images[i].addEventListener("blur", function() {
            undo();
        });
    }
}

function upDate(previewPic) {
    let displayDiv = document.getElementById("image");

    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.innerHTML = previewPic.alt;
}

function undo() {
    let displayDiv = document.getElementById("image");

    displayDiv.style.backgroundImage = "";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}
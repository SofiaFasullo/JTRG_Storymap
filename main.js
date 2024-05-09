


var slide_num = 0;


// ## Interface Elements
const slides = document.querySelectorAll('.image');
const slidePrevButton = document.querySelector('#prev-slide');
const slideNextButton = document.querySelector('#next-slide');

// slides.style.height = "0%";
// document.getElementById('slide-1-image').style.height = "100%";


function updateSlide(num_slide) {
    // Loop through each slide
    slides.forEach((slide, index) => {
        slide.style.visibility = 'hidden';
        slide.style.display = 'none';
        
        // If the index matches the num_slide, set its height to 100%
        if (index === num_slide) {
            slide.style.visibility = 'visible';
            slide.style.display = 'block';
            slide.style.height = '100%';
        }
    });
}


slidePrevButton.addEventListener('click', () => {
    if (slide_num > 0) { // Check if not at the beginning
        console.log("clicked back");
        slide_num--;
        console.log(slide_num);
        updateSlide(slide_num);
    }
    if (slide_num === 0) { // If at the beginning, disable prev button
        slidePrevButton.disabled = true;
    }
    // Enable next button (in case it was disabled)
    slideNextButton.disabled = false;
});

slideNextButton.addEventListener('click', () => {
    if (slide_num < slides.length - 1) { // Check if not at the end
        console.log("clicked up");
        slide_num++;
        console.log(slide_num);
        updateSlide(slide_num);
    }
    if (slide_num === slides.length - 1) { // If at the end, disable next button
        slideNextButton.disabled = true;
    }
    // Enable prev button (in case it was disabled)
    slidePrevButton.disabled = false;
});



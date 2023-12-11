/* -----------AOS_FRAMEWORK----------- */
AOS.init({
    offset: 120, // offset (in px) from the original trigger point
    delay: 10, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: true, // whether elements should animate out while scrolling past them
});

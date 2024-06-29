let rect = document.querySelector('#center');

rect.addEventListener('mousemove', function(details) {

    const reactLocation = rect.getBoundingClientRect();

    const insideRect = details.clientX - reactLocation.left;

    if (insideRect < reactLocation.width / 2) {
        const redColor = gsap.utils.mapRange(
            0,
            reactLocation.width / 2,
            255,
            0,
            insideRect
        );

        gsap.to(rect, {
            backgroundColor: `rgb(${Math.round(redColor)},0,0)`,
            ease: "Power4.easeOut"
        });
    } else {
        const blueColor = gsap.utils.mapRange(
            reactLocation.width / 2,
            reactLocation.width,
            0,
            255,
            insideRect
        );

        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${Math.round(blueColor)})`,
            ease: "Power4.easeOut"
        });
    }
});
rect.addEventListener('mouseleave', function() {
    gsap.to(rect, {
        backgroundColor: 'white'
       
    });
})
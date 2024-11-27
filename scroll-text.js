document.addEventListener("DOMContentLoaded", function () {
    var $tickerWrapper = document.querySelector(".scroll-text-container");
    var $list = $tickerWrapper.querySelector(".list");
    var $clonedList = $list.cloneNode(true);
    var listWidth = 0;

    // Calculate total width of the original list
    $list.querySelectorAll(".listitem").forEach(function (item) {
        listWidth += item.offsetWidth;
    });

    // Set widths for both lists
    $list.style.width = listWidth + "px";
    $clonedList.style.width = listWidth + "px";
    $clonedList.classList.add("cloned");
    $tickerWrapper.appendChild($clonedList);

    // GSAP Timeline for infinite scrolling to the RIGHT
    var infinite = gsap.timeline({ repeat: -1, paused: false });
    var time = 10; // Duration of one complete scroll (lower = faster)

    infinite
        .fromTo(
            $list,
            { x: -listWidth }, // Start off-screen to the left
            { x: 0, duration: time, ease: "linear" }, // Move to the right
            0
        )
        .fromTo(
            $clonedList,
            { x: 0 }, // Start at the beginning of the container
            { x: listWidth, duration: time, ease: "linear" }, // Move out to the right
            0
        );

    // Pause/Resume on hover
    $tickerWrapper.addEventListener("mouseenter", function () {
        infinite.pause();
    });
    $tickerWrapper.addEventListener("mouseleave", function () {
        infinite.play();
    });
});

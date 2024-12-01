document.addEventListener("DOMContentLoaded", function () {
    var $tickerWrapper = document.querySelector(".scroll-text-container");
    var $list = $tickerWrapper.querySelector(".list");
    var $clonedList = $list.cloneNode(true);
    var listWidth = 0;

    $list.querySelectorAll(".listitem").forEach(function (item) {
        listWidth += item.offsetWidth;
    });

    $list.style.width = listWidth + "px";
    $clonedList.style.width = listWidth + "px";
    $clonedList.classList.add("cloned");
    $tickerWrapper.appendChild($clonedList);

    var infinite = gsap.timeline({ repeat: -1, paused: false });
    var time = 10;

    infinite
        .fromTo(
            $list,
            { x: -listWidth },
            { x: 0, duration: time, ease: "linear" },
            0
        )
        .fromTo(
            $clonedList,
            { x: 0 },
            { x: listWidth, duration: time, ease: "linear" },
            0
        );
});

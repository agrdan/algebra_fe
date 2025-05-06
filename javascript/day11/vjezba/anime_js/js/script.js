document.addEventListener("DOMContentLoaded", () => {
    // animation 1
    anime({
        targets: "#zeleni-kvadrat",
        translateX: 100,
        borderRadius: 50,
        backgroundColor: "#ff0000",
        duration: 2000,
        easing: "linear",
        direction: "alternate"
    });

    // animation 2
    const parentBall = anime({
        targets: "#roditelj-kugla",
        rotate: [60, -60],
        duration: 3000,
        autoplay: false,
        easing: "easeInOutSine",
        direction: "alternate",
        loop: true
    });

    const buttons = document.getElementsByTagName("button");
    buttons[0].addEventListener("click", parentBall.play);
    buttons[1].addEventListener("click", parentBall.pause);

    // animation 3
    const progress = document.querySelector("#napredak");

    const battery = {
        percentage: "0%"
    };

    const icon = anime({
        targets: ".segment",
        width: 20,
        duration: 300,
        delay: anime.stagger(500),
        endDelay: 500,
        easing: "linear",
        loop: true
    });

    anime({
        targets: battery,
        percentage: "100%",
        duration: 8800,
        easing: "linear",
        round: 1,
        update: () => {
            progress.innerHTML = battery.percentage;
        },
        complete: () => {
            icon.pause();
            icon.seek(icon.duration);
        }
    });

    // animation 4
    const box = document.querySelector("#kutija");
    anime({
        targets: "#sadrzaj",
        translateX:  [
            {value: 53, duration: 500, delay: 1000},
            {value: 0, duration: 500, delay: 2500},
            {value: -53, duration: 500, delay: 500},
            {value: 0, duration: 500, delay: 2500} 
        ],
        translateY:  [
            {value: 50, duration: 500},
            {value: 0, duration: 500, delay: 1500},  
            {value: -53, duration: 500, delay: 500},
            {value: 0, duration: 500, delay: 2500},
            {value: 50, duration: 500, delay: 500},
            {value: 0, duration: 500, delay: 1500}  
        ],
        easing: "linear",
        begin: () => {
            box.style.borderBottom = "none";
        },
        complete: () => {
            box.style.borderBottom = "3px solid darkorange";
        }
    });

    // animation 5
    const balls = anime.timeline({
        duration: 1000,
        easing: "easeInOutSine",
        loop: true
    });

    balls.add({
        targets: ".prva",
        keyframes: [
            {
                translateY: -50,
                backgroundColor: "rgb(255, 0, 0)"
            },
            {
                translateY: 0,
                backgroundColor: "rgb(128, 128, 128)"
            }
        ],
    }).add({
        targets: ".druga",
        keyframes: [
            {
                translateY: -50,
                backgroundColor: "rgb(0, 255, 0)"
            },
            {
                translateY: 0,
                backgroundColor: "rgb(128, 128, 128)"
            }
        ]
    }, "-=900").add({
        targets: ".treca",
        keyframes: [
            {
                translateY: -50,
                backgroundColor: "rgb(0, 0, 255)"
            },
            {
                translateY: 0,
                backgroundColor: "rgb(128, 128, 128)"
            }
        ]
    }, "-=800")


});
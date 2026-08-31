/* =========================================================
   TEAM CFC — INTERACTIONS
   Countdown • Active navigation • Mobile menu • gallery viewer
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------- COUNTDOWN ---------------- */

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    // Ganapathi Prathishta:
    // 14 September 2026, 9:00 AM IST.
    const targetDate =
        new Date("2026-09-14T09:00:00+05:30").getTime();


    function updateCountdown() {

        const remaining = targetDate - Date.now();

        if (remaining <= 0) {

            daysEl.textContent = "00";
            hoursEl.textContent = "00";
            minutesEl.textContent = "00";
            secondsEl.textContent = "00";

            return;
        }


        const totalSeconds =
            Math.floor(remaining / 1000);

        const days =
            Math.floor(totalSeconds / 86400);

        const hours =
            Math.floor(
                (totalSeconds % 86400) / 3600
            );

        const minutes =
            Math.floor(
                (totalSeconds % 3600) / 60
            );

        const seconds =
            totalSeconds % 60;


        daysEl.textContent =
            String(days).padStart(2, "0");

        hoursEl.textContent =
            String(hours).padStart(2, "0");

        minutesEl.textContent =
            String(minutes).padStart(2, "0");

        secondsEl.textContent =
            String(seconds).padStart(2, "0");
    }


    if (
        daysEl &&
        hoursEl &&
        minutesEl &&
        secondsEl
    ) {

        updateCountdown();

        setInterval(
            updateCountdown,
            1000
        );

    }


    /* ---------------- MOBILE MENU ---------------- */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const nav =
        document.querySelector(".nav-links");


    if (menuToggle && nav) {

        menuToggle.addEventListener(
            "click",
            () => {

                nav.classList.toggle("show");

                menuToggle.setAttribute(
                    "aria-expanded",
                    nav.classList.contains("show")
                );

            }
        );


        nav.querySelectorAll("a").forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {
                        setActiveNav(
    link.getAttribute("href").substring(1)
);

                        nav.classList.remove("show");

                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );

    }


    /* ---------------- ACTIVE NAVIGATION ---------------- */

    const navLinks =
        [...document.querySelectorAll(".nav-links a")];

    const sections =
        [...document.querySelectorAll("section[id]")];


    function setActiveNav(id) {

        navLinks.forEach(link => {

            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`
            );

        });

    }


    if (
        sections.length &&
        navLinks.length
    ) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    const visible =
                        entries
                            .filter(
                                entry =>
                                    entry.isIntersecting
                            )
                            .sort(
                                (a, b) =>
                                    b.intersectionRatio -
                                    a.intersectionRatio
                            );


                    if (visible.length) {

                        setActiveNav(
                            visible[0].target.id
                        );

                    }

                },
                {
                    rootMargin:
                        "-18% 0px -65% 0px",

                    threshold:
                        [
                            0.05,
                            0.15,
                            0.3,
                            0.5
                        ]
                }
            );


        sections.forEach(
            section =>
                observer.observe(section)
        );

    }


 /* ---------------- DONATION FORM ---------------- */

    const donationForm =
        document.getElementById(
            "donation-form"
        );

    const upiArea =
        document.getElementById(
            "upi-area"
        );

    const copyUpi =
        document.getElementById(
            "copy-upi"
        );

    const upiId =
        document.getElementById(
            "upi-id"
        );


    if (
        donationForm &&
        upiArea
    ) {

        donationForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                donationForm.classList.add(
                    "hidden"
                );

                upiArea.classList.remove(
                    "hidden"
                );

            }
        );

    }


    if (
        copyUpi &&
        upiId
    ) {

        copyUpi.addEventListener(
            "click",
            async () => {

                try {

                    await navigator.clipboard.writeText(
                        upiId.textContent.trim()
                    );


                    const original =
                        copyUpi.textContent;


                    copyUpi.textContent =
                        "COPIED ✓";


                    setTimeout(
                        () => {

                            copyUpi.textContent =
                                original;

                        },
                        1600
                    );

                } catch {

                    // Clipboard access may be blocked
                    // on local files.

                }

            }
        );

    }

});
const teamCfcImages = [
    "team-cfc.jpg",
    "team-cfc2.jpg",
    "team-cfc3.jpg"
];

let teamCfcIndex = 0;

function changeTeamCfcImage() {
    const image = document.getElementById("teamCfcSlide");

    if (!image) return;

    teamCfcIndex++;

    if (teamCfcIndex >= teamCfcImages.length) {
        teamCfcIndex = 0;
    }

    image.style.opacity = "0";

    setTimeout(() => {
        image.src = teamCfcImages[teamCfcIndex];
        image.style.opacity = "1";
    }, 500);
}

setInterval(changeTeamCfcImage, 4000);
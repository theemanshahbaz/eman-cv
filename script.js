/* =========================
   CV INTERACTIONS
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* Smooth reveal animation */
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.08
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });


    /* External links open safely */
    const externalLinks = document.querySelectorAll(
        'a[target="_blank"]'
    );

    externalLinks.forEach((link) => {
        link.setAttribute("rel", "noopener noreferrer");
    });


    /* Photo fallback */
    const photo = document.querySelector(".photo-wrap img");

    if (photo) {

        photo.addEventListener("error", () => {

            photo.style.display = "none";

            const wrapper = document.querySelector(".photo-wrap");

            wrapper.style.background =
                "linear-gradient(135deg,#356cff,#6f94ff)";

            wrapper.style.borderRadius = "50%";

        });

    }

});
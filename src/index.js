headerAnimation();
sectionLoadAnimation();
projectsLoadAnimation();
featureProjLoadAnimation();
mobileNavFunction();


// DOM - Header dynamics
function headerAnimation () {
    const header = document.querySelector("header");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY <= 0) {
            header.classList.remove("header-hidden", "header-scrolled");
        } else if (currentScrollY > lastScrollY) {
            header.classList.add("header-hidden");
        } else {
            header.classList.remove("header-hidden");
            header.classList.add("header-scrolled");
        };
        lastScrollY = currentScrollY;
    });
};


// DOM - Section scroll

function sectionLoadAnimation() {
    const sections = document.querySelectorAll(".body-section");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            };
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    });

    sections.forEach(section => observer.observe(section));
};

function projectsLoadAnimation() {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            };
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    });

    cards.forEach((card, index) => {
        card.style.setProperty("--card-index", index);
        observer.observe(card);
    });
};

function featureProjLoadAnimation() {
    const wrappers = document.querySelectorAll(".feature-card-wrapper");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            };
        });
    }, {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    });

    wrappers.forEach((card, index) => {
        card.style.setProperty("--featured-index", index);
        observer.observe(card);
    });

};

function mobileNavFunction() {
    const hamburgerBtn = document.querySelector(".mobile-nav-btn");
    const navElem = document.querySelector(".mobile-nav");
    const navBackdrop = document.querySelector(".mobile-nav-backdrop");

    function toggleMenu(forceState) {
        const isOpen = typeof forceState === "boolean"
        ? forceState
        : !navElem.classList.contains("is-open");
        navElem.classList.toggle("is-open", isOpen);
        navBackdrop.classList.toggle("is-open", isOpen);
        document.body.style.overflow = isOpen ? "hidden" : "";
    };

    hamburgerBtn?.addEventListener("click", () => toggleMenu());
    navBackdrop?.addEventListener("click", () => toggleMenu(false));

    navElem?.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => toggleMenu(false));
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && navElem?.classList.contains("is-open")) {
            toggleMenu(false);
        };
    });
};
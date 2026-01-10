// Header Background color
const header = document.getElementById('toggel-menu');

window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile Menu
const menuBtn = document.getElementById("menu-btn");
const closeMenu = document.getElementById("close-menu");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
});

closeMenu.addEventListener("click", () => {
    mobileMenu.classList.add("translate-x-full");
});

mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("translate-x-full");
    });
});

// Dropdown Toggle
document.querySelectorAll(".dropdown-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("hidden");
        btn.querySelector("i").classList.toggle("rotate-180");
    });
});

// Deep Dropdown Toggle
document.querySelectorAll(".deepDropdown-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.nextElementSibling.classList.toggle("hidden");
        btn.querySelector("i").classList.toggle("rotate-180");
    });
});

// tab change

const tabs = document.querySelectorAll('.tab-button');
const panes = document.querySelectorAll('.tab-page');
const tabItems = document.querySelectorAll('#tabPages li');

tabItems.forEach(li => li.classList.add('group'));
tabItems[0].classList.remove('group');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault();
        tabs.forEach(t => t.classList.remove('bg-[#0d6efd]'));
        panes.forEach(p => p.classList.add('hidden'));
        tabItems.forEach(li => li.classList.add('group'));
        tab.classList.add('bg-[#0d6efd]');
        document.getElementById(tab.dataset.tab).classList.remove('hidden');
        tabItems[index].classList.remove('group');
    });
});

// Accordian

const AccordianBtn = document.querySelectorAll('.acordian-btn');

function closeAll() {
    document.querySelectorAll('.acordian-content').forEach(content => {
        content.style.maxHeight = null;

        const btn = content.previousElementSibling;
        btn.classList.remove('active');
        btn.querySelector('.icon').classList.remove('rotate-180');
    });
}

AccordianBtn.forEach((btn, index) => {
    const content = btn.nextElementSibling;
    const icon = btn.querySelector('.icon');

    if (index === 0) {
        content.style.maxHeight = content.scrollHeight + 'px';
        btn.classList.add('active');
        icon.classList.add('rotate-180');
    }

    btn.addEventListener('click', () => {
        const Open = btn.classList.contains('active');

        closeAll();

        if (!Open) {
            content.style.maxHeight = content.scrollHeight + 'px';
            btn.classList.add('active');
            icon.classList.add('rotate-180');
        }
    });
});

// Slider

const teamSlider = document.getElementById("slider");
const prevBtn = document.querySelector(".bi-chevron-left").parentElement;
const nextBtn = document.querySelector(".bi-chevron-right").parentElement;

let isMoving = false;

function cardWidth() {
    return teamSlider.children[0].getBoundingClientRect().width;
}

function nextSlide() {
    if (isMoving) return;
    isMoving = true;

    teamSlider.style.transition = "transform 0.5s ease-in-out";
    teamSlider.style.transform = `translateX(-${cardWidth()}px)`;

    teamSlider.addEventListener("transitionend", function handler() {
        teamSlider.removeEventListener("transitionend", handler);
        teamSlider.appendChild(teamSlider.children[0]);
        teamSlider.style.transition = "none";
        teamSlider.style.transform = "translateX(0)";
        isMoving = false;
    });
}

function prevSlide() {
    if (isMoving) return;
    isMoving = true;

    teamSlider.insertBefore(
        teamSlider.children[teamSlider.children.length - 1],
        teamSlider.children[0]
    );

    teamSlider.style.transition = "none";
    teamSlider.style.transform = `translateX(-${cardWidth()}px)`;

    requestAnimationFrame(() => {
        teamSlider.style.transition = "transform 0.5s ease-in-out";
        teamSlider.style.transform = "translateX(0)";
    });

    teamSlider.addEventListener("transitionend", function handler() {
        teamSlider.removeEventListener("transitionend", handler);
        isMoving = false;
    });
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

setInterval(nextSlide, 3500);

window.addEventListener("resize", () => {
    teamSlider.style.transition = "none";
    teamSlider.style.transform = "translateX(0)";
});

// Scroll to Top

const scrollTopBtn = document.getElementById('topButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
        topButton.classList.remove('opacity-0', 'pointer-events-none');
        topButton.classList.add('opacity-100');
    } else {
        topButton.classList.add('opacity-0', 'pointer-events-none');
        topButton.classList.remove('opacity-100');
    }
});

topButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


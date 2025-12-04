/* Smooth Scroll */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

/* Intersection Observer Animations */
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            entry.target.classList.add("scale-visible");
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll(".fade-in, .scale-in").forEach(el => {
    observer.observe(el);
});

/* Navigation click smooth scroll */
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        const href = this.getAttribute("href");

        // 内部链接：#Services #Products
        if (href.startsWith("#")) {
            e.preventDefault();
            scrollToSection(href.substring(1));
        }
    });
});

/* Product card → Change popup to page jump */
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        const target = card.getAttribute("data-target");
        if (target) {
            window.location.href = target;   // ← 跳转到具体产品页面
        }
    });
});

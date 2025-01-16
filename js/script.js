// Script untuk mengubah nama di <span id="name">
document.addEventListener("DOMContentLoaded", () => {
    // Minta nama pengguna melalui prompt
    let userName = prompt("Halo! Siapa nama Anda?", "Pengunjung");
    
    // Jika pengguna memasukkan nama, ubah teks di <span id="name">
    if (userName) {
        document.getElementById("name").textContent = userName;
    }
});

// Tunggu hingga DOM selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("message-form");
    const displaySection = document.getElementById("message-display");

    const displayName = document.getElementById("display-name");
    const displayBirthdate = document.getElementById("display-birthdate");
    const displayGender = document.getElementById("display-gender");
    const displayMessage = document.getElementById("display-message");
    const currentTime = document.getElementById("current-time");

    // Fungsi untuk menampilkan waktu saat ini
    function updateTime() {
        const now = new Date();
        currentTime.textContent = now.toLocaleTimeString();
    }
    updateTime();
    setInterval(updateTime, 1000); // Perbarui waktu setiap detik

    // Animasi GSAP untuk elemen
    function animateElement(element) {
        gsap.fromTo(
            element,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
    }

    
    // Tangani pengiriman form
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Cegah refresh halaman

        const name = form.name.value.trim();
        const birthdate = form.birthdate.value;
        const gender = form.gender.value;
        const message = form.message.value.trim();

        // Validasi input
        if (!name || !birthdate || !gender || !message) {
            alert("Semua field wajib diisi!");
            return;
        }

        function formValidation() {
            console.log('form Validation has been clicked!');
        }

        // Tampilkan data ke pengguna
        displayName.textContent = name;
        displayBirthdate.textContent = new Date(birthdate).toLocaleDateString();
        displayGender.textContent = gender;
        displayMessage.textContent = message;

        // Animasi pada elemen yang diperbarui
        animateElement(displayName);
        animateElement(displayBirthdate);
        animateElement(displayGender);
        animateElement(displayMessage);

        // Bersihkan form setelah submit
        form.reset();
    });
});

// Efek scroll halus untuk navigasi
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Ambil id target
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Scroll ke elemen target dengan smooth behavior
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Tampilkan slide pertama
    showSlide(currentSlide);

    // Ubah slide setiap 3 detik
    setInterval(nextSlide, 3000);
});

// Fungsi untuk tombol panah
function nextSlide() {
    const slides = document.querySelectorAll('.slider .slide');
    let currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    currentSlide = (currentSlide + 1) % slides.length;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.slider .slide');
    let currentSlide = Array.from(slides).findIndex(slide => slide.classList.contains('active'));
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
}

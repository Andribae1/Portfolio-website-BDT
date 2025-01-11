// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}; 

// aktifkan scroll section
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
            navLinks.forEach(Links => {
                Links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    } );


    // sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // hilangkan icon dan navbar saat link diklik! (Scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

window.onload = function() {
    const header = document.querySelector('.header');
    
    // Menambahkan kelas 'visible' setelah beberapa detik untuk efek jatuh
    setTimeout(() => {
        header.classList.add('visible');
    }, 200); // Delay 100ms untuk memberikan waktu sebelum animasi dimulai
};

/* scroll reveals */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// typed js
const typed = new Typed('.multiple-text', {
    strings: ['Mahasiswa Teknik Informatika', '', ''],
    typeSpeed: 100,
    backSpeed: 200,
    backDelay: 100,
    loop: true
});

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', debounce(() => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
}, 300));

let lastScrollTop = 0; // Menyimpan posisi scroll terakhir
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > lastScrollTop) {
            // Jika scroll ke bawah
            header.classList.add('hidden');
        } else {
            // Jika scroll ke atas
            header.classList.remove('hidden');
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Untuk menghindari nilai negatif
    });

    


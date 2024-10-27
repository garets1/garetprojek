// Fungsi untuk menampilkan section yang dipilih dan menyembunyikan yang lain
function showSection(sectionId) {
    var sections = document.getElementsByClassName('section');
    var notifButton = document.querySelector('.notif-button');

    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = 'none';
    }

    document.getElementById(sectionId).style.display = 'block';

    // Menampilkan tombol notifikasi hanya di halaman pendaftaran
    if (sectionId === 'pendaftaran') {
        notifButton.style.display = 'block'; // Tampilkan tombol
    } else {
        notifButton.style.display = 'none'; // Sembunyikan tombol
    }
}

// Memastikan tombol notifikasi disembunyikan pada awalnya
document.addEventListener("DOMContentLoaded", function() {
    // Awalnya, hanya section 'pendaftaran' yang ditampilkan
    showSection('pendaftaran');
});

// Fungsi untuk menampilkan pesan setelah submit form
document.getElementById("formPendaftaran").addEventListener("submit", function(event) {
    event.preventDefault();  // Mencegah form melakukan submit default
    document.getElementById("formPendaftaran").style.display = "none"; // Menyembunyikan form
    document.getElementById("message").style.display = "block"; // Menampilkan pesan
});

// Fungsi untuk menampilkan notifikasi selamat datang
function showWelcomeMessage() {
    alert("Selamat datang di website kami! Jangan lupa untuk mengisi form pendaftaran ya. Segera lengkapi data Anda dan bergabunglah dengan kami!");
}
// Fungsi untuk menampilkan section yang dipilih
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none'; // Sembunyikan semua section
    });
    document.getElementById(sectionId).style.display = 'block'; // Tampilkan section yang dipilih
}

// Fungsi untuk menampilkan pesan selamat
function showWelcomeMessage() {
    alert("Selamat datang di Website Kami, Disini Kami Membuat Form Pendaftaran Workshop ikuti dan daftar jangan Sampai Terlewat!");
}

// Fungsi untuk menangani pengiriman formulir
function handleSubmit(event) {
    event.preventDefault(); // Mencegah pengiriman formulir secara default
    const form = document.getElementById('formPendaftaran');
    const messageDiv = document.getElementById('message');

    // Sembunyikan formulir
    form.style.display = 'none';
    // Tampilkan pesan sukses
    messageDiv.style.display = 'block';
    return false; // Untuk mencegah pengiriman formulir
}




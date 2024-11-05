document.addEventListener("DOMContentLoaded", function () {
  // ambil element dari html nav link

  const links = document.querySelectorAll("nav a");

  function updateUnderline() {
    links.forEach((link) => link.classList.remove("underline"));
    const currentHash = window.location.hash;
    const activeLink = document.querySelector(`nav a[href="${currentHash}"]`);

    if (activeLink) {
      activeLink.classList.add("underline");
    }
  }

  // Jalankan fungsi saat halaman dimuat
  updateUnderline();

  // Jalankan fungsi setiap kali hash berubah (saat link di-klik)
  window.addEventListener("hashchange", updateUnderline);
});

// JavaScript untuk menambahkan event listener pada setiap tombol
const moreButtons = document.querySelectorAll("#moreBtn");

moreButtons.forEach((button) => {
  button.addEventListener("click", function () {
    alert("coming soon");
  });
});

//Hide navbar when scroll

let lastScrollTop = 0;
const navbar = document.getElementById("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scroll ke bawah, sembunyikan navbar
    navbar.style.top = "-170px";
    navbar.style.transition = "";
  } else {
    // Scroll ke atas, tampilkan navbar
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});

// JavaScript to handle image popup
document.querySelectorAll(".season-image").forEach((img) => {
  img.addEventListener("click", function () {
    const modal = document.getElementById("imageModal");
    const popupImage = document.getElementById("popupImage");

    // Set the modal image source to the clicked image source
    popupImage.src = this.src;

    // Show the modal
    modal.classList.add("active");
  });
});

// Close modal when clicking the close button
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("imageModal").classList.remove("active");
});

// Hide the modal when clicking outside the image
document.getElementById("imageModal").addEventListener("click", function (e) {
  if (e.target === this) {
    this.classList.remove("active");
  }
});

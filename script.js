$(document).ready(function () {
  $("#autoWidth").lightSlider({
    adaptiveHeight: true,
    auto: true,
    item: 1,
    slideMargin: 0,
    loop: true,
  });
});

const navbarHome = document.querySelector(".navbarHome");

window.addEventListener("scroll", () => {
  const post = window.scrollY > 100;

  navbarHome.classList.toggle("scroll", post);
});

const artikelList = [
  { judul: "Sejarah MTs As-Shiddiqin", link: "artikel.html" },
  { judul: "Kegiatan P5 di As-Shiddiqin", link: "artikel.html#p5" },
  { judul: "Profil Guru dan Staff", link: "index.html#profil" },
  { judul: "PPDB MTs As-Shiddiqin", link: "ppdb.html" },
  { judul: "Ekstrakurikuler MTs", link: "ekstrakulikuler.html" },
  { judul: "Visi Misi Sekolah", link: "index.html#visimisi" },
];


const input = document.getElementById("searchInput");
const hasilContainer = document.getElementById("hasilPencarian");

input.addEventListener("input", function () {
  const query = this.value.toLowerCase().trim();
  hasilContainer.innerHTML = "";
  hasilContainer.style.display = "none";

  if (query.length > 0) {
    const hasil = artikelList.filter((a) =>
      a.judul.toLowerCase().includes(query)
    );

    if (hasil.length > 0) {
      hasil.forEach((artikel) => {
        const item = document.createElement("div");
        item.innerHTML = `<a href="${artikel.link}" style="display:block; padding:5px 0; color:#000;">${artikel.judul}</a>`;
        hasilContainer.appendChild(item);
      });
      hasilContainer.style.display = "block";
    } else {
      hasilContainer.innerHTML = "<p style='margin:0;'>Tidak ditemukan.</p>";
      hasilContainer.style.display = "block";
    }
  }
});

// Biar hilang kalau klik di luar
document.addEventListener("click", function (e) {
  if (
    !e.target.closest("#searchInput") &&
    !e.target.closest("#hasilPencarian")
  ) {
    hasilContainer.style.display = "none";
  }
});

document.addEventListener("click", function (e) {
  if (!e.target.closest("#searchInput")) {
    hasilContainer.innerHTML = "";
  }
});

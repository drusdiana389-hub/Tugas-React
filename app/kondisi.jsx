import { Text, View } from "react-native";

// Soal 1
// let nilaiUjian = 80;
// let hasilKelulusan =
//   nilaiUjian >= 75 ? "Selamat, Anda Lulus!" : "Maaf, Anda Belum Lulus.";
// let warnaTeks = nilaiUjian >= 75 ? "hijau" : "merah";
// console.log(`${hasilKelulusan} (warna: ${warnaTeks})`);

// Soal 2
// let suhuUdara = 38;
// suhuUdara > 35 && console.log("Peringatan: Cuaca Sangat Panas Hari Ini!");

// Soal 3
// let isLoggedIn = true;
// let namaUser = "Nadiyah";
// let statusLogin = isLoggedIn
//   ? `Halo, ${namaUser}!`
//   : "Silakan Login Terlebih Dahulu";
// console.log(statusLogin);

// Soal 4
// let totalBelanja = 350000;
// let pesanDiskon =
//   totalBelanja > 500000
//     ? "Anda Mendapat Diskon 20%! (ungu)"
//     : totalBelanja >= 200000
//     ? "Anda Mendapat Diskon 10%! (biru)"
//     : "Belanja lebih banyak untuk dapat diskon! (abu-abu)";
// console.log(pesanDiskon);

// Soal 5
// let jamSekarang = 19;
// let statusToko =
//   jamSekarang >= 8 && jamSekarang <= 17 ? "Toko Buka" : "Toko Tutup";
// console.log(statusToko);

// Soal 6
// let isDarkMode = true;
// let bgColor = isDarkMode ? "#121212" : "#FFFFFF";
// let textColor = isDarkMode ? "putih" : "hitam";
// console.log(`Background: ${bgColor}, Warna Teks: ${textColor}`);

// Soal 7
// let password = "abc12";
// password.length < 6 &&
//   console.log("Password terlalu pendek (minimal 6 karakter)");

// Soal 8
// let jenisKendaraan = "Motor";
// if (jenisKendaraan === "Mobil") {
//   console.log("Tarif Parkir: Rp 5.000 / jam");
// } else if (jenisKendaraan === "Motor") {
//   console.log("Tarif Parkir: Rp 2.000 / jam");
// }

// Soal 9
// let stokBarang = 5;
// if (stokBarang > 10) {
//   console.log("Stok Tersedia (hijau)");
// } else if (stokBarang >= 1 && stokBarang <= 10) {
//   console.log("Stok Terbatas! Segera Beli (oranye)");
// } else {
//   console.log("Stok Habis (merah)");
// }

// Soal 10
let usiaPenonton = 16;
let kategoriFilm;

if (usiaPenonton < 13) {
  kategoriFilm = "Kategori: Semua Umur (SU)";
} else if (usiaPenonton >= 13 && usiaPenonton <= 17) {
  kategoriFilm = "Kategori: Remaja (R)";
} else {
  kategoriFilm = "Kategori: Dewasa (D)";
}

console.log(kategoriFilm);

export default function Kondisi() {
  return (
    <View>
    </View>
  );
}
import { Text, View } from "react-native";

// Soal 1:
// function tampilkanPesan() {
//   console.log("Selamat Datang di Aplikasi Mobile SMK!");
// }
// tampilkanPesan();

// Soal 2
// function dapatkanKodeUnik() {
//   return 404;
// }
// let kodeVerifikasi = dapatkanKodeUnik();
// console.log(`Kode verifikasi: ${kodeVerifikasi}`);

// Soal 3
// function hitungPromo(harga) {
//   return harga * 2;
// }
// console.log(`Hasil promo: ${hitungPromo(75000)}`);

// Soal 4
// function jumlahkanBelanja(hargaBarangA, hargaBarangB) {
//   return hargaBarangA + hargaBarangB;
// }
// console.log(`Total belanja: ${jumlahkanBelanja(120000, 85000)}`);

// Soal 5
// function hitungOngkir(jarak, tarif = 5000) {
//   return jarak * tarif;
// }
// console.log(`Ongkir (jarak 3, tarif 7000): ${hitungOngkir(3, 7000)}`);
// console.log(`Ongkir (jarak 4, tarif default): ${hitungOngkir(4)}`);

// Soal 6
// function cekKelulusan(nilaiUjian) {
//   if (nilaiUjian >= 75) {
//     return "Lulus Kompeten";
//   } else {
//     return "Remedial";
//   }
// }
// console.log(`Status kelulusan: ${cekKelulusan(80)}`);

// Soal 7
// function jalankanHitungMundur(batas) {
//   for (var i = 0; i < batas; i++) {
//     console.log(i);
//   }
// }
// jalankanHitungMundur(4);

// Soal 8
// const hitungLuasPersegiPanjang = function (panjang, lebar) {
//   return panjang * lebar;
// };
// console.log(`Luas persegi panjang: ${hitungLuasPersegiPanjang(5, 6)}`);

// Soal 9
// const konversiIDRkeUSD = (rupiah) => {
//   return rupiah / 15000;
// };
// console.log(`Hasil konversi: ${konversiIDRkeUSD(300000)} USD`);

// Soal 10
const formatNamaLengkap = (...rest) => {
  let [depan, belakang] = rest;
  return `${depan} ${belakang}`;
};

console.log(`Nama lengkap: ${formatNamaLengkap("nuraini", "Aliyah")}`);

export default function Fungsi() {
  return (
    <View>
    </View>
  );
}
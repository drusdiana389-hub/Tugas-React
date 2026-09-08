import { Text, View } from "react-native";

// Soal 1
// const firstName = "Budi";
// const lastName = "Santoso";
// const isAktif = true;
// console.log(`Akun atas nama ${firstName} ${lastName} status aktif: ${isAktif}`);

// Soal 2
// let rawUsername = "   admin_smkn10   ";
// let cleanUsername = rawUsername.trim();
// console.log(`Username bersih: ${cleanUsername}`);
// console.log(`Panjang karakter: ${cleanUsername.length}`);

// Soal 3
// let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";
// let posisiKata = komentar.indexOf("buruk");
// let potongan = komentar.substring(0, 19);
// console.log(`Posisi kata "buruk": ${posisiKata}`);
// console.log(`Potongan kalimat: ${potongan}`);

// Soal 4
// const string1 = "diskon";
// const string2 = "spesial50";
// const kodeKupon = string1.concat(string2).toUpperCase();
// console.log(`Kode kupon: ${kodeKupon}`);

// Soal 5
// let hargaStr = "150000.50";
// let hargaNumber = parseFloat(hargaStr);
// let stokStr = "25";
// let stokInt = parseInt(stokStr);
// let totalHarga = hargaNumber * stokInt;
// console.log(`Total harga: ${totalHarga}`);

// Soal 6
// let totalBelanja = 250000;
// totalBelanja -= 50000;
// totalBelanja += totalBelanja * 0.1;
// console.log(`Total pembayaran akhir: ${totalBelanja}`);

// Soal 7
// let inputUsia = "17";
// let syaratUsia = 17;
// console.log(inputUsia === syaratUsia);
// console.log(inputUsia >= syaratUsia);

// Soal 8
// let isPasswordCorrect = true;
// let isEmailVerified = true;
// let bisaMasuk = isPasswordCorrect && isEmailVerified;
// console.log(`Tombol Masuk Dashboard aktif: ${bisaMasuk}`);
// isEmailVerified = false;
// bisaMasuk = isPasswordCorrect && isEmailVerified;
// console.log(`Tombol Masuk Dashboard aktif: ${bisaMasuk}`);

// Soal 9
// let isNilaiTinggi = true;
// let isJuaraLomba = false;
// let layakBeasiswa = isNilaiTinggi || isJuaraLomba;
// console.log(`Layak mendapat beasiswa: ${layakBeasiswa}`);

// Soal 10
let member = true;
let hasilDiskonVar; 
if (member === true) {
  let diskon = 0.2;
  var diskonVar = 0.2;
  console.log(`Diskon di dalam blok (let): ${diskon}`);
  console.log(`Diskon di dalam blok (var): ${diskonVar}`);
}

hasilDiskonVar = diskonVar; 
console.log(hasilDiskonVar);

export default function Var() {
  return (
    <View>
    </View>
  );
}
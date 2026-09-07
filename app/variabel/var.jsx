import { View, Text } from "react-native";

export default function Var() {
  // SOAL 2
  // Validasi Nama Pengguna (Username Trim & Length)

  const rawUsername = " admin_smkn10 ";
  const usernameBersih = rawUsername.trim();
  const panjangUsername = usernameBersih.length;

  console.log("Username baru:", usernameBersih);
  console.log("Panjang username:", panjangUsername);


  // SOAL 3
  // Fitur Sensor Komentar Kasar (Substring & IndexOf)

  let komentar = "Wah, aplikasi ini sangat lambat dan buruk!";

  const posisiBuruk = komentar.indexOf("buruk");
  const potonganKomentar = komentar.substring(0, 19);

  console.log("Posisi indeks kata buruk:", posisiBuruk);
  console.log("Potongan kalimat:", potonganKomentar);


  // SOAL 4
  // Pembuatan Kode Kupon Diskon Otomatis

  const string1 = "diskon";
  const string2 = "spesial50";

  const kodeGabungan = string1.concat(string2);
  const kodeKupon = kodeGabungan.toUpperCase();

  console.log("Kode kupon:", kodeKupon);


  // SOAL 5
  // Konversi Tipe Data Harga Produk dari API

  const hargaStr = "150000.50";
  const harga = parseFloat(hargaStr);

  const jumlahStokStr = "25";
  const jumlahStok = parseInt(jumlahStokStr);

  const totalHarga = harga * jumlahStok;

  console.log("Harga:", harga);
  console.log("Jumlah stok:", jumlahStok);
  console.log("Total harga:", totalHarga);


  // SOAL 6
  // Kalkulator Diskon Belanja Harian

  let totalBelanja = 250000;

  totalBelanja -= 50000;

  const pajak = totalBelanja * 10 / 100;

  totalBelanja += pajak;

  console.log("Total pembayaran akhir:", totalBelanja);


  // SOAL 7
  // Sistem Validasi Usia Pengguna

  const inputUsia = "17";
  const syaratUsia = 17;

  const hasilStrictEqual = inputUsia === syaratUsia;
  const hasilPerbandingan = inputUsia >= syaratUsia;

  console.log("Hasil === :", hasilStrictEqual);
  console.log("Hasil >= :", hasilPerbandingan);

  /*
    Analisis:

    inputUsia memiliki tipe data string:
    "17"

    syaratUsia memiliki tipe data number:
    17

    Operator === membandingkan nilai DAN tipe data.
    Karena "17" adalah string sedangkan 17 adalah number,
    maka hasilnya false.

    Sedangkan operator >= melakukan perbandingan nilai
    dan JavaScript melakukan konversi tipe data secara otomatis.
    String "17" dikonversikan menjadi number 17.

    Jadi:
    "17" === 17 -> false
    "17" >= 17  -> true
  */


  // SOAL 8
  // Verifikasi Keamanan Login Ganda (AND &&)

  let isPasswordCorrect = true;
  let isEmailVerified = true;

  const bolehMasukDashboard =
    isPasswordCorrect && isEmailVerified;

  console.log(
    "Boleh masuk dashboard:",
    bolehMasukDashboard
  );

  // Uji jika password salah
  isPasswordCorrect = false;

  const passwordSalah =
    isPasswordCorrect && isEmailVerified;

  console.log(
    "Jika password salah:",
    passwordSalah
  );

  // Uji jika email belum diverifikasi
  isPasswordCorrect = true;
  isEmailVerified = false;

  const emailBelumVerified =
    isPasswordCorrect && isEmailVerified;

  console.log(
    "Jika email belum diverifikasi:",
    emailBelumVerified
  );


  // SOAL 9
  // Pengecekan Syarat Beasiswa Sekolah (OR ||)

  const isNilaiTinggi = true;
  const isJuaraLomba = false;

  const dapatBeasiswa =
    isNilaiTinggi || isJuaraLomba;

  console.log(
    "Status kelayakan beasiswa:",
    dapatBeasiswa
  );

  /*
    Skenario:
    Nilai akademik tinggi = true
    Juara lomba = false

    Karena menggunakan operator OR (||),
    cukup salah satu kondisi bernilai true.

    true || false = true

    Jadi siswa tetap mendapatkan beasiswa.
  */


  // SOAL 10
  // Studi Kasus Blok Scope Variabel di Keranjang Belanja
  // Let vs Var

  const member = true;

  if (member === true) {
    let diskon = 0.2;
    var diskonVar = 0.2;

    console.log("Diskon menggunakan let:", diskon);
    console.log("Diskon menggunakan var:", diskonVar);
  }

  console.log("Diskon menggunakan var di luar blok:", diskonVar);

  return (
    <View>
      {/* SOAL 2 */}
      <Text>Soal 2</Text>
      <Text>Username Baru: {usernameBersih}</Text>
      <Text>Panjang Username: {panjangUsername}</Text>


      {/* SOAL 3 */}
      <Text>Soal 3</Text>
      <Text>Posisi kata "buruk": {posisiBuruk}</Text>
      <Text>Potongan Kalimat: {potonganKomentar}</Text>


      {/* SOAL 4 */}
      <Text>Soal 4</Text>
      <Text>Kode Kupon: {kodeKupon}</Text>


      {/* SOAL 5 */}
      <Text>Soal 5</Text>

      <Text>Sebelum Di Parsing</Text>

      <Text>
        values = 150000.50; tipe data = string
      </Text>

      <Text>
        values = 25; tipe data = string
      </Text>

      <Text>Setelah Melakukan Parsing</Text>

      <Text>
        Harga Belanja: {harga}; tipe data = number
      </Text>

      <Text>
        Total Barang: {jumlahStok}; tipe data = number
      </Text>

      <Text>
        Total Harga: {totalHarga}
      </Text>


      {/* SOAL 6 */}
      <Text>Soal 6</Text>

      <Text>
        Total Pembayaran Akhir: {totalBelanja}
      </Text>


      {/* SOAL 7 */}
      <Text>Soal 7</Text>

      <Text>
        inputUsia === syaratUsia:{" "}
        {String(hasilStrictEqual)}
      </Text>

      <Text>
        inputUsia &gt;= syaratUsia:{" "}
        {String(hasilPerbandingan)}
      </Text>


      {/* SOAL 8 */}
      <Text>Soal 8</Text>

      <Text>
        Password benar dan email terverifikasi:{" "}
        {String(bolehMasukDashboard)}
      </Text>

      <Text>
        Jika password salah:{" "}
        {String(passwordSalah)}
      </Text>

      <Text>
        Jika email belum diverifikasi:{" "}
        {String(emailBelumVerified)}
      </Text>


      {/* SOAL 9 */}
      <Text>Soal 9</Text>

      <Text>
        Nilai akademik tinggi:{" "}
        {String(isNilaiTinggi)}
      </Text>

      <Text>
        Juara lomba:{" "}
        {String(isJuaraLomba)}
      </Text>

      <Text>
        Dapat Beasiswa:{" "}
        {String(dapatBeasiswa)}
      </Text>


      {/* SOAL 10 */}
      <Text>Soal 10</Text>

      <Text>
        Diskon member menggunakan var:{" "}
        {diskonVar}
      </Text>

      <Text>
        Variabel let hanya dapat diakses di dalam blok if.
      </Text>

      <Text>
        Jika console.log(diskon) dipanggil di luar blok,
        akan menghasilkan ReferenceError.
      </Text>
    </View>
  );
}

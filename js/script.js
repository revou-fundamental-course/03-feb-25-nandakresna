/* ini file Javascript */

function KonversiSuhu() {
  // Mengambil nilai input suhu dalam Celsius
  let celsius = document.getElementById("main-input").value;

  // Validasi input
  if (celsius === "" || isNaN(celsius)) {
    alert("Masukkan suhu dalam angka!");
    return;
  }

  // Mengkonversi Celsius ke Fahrenheit
  let fahrenheit = (celsius * 9/5) + 32;

  // Menampilkan hasil konversi
  document.getElementById("main-result").value = fahrenheit;

  // Menampilkan cara konversi
  document.getElementById("cara-konversi").value = `(${celsius} * 9/5) + 32`;
}

function resetForm() {
  // Mereset nilai input dan output
  document.getElementById("main-input").value = "";
  document.getElementById("main-result").value = "";
  document.getElementById("cara-konversi").value = "";
}

function reverseKonversi() {
  // Mengambil nilai input suhu dalam Fahrenheit
  let fahrenheit = document.getElementById("main-input").value;

   // Validasi input
  if (fahrenheit === "" || isNaN(fahrenheit)) {
    alert("Masukkan suhu dalam angka!");
    return;
  }

  // Mengkonversi Fahrenheit ke Celsius
  let celsius = (fahrenheit - 32) * 5/9;

  // Menampilkan hasil konversi
  document.getElementById("main-result").value = celsius;

  // Menampilkan cara konversi
  document.getElementById("cara-konversi").value = `(${fahrenheit} - 32) * 5/9`;
}
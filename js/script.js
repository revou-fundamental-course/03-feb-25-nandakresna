/* ini file Javascript */

function KonversiSuhu() {
  // Mendapatkan nilai input Celsius
  let celsius = document.getElementById("main-input").value;

  // Validasi input: pastikan input tidak kosong dan berupa angka
  if (celsius === "" || isNaN(celsius)) {
      alert("Masukkan suhu dalam angka.");
      return;
  }

  // Melakukan konversi Celsius ke Fahrenheit
  let fahrenheit = (celsius * 9 / 5) + 32;

  // Menampilkan hasil konversi pada input Fahrenheit
  document.getElementById("main-result").value = fahrenheit;

  // Menampilkan cara konversi pada input cara konversi
  document.getElementById("cara-konversi").value = "(C x 9/5) + 32";
}

function resetForm() {
  // Mereset nilai input Celsius dan Fahrenheit
  document.getElementById("main-input").value = "";
  document.getElementById("main-result").value = "";
  document.getElementById("cara-konversi").value = "";
}

function reverseKonversi() {
  // Mendapatkan nilai input Celsius dan Fahrenheit
  let celsius = document.getElementById("main-input").value;
  let fahrenheit = document.getElementById("main-result").value;

   // Validasi input: pastikan input tidak kosong dan berupa angka
  if (celsius === "" || isNaN(celsius) || fahrenheit === "" || isNaN(fahrenheit)) {
      alert("Masukkan suhu dalam angka.");
      return;
  }

  // Melakukan konversi Fahrenheit ke Celsius
  let celsiusBaru = (fahrenheit * 1.8) + 32;

  // Menampilkan hasil konversi pada input Celsius
  document.getElementById("main-input").value = celsiusBaru;
  document.getElementById("main-result").value = fahrenheit;

  // Menampilkan cara konversi pada input cara konversi
  document.getElementById("cara-konversi").value = "(F * 1.8) + 32";
}
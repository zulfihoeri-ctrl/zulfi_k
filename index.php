 <?php
session_start(); 

// Data contoh (biasanya diambil dari database)
$database_username = "admin";
$database_password = "password123";

// Mengambil data dari form
$input_username = $_POST['username'];
$input_password = $_POST['password'];

// Proses validasi
if ($input_username == $database_username && $input_password == $database_password) {
    $_SESSION['login_status'] = true;
    echo "Login Berhasil! Selamat Datang.";
} else {
    echo "Login Gagal! Username atau Password salah.";
}
?>
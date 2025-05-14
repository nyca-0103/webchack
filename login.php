<?php
require 'db.php';
session_start();

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT id, username, password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

if ($row = $result->fetch_assoc()) {
    if (password_verify($password, $row['password'])) {
        $_SESSION['userid'] = $row['id'];
        $_SESSION['username'] = $row['username'];
        header("Location: dashboard.php");
    } else {
        echo "Invalid credentials.";
    }
} else {
    echo "User not found.";
}
?>
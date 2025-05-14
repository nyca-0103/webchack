<?php
session_start();
if (!isset($_SESSION['userid'])) {
    header("Location: index.html");
    exit();
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Dashboard</title>
</head>
<body>
  <h1>Welcome, <?php echo $_SESSION['username']; ?>!</h1><b>
<a href="indeax.html">exam</a>

  <a href="logout.php">Logout</a>
</body>
</html>
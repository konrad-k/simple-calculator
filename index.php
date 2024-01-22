<?php
require_once 'src/csvLogger.php';

$csv = new CsvLogger($file = 'temp/data.csv');
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  if ($_POST['calculation']) {
    if ($csv->write($_POST['calculation'])) {
      $message = 'Calculation saved';
    } else {
      $message = 'Calculation not saved';
    }
  }
}
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Calculator</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/calculator.css">
  <script src="js/calculator.js" defer></script>
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      const calculator = new Calculator({ element: '.calculator' });
      calculator.init();
    });
  </script>
</head>

<body>
  <?php include 'src/calculator.php'; ?>
  <p>
    <a target="_blank" href="calculations.php">View calculations</a>
  </p>
  <?php if ($message)
    echo '<p>' . $message . '</p>'; ?>
</body>

</html>
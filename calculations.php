<?php
require_once 'src/csvLogger.php';

$csv = new CsvLogger($file = 'temp/data.csv');
$data = $csv->sortByDate();
?>
<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Calculator</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/table.css">
</head>

<body>
  <h1>Calculations</h1>
  <?php
  echo '<table><tr><th>Value</th><th>Result</th><th>IP</th><th>Date</th></tr>';

  foreach ($data as $row) {
    echo '<tr>';
    foreach ($row as $value) {
      echo '<td>' . htmlspecialchars($value) . '</td>';
    }
    echo '</tr>';
  }

  echo '</table>';
  ?>
</body>

</html>
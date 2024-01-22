<?php
class CsvLogger
{
  private $file;

  public function __construct($file)
  {
    $this->file = $file;
    $this->valided = false;
  }

  private function getClientIp()
  {
    return $_SERVER['REMOTE_ADDR'];
  }

  private function getDate()
  {
    return date("Y-m-d H:i:s");
  }

  private function validate($data)
  {
    $value = $data['value'];
    $result = $data['result'];

    if (!preg_match('/^\d+\s[-\/+x]\s\d+$/', $value)) {
      return false;
    }

    if (!is_numeric($result)) {
      return false;
    }

    return true;
  }

  private function addStamp($data)
  {
    $data['ip'] = $this->getClientIp();
    $data['date'] = $this->getDate();

    return $data;
  }

  public function write($data)
  {
    if ($this->validate($data)) {
      $data = $this->addStamp($data);
      $file = fopen($this->file, 'a');

      fputcsv($file, $data);
      fclose($file);
      return true;
    }
    return false;
  }

  public function sortByDate()
  {
    $data = $this->read();

    usort($data, function ($a, $b) {
      $dateA = strtotime($a[3]);
      $dateB = strtotime($b[3]);

      return $dateB - $dateA;
    });

    return $data;
  }

  public function read()
  {
    $data = array_map("str_getcsv", file(($this->file)));
    return $data;
  }
}

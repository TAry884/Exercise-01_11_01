<?php
$WeatherSource = "https://api.forecast.io/forecast/925500964bfaca8968ab057beb141c0b/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>
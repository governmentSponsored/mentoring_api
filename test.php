<?php
	include 'mentoringUrl.php';
	header('Content-Type: application/json');
	$zipCode = $_GET['zipCode'];
	$distance = $_GET['distance'];

	$fullUrl = $url . '&zipCode=' . $zipCode . '&distance=' . $distance;
	$JSON = file_get_contents($fullUrl);

	echo $JSON;
?>
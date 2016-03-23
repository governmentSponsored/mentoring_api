<?php
	include 'keys.php';
	header('Content-Type: application/json');
	$service = $_GET['service'];
	if($service == 'mentoring') {
		$zipCode = $_GET['zipCode'];
		$distance = $_GET['distance'];

		$fullUrl = $url . '&zipCode=' . $zipCode . '&distance=' . $distance;
	} else {
		
	}
	
	$JSON = file_get_contents($fullUrl);
	echo $JSON;
?>
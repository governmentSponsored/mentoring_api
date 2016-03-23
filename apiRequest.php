<?php
	include 'keys.php';
	header('Content-Type: application/json');
	$service = $_GET['service'];
	if($service == 'mentoring') {
		$zipCode = $_GET['zipCode'];
		$distance = $_GET['distance'];

		$fullUrl = $mentoringUrl . '&zipCode=' . $zipCode . '&distance=' . $distance;
	} else {
		$vol_loc = $_GET['vol_loc'];
		$vol_dist = $_GET['vol_dist'];
		$fullUrl = $allForGoodUrl . '&vol_loc=' . $vol_loc . '&vol_dist=' . $vol_dist . '&num=25';
	}
	
	$JSON = file_get_contents($fullUrl);
	echo $JSON;
?>
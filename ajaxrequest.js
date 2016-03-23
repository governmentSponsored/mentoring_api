$(document).ready( function() {
    $('#mentoring').submit(function(e) {
    	e.preventDefault();
    	e.stopPropagation();
    	console.log('submitted');
    	var zipCode = $('input[name="zipCode"]').val(),
		distance = $('input[name="distance"]:checked').val(),
		url = 'apiRequest.php',
		fullUrl = url + '?zipCode=' + zipCode + '&distance=' + distance,
		dataString = '';

		console.log(fullUrl);
		$.ajax({ 
            'url': fullUrl,
            'dataType': "json"
        }).done(function(data) {
        	var records = data.records;
        	for(var record in records) {
        		dataString += '<div>' + records[record].programName + '</div>'
        	}
        	$('#results').html(dataString);
        })
    });
});
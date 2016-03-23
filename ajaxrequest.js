$(document).ready( function() {
    var url = url = 'apiRequest.php';
    $('#mentoring').submit(function(e) {
    	e.preventDefault();
    	e.stopPropagation();
    	var zipCode = $('#mentoring input[name="zipCode"]').val(),
		distance = $('#mentoring input[name="distance"]:checked').val(),
		fullUrl = url + '?zipCode=' + zipCode + '&distance=' + distance + '&service=mentoring',
		dataString = '';

		console.log(fullUrl);
		$.ajax({ 
            'url': fullUrl,
            'dataType': "json"
        }).done(function(data) {
        	var records = data.records;
            console.log(data);
        	for(var record in records) {
        		dataString += '<div>' + records[record].programName + '</div>'
        	}
        	$('#mentoringResults').html(dataString);
        })
    });
    $('#allForGood').submit(function(e) {
        e.preventDefault();
        e.stopPropagation();
    });
});
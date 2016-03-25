$(document).ready( function() {
    //php file that does api requests to avoid XSS
    var url = url = 'apiRequest.php';

    //mentoring
    $('#mentoring').submit(function(e) {
        //stop submission from reloading page
    	e.preventDefault();
    	e.stopPropagation();
        //get values and combine them
    	var zipCode = $('#mentoring input[name="zipCode"]').val(),
		distance = $('#mentoring input[name="distance"]:checked').val(),
		fullUrl = url + '?zipCode=' + zipCode + '&distance=' + distance + '&service=mentoring',
		dataString = '<ul class="list-group">';

		$.ajax({ 
            'url': fullUrl,
            'dataType': "json"
        }).done(function(data) {
        	var records = data.records,
            current;
            console.log(data);
        	for(var record in records) {
                current = records[record];
        		dataString += '<li class="list-group-item"><a href="' + current.link + '">' + current.programName + '</a></li>'
        	}
            dataString+= '</ul>'
        	$('#mentoringResults').html(dataString);
        })
    });

    //all for good
    $('#allForGood').submit(function(e) {
        //stop submission from reloading page
        e.preventDefault();
        e.stopPropagation();
        //get values and combine them
        var vol_loc = $('#allForGood input[name="zipCode"]').val(),
        vol_dist = $('#allForGood input[name="distance"]:checked').val(),
        fullUrl = url + '?vol_loc=' + vol_loc + '&vol_dist=' + vol_dist,
        dataString = '<ul class="list-group">';

        $.ajax({ 
            'url': fullUrl
        }).done(function(data) {
            var items = data.items,
            current;
            console.log(data);
            for(var item in items) {
                current = items[item];
                dataString += '<li class="list-group-item"><a href="' + current.detailUrl + '">' + current.title + '</a></li>'
            }
            dataString+= '</ul>'
            $('#allForGoodResults').html(dataString);
        })
    });
});
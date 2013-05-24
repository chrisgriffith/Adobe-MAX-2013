$(document).ready(function() {
	var parkID = 0;
	var currentParkData;

	$('#parkNamePage').on('pagecreate', function(event) {
		var listHTML;
		console.log("pagecreate event");
		console.log($(document).width());
	
		if ($(document).width() < 500 ) {
			listHTML = Mustache.to_html(parklistTemplate, npsdata);
		} else {
			listHTML = Mustache.to_html(parkTabletTemplate, npsdata);
		}
	
		$('#parkNameList').html(listHTML);	
	});

	$('#parkNamePage').on('pageshow', function(event) {
		if ($(document).width() < 500 ) {
			$('#parkList').delegate('li', 'tap', function(event){
				parkID = event.currentTarget.id;
				currentParkData =  getParkData(parkID);
		
				$('#parkList').undelegate('li', 'tap');
				$('#parkList').listview('refresh');
			});
			$('#parkList').listview('refresh');
		} else {
			$('#parkNameList').delegate('a', 'tap', function(event){
				parkID = event.currentTarget.id;
				currentParkData =  getParkData(parkID);
				$('#parkNameList').undelegate('a', 'tap');
			});
		}
	});

	$('#parkDetailsPage').on('pagebeforeshow', function(event) {
		var parkDetailsHTML;
		parkDetailsHTML = Mustache.to_html(parkDetailsTemplate, currentParkData);
		$('#parkDetails').html(parkDetailsHTML);
	});

	function getParkData(theID){
		var theParkInfo;
		for (var i = 0; i < npsdata.parks.length; i++){
			if (npsdata.parks[i].id == theID ) {
				theParkInfo = npsdata.parks[i];
				break;
			}
		}
		return theParkInfo;
	}
});
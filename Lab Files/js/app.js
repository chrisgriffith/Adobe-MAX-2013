var isConnected = true;

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is loaded and it is now safe to make calls Cordova methods
function onDeviceReady() {
	checkConnection();
	
	document.addEventListener("online", onOnline, false);
	document.addEventListener("offline", onOffline, false);
}

function checkConnection() {
	var networkState = navigator.connection.type;
	if (networkState == "none" ) {
		isConnected = false;
	}
}

function onOnline(event){
	isConnected = true;
}

function onOffline(event){
	isConnected = false;
}

$(document).ready(function() {
	var parkID = 0;
	var currentParkData;

	$('#parkNamePage').on('pagecreate', function(event) {
		var listHTML;
		
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
				currentParkData = getParkData(parkID);
		
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
		currentParkData.isConnected = isConnected;
		
		parkDetailsHTML = Mustache.to_html(parkDetailsTemplate, currentParkData, mapPartial);
		$('#parkDetails').html(parkDetailsHTML);
		$('parkMenu').listview('refresh');		
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
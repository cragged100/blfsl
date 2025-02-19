;(function($){
	"use strict";

	$(document).ready(function() {

		/*
		Find the Latitude and Longitude of your address:
			- http://itouchmap.com/latlong.html
			- http://universimmedia.pagesperso-orange.fr/geo/loc.htm
			- http://www.findlatitudeandlongitude.com/find-address-from-latitude-and-longitude/
		
		Find settings explained:
			- https://github.com/marioestrada/jQuery-gMap

		*/
			
		// Map Markers
		var mapMarkers = [{
			address: "Tower 42, 25 Old Broad St, Cornhill, London",
			latitude: 51.515369,
			longitude: -0.0864702,
			icon: {
				image: "images/map-marker.png",
				iconsize: [32, 39], // w, h
				iconanchor: [13,39] // x, y
			},
			html: '<div style="width: 300px; padding: 15px;"><h3 style="margin-bottom: 15px;">Blaustein Global Logistics Security</span></h3><p class="nobottommargin"><span style="line-height:1.4;">Mineral Storage <span class="fw-semibold"> and freight</span> security and logistics company</span></p></div>',
		},{
			address: "18-77 Madison St, Flushing, NY 11385",
			latitude: 51.515369,
			longitude: -0.0864702,
			icon: {
				image: "images/map-marker.png",
				iconsize: [32, 39], // w, h
				iconanchor: [13, 39] // x, y
			},
			html: '<div style="width: 300px; padding: 15px;"><h3 style="margin-bottom: 15px;">Blaustein Global Logistics Security</span></h3><p class="nobottommargin"><span style="line-height:1.4;">Mineral Storage <span class="fw-semibold"> and freight</span> security and logistics company</span></p></div>',
		}];
		
		// Map Color Scheme - more styles here http://snazzymaps.com/
		var mapStyles = [
		    {
		        "featureType": "landscape",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "transit",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "poi",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "water",
		        "elementType": "labels",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.icon",
		        "stylers": [
		            {
		                "visibility": "off"
		            }
		        ]
		    },
		    {
		        "stylers": [
		            {
		                "hue": "#00aaff"
		            },
		            {
		                "saturation": -100
		            },
		            {
		                "gamma": 2.15
		            },
		            {
		                "lightness": 12
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "labels.text.fill",
		        "stylers": [
		            {
		                "visibility": "on"
		            },
		            {
		                "lightness": 24
		            }
		        ]
		    },
		    {
		        "featureType": "road",
		        "elementType": "geometry",
		        "stylers": [
		            {
		                "lightness": 57
		            }
		        ]
		    }
		];
		
		// Map Initial Location
		var initLatitude = 51.515369;
		var initLongitude = -0.0864702;

		// Map Extended Settings
		var map = jQuery(".th-google_map").gMap({
			controls: {
				panControl: true,
				zoomControl: true,
				zoomControlOptions: {
					position: google.maps.ControlPosition.RIGHT_CENTER
				},
				mapTypeControl: true,
				scaleControl: true,
				streetViewControl: true,
				streetViewControlOptions: {
					position: google.maps.ControlPosition.RIGHT_CENTER
				},
				overviewMapControl: true
			},
			scrollwheel: false,
			markers: mapMarkers,
			latitude: initLatitude,
			longitude: initLongitude,
			zoom: 14,
			style: mapStyles,
			draggable: Modernizr.touch ? false : true
		});
	});// end of document ready

})(jQuery);



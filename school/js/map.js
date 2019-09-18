function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {
        lat: 50.507708, 
        lng: 30.336616
      },
      styles: [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8ec3b9"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1a3646"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#64779e"
        }
      ]
    },
    {
      "featureType": "administrative.province",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#4b6878"
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#334e87"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6f9ba5"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3C7680"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#304a7d"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2c6675"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#255763"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#b0d5ce"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#023e58"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#98a5be"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1d2c4d"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#283d6a"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3a4762"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#0e1626"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#4e6d70"
        }
      ]
    }
  ],
      disableDefaultUI: true,
    });
  
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer({
      suppressInfoWindows: true,
      suppressMarkers: true
    });
  
  
    var response = {
      "abcd": {
        "points": [
          [50.464930, 30.354597, "Академмістечко"],
          [50.464930, 30.354249, "Академмістечко"],
          [50.537581, 30.265991, "Школа"],
        ]
      },
      "ret-abcd": {
        "points": [
          [50.510069, 30.419823, "Виноградар"],
          [50.537581, 30.265991, "Школа"],
        ]
      }
    };
  
    var timeout = 100;
    var m = 0;
    var cnt = 0;
    var markers = [];
    var combinedResults;
    var directionsResultsReturned = 0;
    var linecolors = ['#FFFFFF', '#00CCB5'];
    var colorIdx = 0;
    var dd = [];
  
    for (key in response) {
      if (response[key].points.length > 0) {
        var blocks = [];
        var k = 0;
        for (var i = 0; i < response[key].points.length; i++) {
          if (i != 0 && i % 10 == 0) {
            k++;
          }
          //console.log(k);
          if (typeof blocks[k] == 'undefined') {
            blocks[k] = [];
          }
  
          blocks[k].push(response[key].points[i]);
        }
  
        ds = new google.maps.DirectionsService;
  
        for (i = 0; i < blocks.length; i++) {
  
          waypts = [];
          markers.push([blocks[i][0][0], blocks[i][0][1], blocks[i][0][2]]);
          for (var j = 1; j < blocks[i].length - 1; j++) {
            waypts.push({
              location: blocks[i][j][0] + ',' + blocks[i][j][1],
              stopover: true
            });
            //var myLatlng = new google.maps.LatLng(blocks[i][j][0],blocks[i][j][1]);
            markers.push([blocks[i][j][0], blocks[i][j][1], blocks[i][j][2]]);
  
          }
          markers.push([blocks[i][blocks[i].length - 1][0], blocks[i][blocks[i].length - 1][1], blocks[i][blocks[i].length - 1][2]]);
          //data.start[0]+','+data.start[1],
          //ds[m].route({   
  
          ds.route({
              'origin': blocks[i][0][0] + ',' + blocks[i][0][1],
              'destination': blocks[i][blocks[i].length - 1][0] + ',' + blocks[i][blocks[i].length - 1][1],
              'waypoints': waypts,
              'travelMode': 'DRIVING'
            },
            function(directions, status) {
              //console.log(dd[m]);
              dd.push(new google.maps.DirectionsRenderer({
                suppressInfoWindows: true,
                suppressMarkers: true,
                map: map,
                polylineOptions: {
                  strokeColor: linecolors[colorIdx++ % 3]
                },
              }));
  
              if (status == google.maps.DirectionsStatus.OK) {
                dd[dd.length - 1].setDirections(directions);
              }
            }
          );
  
        }
      }
  
      for (h = 0; h < markers.length; h++) {
        createMapMarker(map, new google.maps.LatLng(markers[h][0], markers[h][1]), markers[h][2], "", "");
      }
      cnt++;
  
    }
  }
  
  function createMapMarker(map, latlng, label, html, sign) {
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: label,
      icon: "https://svgur.com/i/F0K.svg",
      
    });
  
    marker.myname = label;
  
    return marker;
  }
  google.maps.event.addDomListener(window, "load", initMap);
  
import React from 'react';
import FileUpload from './../../components/FileUpload/FileUpload';
import EmailInput from './../../components/EmailInput/EmailInput';
import KeyInput from './../../components/KeyInput/KeyInput';
import LocationInput from './../../components/HandleLocation/LocationInput';
import SubmitButton from './../../components/SubmitButton/SubmitButton';
import './Encrypt.css';

const Encrypt = () => {
  var map = null;
  window.onload = getMyLocation;
  
  function getMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
      displayLocation,
      displayError,
      {enableHighAccuracy: true, timeout:9000});
    }
    else {
      alert("Geolocation not supported");
    }
  }
  
  function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var div = document.getElementById("location");
    div.innerHTML = "You are at Latitude: " + latitude + ", Longitude: " + longitude;
    div.innerHTML += " (with " + position.coords.accuracy + " meters accuracy)";
    if (map == null) {
      showMap(position.coords);
    }
    
    function showMap(coords) {
      var googleLatAndLong = new google.maps.LatLng(coords.latitude,
      coords.longitude);
      var mapOptions = {
      zoom: 10,
      center: googleLatAndLong,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);
    var title = "Your Location";
    var content = "You are here: " + coords.latitude + ", " + coords.longitude;
    addMarker(map, googleLatAndLong, title, content);
  }
    
  function addMarker(map, latlong, title, content) {
    position: latlong,
    map: map,
    title: title,
    clickable: true
    };
    
    var marker = new google.maps.Marker(markerOptions);
    var infoWindowOptions = {
      content: content,
      position: latlong
      };
    var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map);  
    });
  }
  
  function displayError(error) {
    var errorTypes = {
      0: "Unknown error",
      1: "Permission denied",
      2: "Position is not available",
      3: "Request timeout"
    };
    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
      errorMessage = errorMessage + " " + error.message;
    }
    var div = document.getElementById("location");
    div.innerHTML = errorMessage;
  }
var markerOptions = {
  return (
    <div className="container" >
      <div className="input-field">
        <div className="otherButton">
            <FileUpload />
        </div>
      </div>

      <div className="input-field">
        
        <EmailInput />
      </div>

      <div className="input-field">
        <KeyInput />
      </div>

      <div className="input-field">
        <LocationInput />
      </div>

      <div className="input-field">
        <div className='otherButton'>
            <SubmitButton />
        </div>
      </div>
    </div>
  );
};

export default Encrypt;


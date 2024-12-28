import React, { useState } from 'react';
import { verifyLocation } from './../../components/HandleLocation/LocationVerifier';

const Decrypt = () => {
  const [primaryKey, setPrimaryKey] = useState('');

  const handleVerifyLocation = async () => {
    var cancel;
var mapdisp;
var plotPoints;
var fileOption;
window.onload = init;

function init(){
	cancel = document.getElementById("cancelButton");
	cancel.onclick = cancelFunction;

	mapdisp = document.getElementById("showMap");
	mapdisp.onclick = mapDispFunction;
	
	plotPoints = document.getElementById("plotPoints");
	plotPoints.onclick = accessPoints;

	fileOption = document.getElementById("action");
	fileOption.onclick = encrypt;
}

function cancelFunction(){
	window.open("menu.html","_self");
}

function displayLocation() {
	geocoder = new google.maps.Geocoder();
	destination = document.getElementById("address").value; 
	geocoder.geocode({'address':destination},function(results,status){
		if (status == google.maps.GeocoderStatus.OK){
			map.setCenter(results[0].geometry.location);
			var latitude = results[0].geometry.location.lat();
			var longitude = results[0].geometry.location.lng();
		}else{
				alert("latitude, longitude not found");
		}
	});
	var mapOptions = {
		zoom: 15,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	mapDiv = document.getElementById("map");
	map = new google.maps.Map(mapDiv, mapOptions);
	files =	document.getElementById("fileinput").files;
			file = files[0];	
			var reader = new FileReader();
			reader.readAsText(file);
			reader.onload = function(e){				
				fileContents = e.target.result;
			}							
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
		div = document.getElementById("location");
		div.innerHTML = errorMessage;
}
function encrypt(){	
    var JsonFormatter = {
        stringify: function (cipherParams) {
            var jsonObj = {
                ct: cipherParams.ciphertext.toString(CryptoJS.enc.Base64)
            };
            if (cipherParams.iv) {
                jsonObj.iv = cipherParams.iv.toString();
            }
            if (cipherParams.salt) {
                jsonObj.s = cipherParams.salt.toString();
            }
            return JSON.stringify(jsonObj);
        },

        parse: function (jsonStr) {
            var jsonObj = JSON.parse(jsonStr);
            var cipherParams = CryptoJS.lib.CipherParams.create({
                ciphertext: CryptoJS.enc.Base64.parse(jsonObj.ct)
            });
            if (jsonObj.iv) {
                cipherParams.iv = CryptoJS.enc.Hex.parse(jsonObj.iv)
            }
            if (jsonObj.s) {
                cipherParams.salt = CryptoJS.enc.Hex.parse(jsonObj.s)
            }
            return cipherParams;
        }
    };
	keyFeed = document.getElementById("keyFeed").value;
	if (fileContents !== "" && keyFeed !== ""){
		encryptedContents = CryptoJS.AES.encrypt(fileContents,keyFeed,{format:JsonFormatter});	
		document.getElementById("encryptedContents").value = encryptedContents;
		document.getElementById("accessPoints").value = latLongArray;
		originalFile = CryptoJS.AES.decrypt(encryptedContents,keyFeed,{format:JsonFormatter});
		alert("Your File-Key pair has been encrypted and sent successfully !");
	}
}

  };

  return (
    <div className='container'>
      <input
        type="text"
        placeholder="Enter file ID"
        value={primaryKey}
        onChange={(e) => setPrimaryKey(e.target.value)}
      />
      <button onClick={handleVerifyLocation}>Verify Location</button>
    </div>
  );
};

export default Decrypt;

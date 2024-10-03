function initMap() {
    const myLatLng = { lat: 48.95834371902252, lng: 2.547081575412781 }; 
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: myLatLng,
    });
  
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Hello World!",
    });
  }
  
  window.initMap = initMap;
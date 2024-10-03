function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: { lat: 48.95930033308523, lng: 2.5477890651742516 }, // Centré sur le premier point
  });

  setMarkers(map);
}

// Les données pour les marqueurs
const stadeMumu = [
  ["point n1", 48.95930033308523, 2.5477890651742516, 4],
  ["point n2", 48.95901659236071, 2.544364368005043, 5],
  ["point n3", 48.96083250510581, 2.5428194730675138, 3],
  ["point n4", 48.96334006261106, 2.5503223316267305, 2],
  ["point n5", 48.96146800531762, 2.553135524155863, 1],
  ["point n6", 48.95997156116078, 2.548567662388221, 1],
];

function setMarkers(map) {
  const image = {
      url: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
      size: new google.maps.Size(20, 32),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 32),
  };

  const shape = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: "poly",
  };

  for (let i = 0; i < stadeMumu.length; i++) {
      const point = stadeMumu[i];

      new google.maps.Marker({
          position: { lat: point[1], lng: point[2] },
          map,
          icon: image,
          shape: shape,
          title: point[0],
          zIndex: point[3],
      });
  }
}

window.initMap = initMap;

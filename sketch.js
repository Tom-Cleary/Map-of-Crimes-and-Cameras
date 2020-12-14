// https://mappa.js.org/docs/getting-started.html


// Other possible interesting videos:
// Subscribers data: https://www.youtube.com/watch?v=Ae73YY_GAU8&feature=youtu.be
// Earthquake Data: https://www.youtube.com/watch?v=ZiYdOwOrGyc&t=1083s

// For integrating images: https://www.youtube.com/watch?v=FVYGyaxG4To


let myMap;
let canvas;
const mappa = new Mappa('Leaflet');

let options = {
  lat: 42.90888574594455,
  lng: -78.86234533825683,
  zoom: 12.5,
  style: "https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png"
}


function preload() {
  // With this code, you will need to convert your GPX file to CSV
  // Google search online converters and select one to test
  homicides = loadTable('homicide.csv', 'csv', 'header');
  sexualAssaults = loadTable('sexualAssault.csv', 'csv', 'header');
  assaults = loadTable('assault.csv', 'csv', 'header');
  entries = loadTable('breakingEntering.csv', 'csv', 'header');
  vehicles = loadTable('gta.csv', 'csv', 'header');
  // thefts = loadTable('theft.csv', 'csv', 'header');
  cameras = loadTable('cameras.csv', 'csv', 'header');
}


function setup() {
  canvas = createCanvas(800, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);
  myMap.onChange(clear);

  // myMap.onChange(drawPath(firstPath));
  // myMap.onChange(drawPath(secondPath));
  myMap.onChange(drawH.bind(null, homicides));
  myMap.onChange(drawSA.bind(null, sexualAssaults));
  myMap.onChange(drawA.bind(null, assaults));
  myMap.onChange(drawBE.bind(null, entries));
  myMap.onChange(drawGTA.bind(null, vehicles));
  // myMap.onChange(drawT.bind(null, thefts));
  myMap.onChange(drawCam.bind(null, cameras));
}


function draw() {
}

function drawCam(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'latitude'));
    const longitude = Number(path.getString(i, 'longitude'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(242, 78, 198);
      rect(pos.x, pos.y, 7, 22)

      stroke('white');
      strokeWeight(.75);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

// function drawT(path) {
//   for (let i = 0; i < path.getRowCount() - 1; i++) {
//     const latitude = Number(path.getString(i, 'latitude'));
//     const longitude = Number(path.getString(i, 'longitude'));
//
//     if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
//       const pos = myMap.latLngToPixel(latitude, longitude);
//       noStroke();
//       fill(0, 0, 0, 10);
//       ellipse(pos.x, pos.y, 5, 5)
//
//       stroke('white');
//       strokeWeight(.75);
//       line(pos.x, pos.y, pos.x, pos.y);
//     }
//   }
// }

function drawGTA(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'latitude'));
    const longitude = Number(path.getString(i, 'longitude'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(255, 243, 71, 10);
      ellipse(pos.x, pos.y, 5, 5)

      stroke('cyan');
      strokeWeight(.75);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

function drawBE(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'latitude'));
    const longitude = Number(path.getString(i, 'longitude'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(212, 201, 59, 10);
      ellipse(pos.x, pos.y, 5, 5)

      stroke(212, 201, 59, 10);
      strokeWeight(.75);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

function drawA(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'latitude'));
    const longitude = Number(path.getString(i, 'longitude'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(248, 135, 50, 10);
      ellipse(pos.x, pos.y, 10, 10)

      stroke('orange');
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

function drawSA(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'latitude'));
    const longitude = Number(path.getString(i, 'longitude'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(237, 47, 57, 50);
      ellipse(pos.x, pos.y, 15, 15)

      stroke('red');
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

function drawH(path) {
  for (let i = 0; i < path.getRowCount() - 1; i++) {
    const latitude = Number(path.getString(i, 'latitude'));
    const longitude = Number(path.getString(i, 'longitude'));

    if (myMap.map.getBounds().contains({lat: latitude, lng: longitude})) {
      const pos = myMap.latLngToPixel(latitude, longitude);
      noStroke();
      fill(145, 29, 35, 100);
      ellipse(pos.x, pos.y, 25, 25)

      stroke('red');
      strokeWeight(1);
      line(pos.x, pos.y, pos.x, pos.y);
    }
  }
}

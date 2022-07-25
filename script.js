// Initialize all

var all = L.layerGroup();

// Initialize Country
var france = L.layerGroup();
var belgique = L.layerGroup();

// Initialize layer for club
var clubs = L.layerGroup();

// Initialize layer for shop
var shops = L.layerGroup();

("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

var osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> | contributors &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a> | &copy; <a href="" target="_blank">Barjozoku</a>',
  // Attribution is obligatory as per copyright!
});

// Choice options for map
var map = L.map("map", {
  tap: false,
  center: [47.401012, 4.213326],
  zoom: 5,
  layers: [osm, all],
});

// Stop horizontal scrolling on the map
map.setMaxBounds([
  [84.67351256610522, -174.0234375],
  [-58.995311187950925, 223.2421875],
]);

// Creates a clubIcon
var clubIcon = L.ExtraMarkers.icon({
  icon: "fa-car-burst",
  markerColor: "red",
  shape: "penta",
  prefix: "fa-solid",
});

// Create a shopIcon
var shopIcon = L.ExtraMarkers.icon({
  icon: "fa-shop",
  markerColor: "black",
  shape: "penta",
  prefix: "fa-solid",
});

let points = [
  // Clubs

  // Oktanes works
  [
    45.501586,
    5.147257,
    "<b>Oktane Works</b></br>38440 Saint-Jean-de-Bournay France",
    clubs,
    france,
    clubIcon,
  ],

  // Charade Speed
  [
    46.11517,
    2.688296,
    "<b>CSS Charade Speed Stars</b></br>63330 Pionsat France",
    clubs,
    france,
    clubIcon,
  ],

  // Touge club
  [
    43.5525,
    5.195556,
    "<b>Touge Club</b></br>13580 La-Fare-les-Oliviers France",
    clubs,
    france,
    clubIcon,
  ],

  // Pantouflard
  [
    45.450833,
    5.885556,
    "<b>Pantouflard</b></br>73670 Entremont-le-Vieux France",
    clubs,
    france,
    clubIcon,
  ],

  // Great East Crew
  [
    49.0572,
    4.5822,
    "<b>Great East Crew</b></br>51600 Saint-Remy-sur-Bussy France",
    clubs,
    france,
    clubIcon,
  ],

  // Purples Hearts
  [
    45.7768,
    4.9185,
    "<b>Purple Hearts</b></br>69120 Vaulx-en-Velin France",
    clubs,
    france,
    clubIcon,
  ],

  // Nightsteet Crew
  [
    50.701667,
    3.214167,
    "<b>NightStreet Crew</b></br>59150 Wattrelos France",
    clubs,
    france,
    clubIcon,
  ],

  // Rusty Runners
  [
    46.485,
    -1.110278,
    "<b>Rusty Runners</b></br>85400 Sainte-Gemme-la-Plaine France",
    clubs,
    france,
    clubIcon,
  ],

  // Critical Style
  [
    43.029167,
    2.978333,
    "<b>Critical Style</b></br>11130 Sigean France",
    clubs,
    france,
    clubIcon,
  ],

  // Burgundy EastSide Crew
  [
    47.6233,
    3.8631,
    "<b>Burgundy EastSide Crew</b></br>89440 Joux-la-Ville France",
    clubs,
    france,
    clubIcon,
  ],

  // Paname Mafia Squad
  [
    48.528867,
    2.015629,
    "<b>Paname Mafia Squad</b></br>91410 Dourdan France",
    clubs,
    france,
    clubIcon,
  ],

  // Nightkids Zoku
  [
    48.5197,
    4.8222,
    "<b>Nightkids Zoku</b></br>52220 Frampas France",
    clubs,
    france,
    clubIcon,
  ],

  // Idiot Crew
  [
    50.3,
    4.867,
    "<b>Idiot Crew</b></br>5537 Anhée Belgique",
    clubs,
    belgique,
    clubIcon,
  ],

  // Art R413-17
  [
    44.0646,
    3.9853,
    "<b>Art R413-17</b></br>30140 Anduze France",
    clubs,
    france,
    clubIcon,
  ],

  // WallifornieLow
  [
    50.5,
    4.217,
    "<b>WallifornieLow</b></br>7170 Bois-d'Haine Belgique",
    clubs,
    belgique,
    clubIcon,
  ],

  // Watata
  [
    44.423333,
    4.814444,
    "<b>Watata</b></br>26230 Valaurie France",
    clubs,
    france,
    clubIcon,
  ],

  // NWK
  [
    44.855278,
    2.2325,
    "<b>NWK</b></br>15290 Le Rouget France",
    clubs,
    france,
    clubIcon,
  ],

  // Lyon kanjo club
  [
    45.5253,
    4.8758,
    "<b>Lyon Kanjo Club</b></br>38200 Vienne France",
    clubs,
    france,
    clubIcon,
  ],

  // Shops

  // Motorsport Héritage
  [
    46.141898,
    -1.006135,
    "<b>Motorsport Héritage</b></br>4 Rue des Éoliennes,</br>17220 Saint Médard d'Aunis,</br>France",
    shops,
    france,
    shopIcon,
  ],

  // Driftshop
  [
    47.835359,
    7.223119,
    "<b>Drifshop</b></br>5 Rue des Mines,</br>68500 Berrwiller,</br>France",
    shops,
    france,
    shopIcon,
  ],

  // RWB France
  [
    49.275239,
    4.001832,
    "<b>RWB France</b></br>3 Rue Gutenberg,</br>51100 Reims,</br>France",
    shops,
    france,
    shopIcon,
  ],

  // Kennol Performance Oil Belgium
  [
    50.815581,
    3.210518,
    "<b>Kennol Performance Oil Belgium</b></br>Vlamingstraat 4,</br>8560 Wevelgem,</br>Belgique",
    shops,
    belgique,
    shopIcon,
  ],

  // Radikal BugZ
  [
    50.47605,
    3.903746,
    "<b>Radikal BugZ</b></br>4 route de Wallonie,</br>7011 Ghlin,</br>Belgique",
    shops,
    belgique,
    shopIcon,
  ],
];

for (let i = 0; i < points.length; i++) {
  const [lat, lng, popupText, category, country, categoryIcon] = points[i];

  marker = new L.marker([lat, lng], { icon: categoryIcon })
    .bindPopup(popupText)
    .addTo(category)
    .addTo(country)
    .addTo(all)
    .addTo(map);

  console.log(categoryIcon);
}

// Options for zoom

map.options.minZoom = 5;
map.options.maxZoom = 9;

// Overlays options

var baseLayers = {
  Mapzoku: osm,
};

var overlays = {
  Tous: all,
};

// Add layer control

var layerControl = L.control.layers(baseLayers, overlays).addTo(map);

// Add different overlay layers after creation

layerControl.addOverlay(clubs, "Club");
layerControl.addOverlay(shops, "Shop");
layerControl.addOverlay(france, "France");
layerControl.addOverlay(belgique, "Belgique");

// Geolocalisation

var localisation = L.control.locate({
  strings: {
    title: "Putain, mais on est où là ??",
    popup: "Je savais où on était.",
  },
});

map.addControl(
  L.control.locate({
    locateOptions: {
      enableHighAccuracy: true,
    },
  })
);

// Joke

// create custom button
const customControl = L.Control.extend({
  // button position
  options: {
    position: "topright",
  },

  // method
  onAdd: function (map) {
    // create button
    const btn = L.DomUtil.create("button");
    btn.title = "pooooooooooooop rotation";
    btn.textContent = "🖕";
    btn.className = "pooooo";
    btn.setAttribute(
      "style",
      "background-color: transparent; width: 30px; height: 30px; border: none; display: flex; cursor: pointer; justify-content: center; font-size: 2rem;"
    );

    // actions on mouseover
    btn.onmouseover = function () {
      this.style.transform = "scale(1.3)";
    };

    // actions on mouseout
    btn.onmouseout = function () {
      this.style.transform = "scale(1)";
    };

    // action when clik on button
    btn.onclick = function () {
      // add class rotate
      document.body.classList.add("rotate");
      // remove class after 4s
      setTimeout(() => {
        document.body.classList.remove("rotate");
      }, 4000);
    };

    return btn;
  },
});

// adding new button to map controll
map.addControl(new customControl());

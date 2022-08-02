// Initialize all

var all = L.layerGroup();

// Initialize Country
var france = L.layerGroup();
var belgique = L.layerGroup();

// Initialize layer for club
var clubs = L.layerGroup();

// Initialize layer for shop
var shops = L.layerGroup();

// Initialize layer for spot
var spots = L.layerGroup();

// Color

var green = "#00592b";
var fillgreen = "#009649";
var black = "#030303";
var fillblack = "#9fa1a0";
var red = "#750101";
var fillred = "#db0404";

// ("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");

var osm = L.tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> | contributors &copy; <a href="https://carto.com/attributions" target="_blank">CARTO</a> | &copy; <a href="" target="_blank">Barjozoku</a>',
  // Attribution is obligatory as per copyright!
});

// var osm = L.tileLayer('https://{s}.tile.thunderforest.com/transport-dark/{z}/{x}/{y}.png?apikey={apikey}', {
// 	attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
// 	apikey: '19ec21d48f654ee296ed6afda1da62ba',
// });

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

// Create a shopIcon
var spotIcon = L.ExtraMarkers.icon({
  icon: "fa-camera",
  markerColor: "green",
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
    red,
    fillred,
  ],

  // Charade Speed
  [
    46.11517,
    2.688296,
    "<b>CSS Charade Speed Stars</b></br>63330 Pionsat France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Touge club
  [
    43.5525,
    5.195556,
    "<b>Touge Club</b></br>13580 La-Fare-les-Oliviers France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Pantouflard
  [
    45.450833,
    5.885556,
    "<b>Pantouflard</b></br>73670 Entremont-le-Vieux France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Great East Crew
  [
    49.0572,
    4.5822,
    "<b>Great East Crew</b></br>51600 Saint-Remy-sur-Bussy France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Purples Hearts
  [
    45.7768,
    4.9185,
    "<b>Purple Hearts</b></br>69120 Vaulx-en-Velin France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Nightsteet Crew
  [
    50.701667,
    3.214167,
    "<b>NightStreet Crew</b></br>59150 Wattrelos France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Rusty Runners
  [
    46.485,
    -1.110278,
    "<b>Rusty Runners</b></br>85400 Sainte-Gemme-la-Plaine France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Critical Style
  [
    43.029167,
    2.978333,
    "<b>Critical Style</b></br>11130 Sigean France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Burgundy EastSide Crew
  [
    47.6233,
    3.8631,
    "<b>Burgundy EastSide Crew</b></br>89440 Joux-la-Ville France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Paname Mafia Squad
  [
    48.528867,
    2.015629,
    "<b>Paname Mafia Squad</b></br>91410 Dourdan France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Nightkids Zoku
  [
    48.5197,
    4.8222,
    "<b>Nightkids Zoku</b></br>52220 Frampas France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Idiot Crew
  [
    50.3,
    4.867,
    "<b>Idiot Crew</b></br>5537 Anhée Belgique",
    clubs,
    belgique,
    clubIcon,
    red,
    fillred,
  ],

  // Art R413-17
  [
    44.0646,
    3.9853,
    "<b>Art R413-17</b></br>30140 Anduze France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // WallifornieLow
  [
    50.5,
    4.217,
    "<b>WallifornieLow</b></br>7170 Bois-d'Haine Belgique",
    clubs,
    belgique,
    clubIcon,
    red,
    fillred,
  ],

  // Watata
  [
    44.423333,
    4.814444,
    "<b>Watata</b></br>26230 Valaurie France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // NWK
  [
    44.855278,
    2.2325,
    "<b>NWK</b></br>15290 Le Rouget France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // Lyon kanjo club
  [
    45.5253,
    4.8758,
    "<b>Lyon Kanjo Club</b></br>38200 Vienne France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
  ],

  // RICERSQUAD
  [
    47.808056,
    7.337500,
    "<b>Ricersquad</b></br>68270 Wittenheim France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
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
    black,
    fillblack,
  ],

  // Driftshop
  [
    47.835359,
    7.223119,
    "<b>Drifshop</b></br>5 Rue des Mines,</br>68500 Berrwiller,</br>France",
    shops,
    france,
    shopIcon,
    black,
    fillblack,
  ],

  // RWB France
  [
    49.275239,
    4.001832,
    "<b>RWB France</b></br>3 Rue Gutenberg,</br>51100 Reims,</br>France",
    shops,
    france,
    shopIcon,
    black,
    fillblack,
  ],

  // Kennol Performance Oil Belgium
  [
    50.815581,
    3.210518,
    "<b>Kennol Performance Oil Belgium</b></br>Vlamingstraat 4,</br>8560 Wevelgem,</br>Belgique",
    shops,
    belgique,
    shopIcon,
    black,
    fillblack,
  ],

  // Radikal BugZ
  [
    50.47605,
    3.903746,
    "<b>Radikal BugZ</b></br>4 route de Wallonie,</br>7011 Ghlin,</br>Belgique",
    shops,
    belgique,
    shopIcon,
    black,
    fillblack,
  ],

    // HL Chaudronnerie
    [
      44.769109,
      -0.435581,
      "<b>HL Chaudronnerie</b></br>12 ZA le Limancet,</br>33880 Saint-Caprais-de-Bordeaux,</br>France",
      shops,
      france,
      shopIcon,
      black,
      fillblack,
    ],

    // Luca's Motorcycle service
    [
      45.850830,
      2.892500,
      "<b>Luca's Motorcycle service</b></br>18 rue du Clozeloux,</br>63230 Saint-Ours-les-Roches,</br>France",
      shops,
      france,
      shopIcon,
      black,
      fillblack,
    ],


  // Spot

  // Spot 1
  [
    50.450306,
    3.937806,
    '<img class="img-popup" src="images/spot/spot1.jpg"/></br><b><a class="link-popup" href="https://www.google.be/maps/place/50%C2%B027\'01.1%22N+3%C2%B056\'16.1%22E/@50.4503151,3.936359,504m/data=!3m1!1e3!4m14!1m7!3m6!1s0x47c24558a6578cfb:0x40099ab2f4d6c90!2sMons!3b1!8m2!3d50.4546634!4d3.9523135!3m5!1s0x0:0xa241d0dfb1ca5e72!7e2!8m2!3d50.4503141!4d3.9378128?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Francois Bury</b></p>',
    spots,
    belgique,
    spotIcon,
    green,
    fillgreen,
  ],

  // Spot 2
  [
    50.455139,
    3.929278,
    '<img class="img-popup" src="images/spot/spot2.jpg"/></br><b><a class="link-popup" href="https://www.google.be/maps/place/50%C2%B027\'18.1%22N+3%C2%B055\'46.3%22E/@50.4550193,3.9250433,17z/data=!3m1!4b1!4m13!1m6!3m5!1s0x47c25072b41720e1:0xa231b4b619f4f6d1!2sIKEA+Mons!8m2!3d50.4561636!4d3.9297965!3m5!1s0x0:0xe96fd1e57d82e584!7e2!8m2!3d50.455016!4d3.9295283?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Francois Bury</b></p>',
    spots,
    belgique,
    spotIcon,
    green,
    fillgreen,
  ],

  // Spot 3
  [
    50.451222,
    3.915333,
    '<img class="img-popup" src="images/spot/spot3.jpg"/></br><b><a class="link-popup" href="https://www.google.be/maps/place/50%C2%B027\'04.4%22N+3%C2%B054\'55.2%22E/@50.4512222,3.9138847,548m/data=!3m2!1e3!4b1!4m13!1m6!3m5!1s0x47c25072b41720e1:0xa231b4b619f4f6d1!2sIKEA+Mons!8m2!3d50.4561636!4d3.9297965!3m5!1s0x0:0xc4634a918d65a5ff!7e2!8m2!3d50.4512297!4d3.9153389?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Francois Bury</b></p>',
    spots,
    belgique,
    spotIcon,
    green,
    fillgreen,
  ],

  // Spot 4
  [
    50.450213,
    3.937518,
    '<img class="img-popup" src="images/spot/spot4.jpg"/></br><b><a class="link-popup" href="https://www.google.be/maps/place/50%C2%B027\'00.8%22N+3%C2%B056\'15.1%22E/@50.450213,3.9353293,548m/data=!3m2!1e3!4b1!4m14!1m7!3m6!1s0x47c24558a6578cfb:0x40099ab2f4d6c90!2sMons!3b1!8m2!3d50.4546634!4d3.9523135!3m5!1s0x0:0x9c5bda894c67e8ce!7e2!8m2!3d50.4502126!4d3.9375177?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Francois Bury</b></p>',
    spots,
    belgique,
    spotIcon,
    green,
    fillgreen,
  ],
  // Spot GARE
  [
    50.457750,
    3.945111,
    '<img class="img-popup" src="images/spot/GARE.jpg"/></br><b><a class="link-popup" https://www.google.be/maps/place/50%C2%B027\'27.9%22N+3%C2%B056\'42.4%22E/@50.4577637,3.9428757,363m/data=!3m1!1e3!4m14!1m7!3m6!1s0x47c24558a6578cfb:0x40099ab2f4d6c90!2sMons!3b1!8m2!3d50.4546634!4d3.9523135!3m5!1s0x0:0x6b8eeda583a3979f!7e2!8m2!3d50.4577619!4d3.9451181?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Francois Bury</b></p>',
    spots,
    belgique,
    spotIcon,
    green,
    fillgreen,
  ],

  
];

for (let i = 0; i < points.length; i++) {
  const [
    lat,
    lng,
    popupText,
    category,
    country,
    categoryIcon,
    color,
    fillColor,
  ] = points[i];

  marker = new L.marker([lat, lng], { icon: categoryIcon })
    .bindPopup(popupText)
    .addTo(category)
    .addTo(country)
    .addTo(all)
    .addTo(map);

  circle = new L.circle([lat, lng], {
    color: color,
    fillColor: fillColor,
    fillOpacity: 0.1,
    radius: 10000,
  })
    .addTo(category)
    .addTo(country)
    .addTo(all)
    .addTo(map);
}

// Options for zoom

map.options.minZoom = 5;
map.options.maxZoom = 16;

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
layerControl.addOverlay(spots, "Spot");
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

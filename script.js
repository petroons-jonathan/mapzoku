// Initialize all

var all = L.layerGroup();

// Initialize Country
var france = L.layerGroup();
var belgique = L.layerGroup();
var europe = L.layerGroup();
var asie = L.layerGroup();

// Initialize layer for club
var clubs = L.layerGroup();

// Initialize layer for shop
var shops = L.layerGroup();

// Initialize layer for spot
var spots = L.layerGroup();

// Initialize layer for spot
var crashs = L.layerGroup();

// Color

var green = "#00592b";
var fillgreen = "#009649";
var black = "#030303";
var fillblack = "#9fa1a0";
var red = "#750101";
var fillred = "#db0404";
var blue = "#1b5299";
var fillblue = "#54c6eb";

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
  // center: [47.401012, 4.213326],
  center: [47.401012, 13.213326],
  zoom: 3,
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

// Create a crashIcon
var crashIcon = L.ExtraMarkers.icon({
  icon: "fa-skull",
  markerColor: "blue",
  shape: "penta",
  prefix: "fa-solid",
});

let points = [
  // *****************************       *****************************
  // ***************************** Clubs *****************************
  // *****************************       *****************************

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
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
  ],

  // Panam Mafia Squad
  [
    48.528867,
    2.015629,
    "<b>Panam Mafia Squad</b></br>91410 Dourdan France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
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
    15000,
  ],

  // RICERSQUAD
  [
    47.808056,
    7.3375,
    "<b>Ricersquad</b></br>68270 Wittenheim France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // NR Performance
  [
    50.436171,
    3.920665,
    "<b>NR Performance</b></br>7033 Cuesmes Belgique",
    clubs,
    belgique,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // Old School Crew Drifting
  [
    46.159058,
    -1.151715,
    "<b>Old School Crew Drifting</b></br>17000 La Rochelle France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // RICERSQUAD Blitzheim
  [
    47.958333,
    7.388889,
    "<b>Ricersquad</b></br>68127 Biltzheim France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // RICERSQUAD Section Azzura
  [
    43.834167,
    5.783889,
    "<b>Ricersquad Section Azzura</b></br>04100 Manosque France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // RICERSQUAD Section Azuma
  [
    48.257222,
    3.729167,
    "<b>Ricersquad Section Azuma</b></br>10190 Villemaur-sur-Vanne France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // RICERSQUAD Section R.A.F.
  [
    45.7578,
    4.8322,
    "<b>Ricersquad Section R.A.F.</b></br>69000 Lyon France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // Suzuran Crou
  [
    50.483,
    3.6,
    "<b>Suzuran Crou</b></br>7603 Bon-Secours Belgique",
    clubs,
    belgique,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // Touge Fever Factory
  [
    46.219444,
    4.52,
    "<b>Touge Fever Factory</b></br>69860 Monsols France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // AligotNightTouge en Lozère
  [
    44.51944,
    3.50139,
    "<b>AligotNightTouge en Lozère</b></br>48000 Mende France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // Great Est Crew
  [
    49.040278,
    3.96,
    "<b>Great Est Crew</b></br>51200 Epernay France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // Auto Rasso Aveyron
  [
    44.350556,
    2.575,
    "<b>Auto Rasso Aveyron</b></br>12000 Rodez France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // Nightshift
  [
    45.75523,
    4.842237,
    "<b>Nightshift</b></br>69000 Lyon France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // Team Merguez 2019
  [
    43.891389,
    -0.499444,
    "<b>Team Merguez 2019</b></br>40000 Mont-de-Marsan France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // OTR eSport
  [
    49.563889,
    3.624444,
    "<b>OTR eSport</b></br>02000 laon France",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // Merguez Gang
  [
    46.466000,
    -0.806065,
    "<b>Merguez Gang</b></br>85200 Fontenay-le-Comte",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // Speed Yokai
  [
    45.739444,
    4.913888,
    "<b>Speed Yokai</b></br>69500 Bron",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // PROJECT N 
  [
    49.490000,
    0.571944,
    "<b>PROJECT N </b></br>76300 Port-Jérôme-sur-Seine",
    clubs,
    france,
    clubIcon,
    red,
    fillred,
    15000,
  ],

  // *****************************       *****************************
  // ***************************** Shops *****************************
  // *****************************       *****************************

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
    0,
  ],

  // Driftshop
  [
    47.835359,
    7.223119,
    "<b>Driftshop</b></br>5 Rue des Mines,</br>68500 Berrwiller,</br>France",
    shops,
    france,
    shopIcon,
    black,
    fillblack,
    0,
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
    0,
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
    0,
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
    0,
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
    0,
  ],

  // Luca's Motorcycle service
  [
    45.85083,
    2.8925,
    "<b>Luca's Motorcycle service</b></br>18 rue du Clozeloux,</br>63230 Saint-Ours-les-Roches,</br>France",
    shops,
    france,
    shopIcon,
    black,
    fillblack,
    0,
  ],

  // JM Autosport
  [
    43.543502,
    5.159877,
    "<b>JM Autosport</b></br>Chem. des Baïsses,</br>13680 Lançon-Provence,</br>France",
    shops,
    france,
    shopIcon,
    black,
    fillblack,
    0,
  ],

  // LM Racing
  [
    46.2327901,
    3.1565326,
    "<b>LM Racing</b></br>51 Rte de Gannat,</br>03140 Chantelle,</br>France",
    shops,
    france,
    shopIcon,
    black,
    fillblack,
    0,
  ],

  // Garage Honda Quagliozzi
  [
    46.2875133,
    4.8118545,
    "<b>Garage Honda Quagliozzi</b></br>497 Rue Lavoisier,</br>71000 Mâcon,</br>France",
    shops,
    france,
    shopIcon,
    black,
    fillblack,
    0,
  ],

  // Fighting Star
  [
    35.65824,
    139.8635702,
    "<b>ファイティングスター</br>Fighting Star</b></br>8 Chome-21-13 Nishikasai,</br>Edogawa City,</br>Tokyo 134-0088,</br>Japon",
    shops,
    asie,
    shopIcon,
    black,
    fillblack,
    0,
  ],


  // PROTUNING
  [
    56.965097,
    24.0751,
    "<b>Protuning</b></br>Tvaikoņu iela 5,</br>Kurzemes rajons, Rīga, LV-1007,</br>Lettonie",
    shops,
    europe,
    shopIcon,
    black,
    fillblack,
    0,
  ],

  // *****************************      *****************************
  // ***************************** Spot *****************************
  // *****************************      *****************************

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
    0,
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
    0,
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
    0,
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
    0,
  ],
  // Spot GARE
  [
    50.45775,
    3.945111,
    '<img class="img-popup" src="images/spot/GARE.jpg"/></br><b><a class="link-popup" href="https://www.google.be/maps/place/50%C2%B027\'27.9%22N+3%C2%B056\'42.4%22E/@50.4577637,3.9428757,363m/data=!3m1!1e3!4m14!1m7!3m6!1s0x47c24558a6578cfb:0x40099ab2f4d6c90!2sMons!3b1!8m2!3d50.4546634!4d3.9523135!3m5!1s0x0:0x6b8eeda583a3979f!7e2!8m2!3d50.4577619!4d3.9451181?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Francois Bury</b></p>',
    spots,
    belgique,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France 1 C63 AMG
  [
    46.691676,
    -1.428529,
    '<img class="img-popup" src="images/spot/amgc63.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/46%C2%B041\'30.0%22N+1%C2%B025\'42.7%22W/@46.6916667,-1.4307165,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x119e839d7a70a100!8m2!3d46.691676!4d-1.428529?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Stü_Bō</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France 1 Audi S5
  [
    46.691777,
    -1.429086,
    '<img class="img-popup" src="images/spot/audis5.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/46%C2%B041\'30.4%22N+1%C2%B025\'44.7%22W/@46.6917778,-1.431272,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x0:0x119e839d7a70a100!2zNDbCsDQxJzMwLjAiTiAxwrAyNSc0Mi43Ilc!3b1!8m2!3d46.691676!4d-1.428529!3m5!1s0x0:0xab0c29724ee11bfb!7e2!8m2!3d46.6917771!4d-1.4290857?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Stü_Bō</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France 1 350z
  [
    46.671895,
    -1.405765,
    '<img class="img-popup" src="images/spot/nissan.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/46%C2%B040\'18.8%22N+1%C2%B024\'20.8%22W/@46.671895,-1.4079537,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb0c9c20a13cf5cbb!8m2!3d46.671895!4d-1.405765?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Leclerc</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France 1 double bmw
  [
    46.5520521,
    -1.0078809,
    '<img class="img-popup" src="images/spot/doublebmw.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/46%C2%B033\'07.4%22N+1%C2%B000\'28.4%22W/@46.5520521,-1.0100696,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x5ab5b4a7d8b2db28!8m2!3d46.5520521!4d-1.0078809?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Thiré</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Clarensac
  [
    43.8365382,
    4.223136,
    '<img class="img-popup" src="images/spot/clarensac.jpg"/></br><b><a class="link-popup" href="https://www.google.fr/maps/place/Point+de+Vue+Clarensac/@43.8365382,4.223136,16z/data=!4m5!3m4!1s0x12b4257aa81e237f:0x992b483111a2d465!8m2!3d43.8366964!4d4.2230855" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Julien Rappin</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Saint-Nectaire
  [
    45.5924784,
    2.9605751,
    '<img class="img-popup" src="images/spot/saint-nectaire.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/63710+Saint-Nectaire,+France/@45.5924784,2.9605751,13z/data=!3m1!4b1!4m13!1m7!3m6!1s0x0:0xebae9b3e8d8e825e!2zNDXCsDM1JzUyLjAiTiAywrA1OSc0OS4yIkU!3b1!8m2!3d45.5977778!4d2.997!3m4!1s0x47f7086f79a8a891:0xc8ce16e1c11f712f!8m2!3d45.589082!4d2.992862" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>yoy_s13_drift</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Fresnaye
  [
    48.8974054,
    -0.1947861,
    '<img class="img-popup" src="images/spot/fresnaye.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/Ch%C3%A2teau+de+la+Fresnaye/@48.8974054,-0.1947861,17.26z/data=!4m5!3m4!1s0x480a106f3ae728e3:0x9734bd4e34e9243!8m2!3d48.8974392!4d-0.1948215" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Anonymous</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Nimes
  [
    43.8081667,
    4.3241111,
    '<img class="img-popup" src="images/spot/nimes.jpg"/></br><b><a class="link-popup" href="https://www.google.be/maps/place/43%C2%B048\'29.4%22N+4%C2%B019\'26.8%22E/@43.8081667,4.3241111,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x15f95664f546d242!8m2!3d43.8081721!4d4.3241003?hl=fr" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Cyril Klain</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Ambierle
  [
    46.104661,
    3.895683,
    '<img class="img-popup" src="images/spot/ambierle.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/46%C2%B006\'16.8%22N+3%C2%B053\'44.5%22E/@46.104661,3.895683,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xdf258f429d52efeb!8m2!3d46.104661!4d3.895683" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Loris</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Le Coteau
  [
    46.008982,
    4.096488,
    '<img class="img-popup" src="images/spot/lecoteau.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/46.008982,+4.096488?sa=X&ved=2ahUKEwjVhuTdmMz5AhXVu6QKHTDWCEIQ8gF6BAgCEAE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Loris</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Villerest
  [
    45.987929,
    4.047184,
    '<img class="img-popup" src="images/spot/villerest.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/45.987929,+4.047184?sa=X&ved=2ahUKEwiT87ONmcz5AhUJtqQKHYkcD40Q8gF6BAgCEAE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Loris</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Usine OTR
  [
    45.7536506,
    3.967884,
    '<img class="img-popup" src="images/spot/usine-otr.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/45%C2%B045\'13.1%22N+3%C2%B058\'04.4%22E/@45.7536506,3.967884,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf0c697c044f6805b!8m2!3d45.7536506!4d3.967884" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>OTR eSport</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France hotel OTR
  [
    45.3870047,
    4.6127461,
    '<img class="img-popup" src="images/spot/hotel-otr.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/45%C2%B023\'13.2%22N+4%C2%B036\'45.9%22E/@45.3870047,4.6127461,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x563ca8cbb500bce7!8m2!3d45.3870047!4d4.6127461" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>OTR eSport</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France chateau OTR
  [
    45.896608,
    4.101832,
    '<img class="img-popup" src="images/spot/chateau-otr.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/45.896608,+4.101832?sa=X&ved=2ahUKEwiLsc2dm8z5AhWJnaQKHQWCCKwQ8gF6BAgCEAE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>OTR eSport</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Hostens
  [
    44.4974947,
    -0.6518392,
    '<img class="img-popup" src="images/spot/hostens.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/44%C2%B029\'51.0%22N+0%C2%B039\'06.6%22W/@44.4974947,-0.6518392,17z/data=!4m5!3m4!1s0x0:0x47fb617c0d049e3a!8m2!3d44.4974947!4d-0.6518392" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Stü_Bō</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Trio Merguez
  [
    44.769214,
    -0.435511,
    '<img class="img-popup" src="images/spot/triomerguez.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/44%C2%B046\'09.2%22N+0%C2%B026\'07.8%22W/@44.769214,-0.435511,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x790429f57ff88a09!8m2!3d44.769214!4d-0.435511" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Stü_Bō</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France AkiraZoku
  [
    49.1190551,
    6.1221065,
    '<img class="img-popup" src="images/spot/bjzk.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/49.1190551,+6.1221065?sa=X&ved=2ahUKEwjBwb3kw875AhXMCewKHSeTDXAQ8gF6BAgCEAE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>AkiraZoku</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Tunnel du Fret
  [
    48.837695,
    1.900167,
    '<img class="img-popup" src="images/spot/tunneldufret.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/48.837695,1.900167?sa=X&ved=2ahUKEwiBpcqjmOD5AhVUuKQKHZ3vA3kQ8gF6BAgCEAE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Kristen Mallet</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Château de Thoiry
  [
    48.864636,
    1.797866,
    '<img class="img-popup" src="images/spot/chateaudethoiry.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/48.864636,1.797866?sa=X&ved=2ahUKEwj52vWLmeD5AhUHuqQKHZ8oCGEQ8gF6BAgCEAE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Kristen Mallet</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Port Debilly
  [
    48.862784,
    2.295394,
    '<img class="img-popup" src="images/spot/portdebilly.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B051\'46.0%22N+2%C2%B017\'43.4%22E/@48.8627837,2.2953936,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x53aefaf1908072b5!8m2!3d48.8627837!4d2.2953936" target="_blank">Visiter le spot ⭐</a></b><p class="copy-photo">Photo by <b>Charles</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Circuit de Montlhery
  [
    48.623063,
    2.248361,
    '<img class="img-popup" src="images/spot/CircuitdeMontlhery.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B051\'46.0%22N+2%C2%B017\'43.4%22E/@48.8627837,2.2953936,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x53aefaf1908072b5!8m2!3d48.8627837!4d2.2953936" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Charles</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Place Vendome
  [
    48.868043,
    2.329386,
    '<img class="img-popup" src="images/spot/placevendome.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B052\'05.0%22N+2%C2%B019\'45.8%22E/@48.8680426,2.3293859,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xdf72655ac9d8e120!8m2!3d48.8680426!4d2.3293859" target="_blank">Visiter le spot ⭐⭐⭐</a></b><p class="copy-photo">Photo by <b>Charles</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Place Vauban
  [
    48.853178,
    2.312317,
    '<img class="img-popup" src="images/spot/placevauban.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B051\'11.4%22N+2%C2%B018\'44.3%22E/@48.8531779,2.3123169,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x9e573eadb0ae9568!8m2!3d48.8531779!4d2.3123169" target="_blank">Visiter le spot ⭐⭐</a></b><p class="copy-photo">Photo by <b>Charles</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Tunnel
  [
    44.229902,
    1.503611,
    '<img class="img-popup" src="images/spot/nosoundtunnel.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/44%C2%B013\'47.7%22N+1%C2%B030\'13.0%22E/@44.2299015,1.5036105,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xa045b544abcb9483!8m2!3d44.2299015!4d1.5036105" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Romain</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Chambon
  [
    45.548045,
    2.875496,
    '<img class="img-popup" src="images/spot/spotchambon.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/45%C2%B032\'53.0%22N+2%C2%B052\'31.8%22E/@45.548045,2.8733073,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x33100c010097ea73!8m2!3d45.548045!4d2.875496" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>YOY_S13_Drift</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Crescent
  [
    47.387620,
    3.908840,
    '<img class="img-popup" src="images/spot/spotcrescent.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/47%C2%B023\'15.4%22N+3%C2%B054\'31.8%22E/@47.38762,3.90884,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xc88a03dd27134be1!8m2!3d47.38762!4d3.90884" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>imDraz_</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Prescy le sec
  [
    47.59118,
    3.83168,
    '<img class="img-popup" src="images/spot/spotprecy.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/47.59118,+3.83168?sa=X&ved=2ahUKEwitjOfJrOD5AhUcxQIHHRkUAo0Q8gF6BAgFEAE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>imDraz_</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],


  // Spot France Vienne Tag
  [
    45.537081,
    4.87401,
    '<img class="img-popup" src="images/spot/spotviennetag.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/45%C2%B032\'13.5%22N+4%C2%B052\'26.4%22E/@45.537081,4.87401,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xf5faece50e5318d4!8m2!3d45.537081!4d4.87401" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Tom</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],


  // Spot France Fécamp
  [
    49.762741,
    0.369058,
    '<img class="img-popup" src="images/spot/spotfecamp.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/20+Grand+Quai/@49.7627154,0.3689578,17z/data=!4m6!3m5!1s0x47e06b5b3754dbc5:0xc5b1a52664917984!4b1!8m2!3d49.7627154!4d0.3689578" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Anonymous</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Tancarville
  [
    49.479222,
    0.470694,
    '<img class="img-popup" src="images/spot/spottancarville.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/49%C2%B028\'45.2%22N+0%C2%B028\'14.5%22E/@49.4792222,0.4706944,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x153bfeadd270b822!7e2!8m2!3d49.4792072!4d0.4706812" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Anonymous</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Tancarville
  [
    45.1080421,
    6.0768357,
    '<img class="img-popup" src="images/spot/spotcoldupoutran.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/Col+du+Poutran/@45.1080421,6.0768357,18z/data=!4m5!3m4!1s0x478a6a5734b224b5:0xd79a50561128f7d9!8m2!3d45.108385!4d6.076846!5m1!1e4" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Mael Klock</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot Belgique 8954 Heuvelland
  [
    50.7872578,
    2.7618814,
    '<img class="img-popup" src="images/spot/spotheuvelland.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/50.7872578,+2.7618814?sa=X&ved=2ahUKEwidxtPrtOD5AhXEtqQKHWT_DTwQ8gF6BAgCEAE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Maxime Louvet</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Dunkerque
  [
    51.0401982,
    2.3673871,
    '<img class="img-popup" src="images/spot/spotdunkerque.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/51.0401982,+2.3673871?sa=X&ved=2ahUKEwiXv4LJteD5AhXKhP0HHX2AC_wQ8gF6BAgCEAE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Maxime Louvet</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Chatel Censoir
  [
    47.5409199,
    3.6358653,
    '<img class="img-popup" src="images/spot/spotchatelcensoir.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/89660+Ch%C3%A2tel-Censoir/@47.5409199,3.6358653,17z/data=!4m5!3m4!1s0x47ee24b7a9173e1b:0xe55a09cd28740f!8m2!3d47.5409199!4d3.6358653?hl=fr-FR" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>L3xuszoku89</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Brosses
  [
    47.5523466,
    3.6358653,
    '<img class="img-popup" src="images/spot/spotbrosses.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/47%C2%B033\'08.5%22N+3%C2%B041\'09.9%22E/@47.5523466,3.683883,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xcc5f94d98c42dcbb!8m2!3d47.5523466!4d3.6860717?hl=fr-FR" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>L3xuszoku89</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France Lucy-sur-Yonne
  [
    47.5268312,
    3.5795749,
    '<img class="img-popup" src="images/spot/spotlucysuryonne.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/47%C2%B031\'36.6%22N+3%C2%B034\'54.4%22E/@47.5268312,3.5795749,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xe13577902e8e91a2!8m2!3d47.5268312!4d3.5817636?hl=fr-FR" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>L3xuszoku89</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France calle de Vannes
  [
    47.653974,
    -2.757943,
    '<img class="img-popup" src="images/spot/spotcallevannes.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/47%C2%B039\'14.3%22N+2%C2%B045\'28.6%22W/@47.653974,-2.7594684,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x803cc323bb19e781!7e2!8m2!3d47.6539737!4d-2.757943" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Zeno_Pics</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot France aerodrome Monterblanc
  [
    47.730000,
    -2.719760,
    '<img class="img-popup" src="images/spot/spotaeromonterblanc.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/47%C2%B043\'48.0%22N+2%C2%B043\'11.1%22W/@47.7300003,-2.7197603,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x2016a563b318cb!8m2!3d47.7300003!4d-2.7197603" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Zeno_Pics</b></p>',
    spots,
    france,
    spotIcon,
    green,
    fillgreen,
    0,
  ],


  // Spot Belgique Rochefort
  [
    50.115619,
    5.0919252,
    '<img class="img-popup" src="images/spot/rochefort.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/Rue+du+Ch%C3%A2teau+8,+5580+Rochefort/@50.115619,5.0919252,17z/data=!3m1!4b1!4m5!3m4!1s0x47c1cf79b4632161:0x4387c3bde8503eed!8m2!3d50.115619!4d5.0919252" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Thomas Buntinx</b></p>',
    spots,
    belgique,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot Belgique Dinant
  [
    50.2418056,
    4.894,
    '<img class="img-popup" src="images/spot/dinant.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/50%C2%B014\'30.5%22N+4%C2%B053\'38.4%22E/@50.2418056,4.894,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x5be4d2b43d5ca5c4!7e2!8m2!3d50.2418036!4d4.8939992" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>Retard Racing</b></p>',
    spots,
    belgique,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // Spot Belgique Dinant
  [
    50.339534,
    4.863561,
    '<img class="img-popup" src="images/spot/spotyvoir.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/50%C2%B020\'22.3%22N+4%C2%B051\'48.8%22E/@50.3395342,4.8613727,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x6acdceb53ab51c60!8m2!3d50.3395342!4d4.8635614?hl=fr-BE" target="_blank">Visiter le spot</a></b><p class="copy-photo">Photo by <b>L’homme en Mini</b></p>',
    spots,
    belgique,
    spotIcon,
    green,
    fillgreen,
    0,
  ],

  // *****************************       *****************************
  // ***************************** Crash *****************************
  // *****************************       *****************************

  // Crash France st talus breton
  [
    48.0082829,
    -2.8328047,
    '<img class="img-popup" src="images/spot/sttalus.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/48.0082829,+-2.8328047?sa=X&ved=2ahUKEwjA39qTxs75AhWkgv0HHVDDAOcQ8gF6BAgCEAE" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Préfère pas le dire</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France Fontainebleu
  [
    48.353865,
    2.761234,
    '<img class="img-popup" src="images/spot/talusfontainebleu.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B021\'13.9%22N+2%C2%B045\'40.4%22E/@48.3538651,2.7612336,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x91ff12f88910dd31!8m2!3d48.3538651!4d2.7612336" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Le Flo</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France Bouville
  [
    48.425540,
    2.324705,
    '<img class="img-popup" src="images/spot/talusbouville.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B025\'32.0%22N+2%C2%B019\'28.9%22E/@48.4255403,2.3247048,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x8d002dd72fab30d5!8m2!3d48.4255403!4d2.3247048" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Le Charles</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France Réclainville
  [
    48.342658,
    1.753599,
    '<img class="img-popup" src="images/spot/talusreclainville.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/48.3426584,+1.7535987?sa=X&ved=2ahUKEwj7q_Pxo-D5AhW9nf0HHUDTAM8Q8gF6BAgCEAE" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Le rouge c’est bof finalement</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France Ballainvilliers
  [
    48.664634,
    2.293577,
    '<img class="img-popup" src="images/spot/talusballainvilliers.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B039\'52.7%22N+2%C2%B017\'36.9%22E/@48.6646336,2.2935774,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x5c696d9d06d5ad4d!8m2!3d48.6646336!4d2.2935774" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Rond point des gentils dames</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France Auffargis
  [
    48.682296,
    1.931122,
    '<img class="img-popup" src="images/spot/talusauffragis.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B040\'56.3%22N+1%C2%B055\'52.0%22E/@48.6822958,1.9311224,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x1cbe98a98ec9de7b!8m2!3d48.6822958!4d1.9311224" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Le Kristen</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France Modus
  [
    47.719873,
    3.279465,
    '<img class="img-popup" src="images/spot/talusmodus.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/47%C2%B043\'11.5%22N+3%C2%B016\'46.1%22E/@47.7198728,3.2794655,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xb1defd805bb3003d!8m2!3d47.7198728!4d3.2794655" target="_blank">Testé en 2017</a></b><p class="copy-photo">Photo by <b>Talus de précision</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France Rover
  [
    48.8402739,
    2.6007832,
    '<img class="img-popup" src="images/spot/talusrover.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/48.8402739,+2.6007832?sa=X&ved=2ahUKEwi6_evHp-D5AhXL4KQKHd9aBCcQ8gF6BAgCEAE" target="_blank">Testé en 2019</a></b><p class="copy-photo">Photo by <b>Rond point furtif </b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France Annecy
  [
    45.894582,
    6.123552,
    '<img class="img-popup" src="images/spot/talusannecy.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/45%C2%B053\'40.5%22N+6%C2%B007\'24.8%22E/@45.894582,6.123552,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x731bb74138f256cc!8m2!3d45.894582!4d6.123552" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Préfère ne pas le dire</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France filliere
  [
    46.026441,
    6.287077,
    '<img class="img-popup" src="images/spot/talusfilliere.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/46%C2%B001\'35.2%22N+6%C2%B017\'13.5%22E/@46.026441,6.287077,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xcec4bfd895302087!8m2!3d46.026441!4d6.287077" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Préfère ne pas le dire</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

  // Crash France Etaux
  [
    46.045266,
    6.256884,
    '<img class="img-popup" src="images/spot/talusetaux.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/search/46.045266,6.256884?sa=X&ved=2ahUKEwiq5c6jq-D5AhXw_rsIHZgpAHoQ8gF6BAgCEAE" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Préfère ne pas le dire</b></p>',
    crashs,
    france,
    crashIcon,
    blue,
    fillblue,
    0,
  ],

    // Crash France Coulanges-sur-Yonne
    [
      47.5201832,
      3.5407717,
      '<img class="img-popup" src="images/spot/spotcoulangessuryonne.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps?q=47.5201832,3.5407717&hl=fr-FR&gl=fr&entry=gps&g_ep=CAISBjYuMzEuMxgA&shorturl=1" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>L3xuszoku89</b></p>',
      crashs,
      france,
      crashIcon,
      blue,
      fillblue,
      0,
    ],

    // Crash France Lamballe-Armor
    [
      48.475988,
      -2.500735,
    '<img class="img-popup" src="images/spot/taluslamballearmor.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B028\'33.6%22N+2%C2%B030\'02.7%22W/@48.4977237,-2.4432446,9.97z/data=!4m5!3m4!1s0x0:0x962c54d5ef63f812!8m2!3d48.4759877!4d-2.5007354" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Zeno_Pics</b></p>',
      crashs,
      france,
      crashIcon,
      blue,
      fillblue,
      0,
    ],

  
  // // Crash France Auffargis
  // [
  //   48.682296,
  //   1.931122,
  //   '<img class="img-popup" src="images/spot/talusauffragis.jpg"/></br><b><a class="link-popup" href="https://www.google.com/maps/place/48%C2%B040\'56.3%22N+1%C2%B055\'52.0%22E/@48.6822958,1.9311224,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x1cbe98a98ec9de7b!8m2!3d48.6822958!4d1.9311224" target="_blank">Éviter ce coin</a></b><p class="copy-photo">Photo by <b>Le Kristen</b></p>',
  //   crashs,
  //   france,
  //   crashIcon,
  //   blue,
  //   fillblue,
  //   0,
  // ],

  // End Array
];

// Start function to put all markers from the array

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
    radius,
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
    fillOpacity: 0.2,
    radius: radius,
  })
    .addTo(category)
    .addTo(country)
    .addTo(all)
    .addTo(map);
}

// Options for zoom

map.options.minZoom = 3;
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
layerControl.addOverlay(crashs, "Talus");
layerControl.addOverlay(france, "France");
layerControl.addOverlay(belgique, "Belgique");
layerControl.addOverlay(europe, "Europe");
layerControl.addOverlay(asie, "Asie");

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

var usAirForceJets = [
  {
    name: "F-22 Raptor",
    role: "Air Superiority Fighter",
    maxSpeed: "Mach 2.25",
    maxSpeedMph: "1712.25",
    maxSpeedMach: "2.25",
    range: "1,600 nautical miles",
    payload: "Internal weapons bays",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/1/1e/F-22_Raptor_edit1_%28cropped%29.jpg"
  },
  {
    name: "F-35 Lightning II",
    role: "Multirole Fighter",
    maxSpeed: "Mach 1.6",
    maxSpeedMph: "1217.6",
    maxSpeedMach: "1.6",
    range: "1,200 nautical miles",
    payload: "Variety of weapons, stealth capabilities",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/6/61/F-35A_flight_%28cropped%29.jpg"
  },
  {
    name: "F-16 Fighting Falcon",
    role: "Multirole Fighter",
    maxSpeed: "Mach 2",
    maxSpeedMph: "1522",
    maxSpeedMach: "2",
    range: "2,620 nautical miles",
    payload: "Versatile, widely used",
    imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/F-16_June_2008.jpg/1200px-F-16_June_2008.jpg"
  },
  {
    name: "A-10 Thunderbolt II",
    role: "Attack Aircraft",
    maxSpeed: "439 mph", //continue this here
    maxSpeedMph: "439",
    maxSpeedMach: "0.58",
    range: "800 nautical miles",
    payload: "30mm GAU-8 Avenger rotary cannon, ground-attack capability",
    imageUrl:"https://i1.sndcdn.com/artworks-jMCc0OrFYdqtyDb3-hGn1dg-t500x500.jpg"
  },
  {
    name: "B-2 Spirit",
    role: "Strategic Bomber",
    maxSpeed: "Mach 0.95",
    maxSpeedMph: "722.95",
    maxSpeedMach: "0.95",
    range: "6,000 nautical miles",
    payload: "Stealth bomber, nuclear capability",
    imageUrl:"https://3.bp.blogspot.com/-0pxZ2OxIx6M/VHbgRRlU1SI/AAAAAAAAGjM/X1fIcifpJWQ/s1600/B-2.jpg"
  },
  {
    name: "C-17 Globemaster III",
    role: "Transport Aircraft",
    maxSpeed: "Mach 0.77",
    maxSpeedMph: "585.97",
    maxSpeedMach: "0.77",
    range: "2,400 nautical miles",
    payload: "Large cargo capacity, versatile airlifter",
    imageUrl:"https://media.defense.gov/2007/Mar/22/2000505224/-1/-1/0/070322-F-9999X-011.JPG"
  },
  {
    name: "KC-135 Stratotanker",
    role: "Aerial Refueling Tanker",
    maxSpeed: "530 mph",
    maxSpeedMph: "530",
    maxSpeedMach: "0.7",
    range: "11,015 nautical miles",
    payload: "Fuel transfer to other aircraft in-flight",
    imageUrl: "https://vistapointe.net/images/boeing-kc135-stratotanker-2.jpg",
  },
  {
    name: "E-3 Sentry (AWACS)",
    role: "Airborne Warning and Control System",
    maxSpeed: "360 mph",
    maxSpeedMph: "360",
    maxSpeedMach: "0.47",
    range: "2,000 nautical miles",
    payload: "Surveillance and command center in the sky",
    imageUrl: "https://crewdaily.com/wp-content/uploads/2019/07/Boeing-E-3-Sentry1.jpg",
  },
  {
    name: "MQ-9 Reaper",
    role: "Unmanned Combat Aerial Vehicle",
    maxSpeed: "300 mph",
    maxSpeedMph: "300",
    maxSpeedMach: "0.39",
    range: "1,150 miles",
    payload: "Armed reconnaissance and ground attack",
    imageUrl: "https://media.defense.gov/2020/Feb/07/2002245915/-1/-1/0/200114-F-HP405-9947.JPG",
  },
  {
    name: "F-15 Eagle",
    role: "Air Superiority Fighter",
    maxSpeed: "Mach 2.5",
    maxSpeedMph: "1902.5",
    maxSpeedMach: "2.5",
    range: "3,450 nautical miles",
    payload: "Highly maneuverable, all-weather",
    imageUrl: "https://1.bp.blogspot.com/-NG_lD_AWWRY/Tsqt6o5g_QI/AAAAAAAAAvk/tYdktEGsA5Q/s1600/f_15_eagle_8.jpg",
  },
  {
    name: "F-14 Tomcat",
    role: "Interceptor",
    maxSpeed: "Mach 2.34",
    maxSpeedMph: "1780.74",
    maxSpeedMach: "2.34",
    range: "1,600 nautical miles",
    payload: "Variable-sweep wings, air superiority",
    imageUrl: "https://diamondpaintkit.com/wp-content/uploads/2021/10/Jet-Fighter-Art-diamond-paintings.jpg",
  },
  {
    name: "B-52 Stratofortress",
    role: "Strategic Bomber",
    maxSpeed: "Mach 0.86",
    maxSpeedMph: "654.46",
    maxSpeedMach: "0.86",
    range: "8,800 nautical miles",
    payload: "Long-range nuclear and conventional capability",
    imageUrl: "https://crewdaily.com/wp-content/uploads/2019/01/Boeing-B-52-Stratofortress1.jpg",
  },
  {
    name: "AC-130 Spectre",
    role: "Gunship",
    maxSpeed: "300 mph",
    maxSpeedMph: "300",
    maxSpeedMach: "0.39",
    range: "1,300 nautical miles",
    payload: "Armed with powerful Gatling guns and cannons",
    imageUrl: "https://i.pinimg.com/736x/46/1d/ba/461dba89bd23548f62aa0401a4113d0e--angel-of-death-the-angel.jpg",
  },
  {
    name: "F-117 Nighthawk",
    role: "Stealth Attack Aircraft",
    maxSpeed: "Mach 0.92",
    maxSpeedMph: "700.12",
    maxSpeedMach: "0.92",
    range: "620 nautical miles",
    payload: "First operational aircraft designed around stealth technology",
    imageUrl: "https://www.19fortyfive.com/wp-content/uploads/2022/03/Area-51-768x432.jpg",
  },
  {
    name: "U-2 Dragon Lady",
    role: "High-Altitude Reconnaissance Aircraft",
    maxSpeed: "475 mph",
    maxSpeedMph: "475",
    maxSpeedMach: "0.62",
    range: "7,000 nautical miles",
    payload: "Spy plane with high-altitude capabilities",
    imageUrl: "https://www.lockheedmartin.com/content/dam/lockheed-martin/aero/photo/U2/u2one.jpg.pc-adaptive.full.medium.jpeg",
  },
  {
    name: "F-15EX Eagle II",
    role: "Air Superiority Fighter",
    maxSpeed: "Mach 2.5",
    maxSpeedMph: "1902.5",
    maxSpeedMach: "2.5",
    range: "3,000 nautical miles",
    payload: "Advanced avionics and electronic warfare capabilities",
    imageUrl: "https://static0.hotcarsimages.com/wordpress/wp-content/uploads/2021/04/F-15EX-US-Air-Force.jpg"
  },
  {
    name: "T-7A Red Hawk",
    role: "Trainer Aircraft",
    maxSpeed: "Mach 1.2",
    maxSpeedMph: "913.2",
    maxSpeedMach: "1.2",
    range: "1,000 nautical miles",
    payload: "Training capabilities for pilots",
    imageUrl: ""
  },
  {
    name: "RC-135 Rivet Joint",
    role: "Reconnaissance Aircraft",
    maxSpeed: "500 mph",
    maxSpeedMph: "500",
    maxSpeedMach: "0.66",
    range: "3,900 nautical miles",
    payload: "Signals intelligence and electronic surveillance",
    imageUrl: ""
  },
  {
    name: "HC-130J Combat King II",
    role: "Search and Rescue",
    maxSpeed: "417 mph",
    maxSpeedMph: "417",
    maxSpeedMach: "0.55",
    range: "2,500 nautical miles",
    payload: "Specialized equipment for search and rescue operations",
    imageUrl: ""
  },
  {
    name: "B-1B Lancer",
    role: "Strategic Bomber",
    maxSpeed: "Mach 1.25",
    maxSpeedMph: "951.25",
    maxSpeedMach: "1.25",
    range: "5,900 nautical miles",
    payload: "Large payload of guided and unguided weapons",
    imageUrl: ""
  },
  {
    name: "B-21 Raider",
    role: "Stealth Bomber",
    maxSpeed: "Classified",
    maxSpeedMph: "Classified",
    maxSpeedMach: "Classified",
    range: "Classified",
    payload: "Advanced stealth with nuclear and conventional capabilities",
    imageUrl: ""
  },
  {
    name: "OV-10 Bronco",
    role: "Light Attack and Observation Aircraft",
    maxSpeed: "288 mph",
    maxSpeedMph: "288",
    maxSpeedMach: "0.39",
    range: "1,240 nautical miles",
    payload: "Supports ground troops with reconnaissance and close air support",
    imageUrl: ""
  },
  {
    name: "F-105 Thunderchief",
    role: "Fighter-Bomber",
    maxSpeed: "Mach 2.08",
    maxSpeedMph: "1582.88",
    maxSpeedMach: "2.08",
    range: "2,206 nautical miles",
    payload: "Designed for high-speed, low-altitude penetration strikes",
    imageUrl: ""
  },
  {
    name: "F-100 Super Sabre",
    role: "Fighter Aircraft",
    maxSpeed: "Mach 1.6",
    maxSpeedMph: "1217.6",
    maxSpeedMach: "1.6",
    range: "1,995 nautical miles",
    payload: "First USAF fighter capable of supersonic speed in level flight",
    imageUrl: ""
  },
  {
    name: "F-4 Phantom II",
    role: "Interceptor, Fighter-Bomber",
    maxSpeed: "Mach 2.23",
    maxSpeedMph: "1697.03",
    maxSpeedMach: "2.23",
    range: "1,610 nautical miles",
    payload: "Versatile armament including missiles and bombs",
    imageUrl: ""
  },
  {
    name: "F-5 Freedom Fighter",
    role: "Light Fighter",
    maxSpeed: "Mach 1.6",
    maxSpeedMph: "1217.6",
    maxSpeedMach: "1.6",
    range: "760 nautical miles",
    payload: "Twin-engine, agile fighter",
    imageUrl: ""
  },
  {
    name: "C-130 Hercules",
    role: "Transport Aircraft",
    maxSpeed: "366 mph",
    maxSpeedMph: "366",
    maxSpeedMach: "0.48",
    range: "2,360 nautical miles",
    payload: "Tactical airlift capabilities, versatile cargo hold",
    imageUrl: ""
  },
  {
    name: "SR-71 Blackbird",
    role: "Reconnaissance Aircraft",
    maxSpeed: "Mach 3.3",
    maxSpeedMph: "2511.3",
    maxSpeedMach: "3.3",
    range: "2,900 nautical miles",
    payload: "Advanced surveillance and reconnaissance equipment",
    imageUrl: ""
  },
  {
    name: "C-5 Galaxy",
    role: "Transport Aircraft",
    maxSpeed: "Mach 0.79",
    maxSpeedMph: "578.36",
    maxSpeedMach: "0.79",
    range: "4,800 nautical miles",
    payload: "One of the largest military aircraft, extensive cargo capabilities",
    imageUrl: ""
  },
  {
    name: "F-111 Aardvark",
    role: "Tactical Bomber",
    maxSpeed: "Mach 2.5",
    maxSpeedMph: "1902.5",
    maxSpeedMach: "2.5",
    range: "3,200 nautical miles",
    payload: "Variable geometry wings, nuclear and conventional payload",
    imageUrl: ""
  },
  {
    name: "B-58 Hustler",
    role: "Supersonic Bomber",
    maxSpeed: "Mach 2",
    maxSpeedMph: "1522",
    maxSpeedMach: "2",
    range: "4,100 nautical miles",
    payload: "First operational bomber capable of Mach 2 flight",
    imageUrl: ""
  },
  {
    name: "KC-10 Extender",
    role: "Aerial Tanker",
    maxSpeed: "Mach 0.89",
    maxSpeedMph: "677.29",
    maxSpeedMach: "0.89",
    range: "4,400 nautical miles",
    payload: "Aerial refueling and cargo transportation capabilities",
    imageUrl: ""
  },
];

usAirForceJets.forEach((jet) => {
  console.log(`
          Name: ${jet.name}
          Role: ${jet.role}
          Max Speed: ${jet.maxSpeed}
          Range: ${jet.range}
          Payload: ${jet.payload}
          Image: ${jet.imageUrl}
          ============================
        `);
});


export { usAirForceJets };




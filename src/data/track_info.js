const images = {
  beer: "https://cdn.glitch.global/5246aeba-3676-491e-b78f-b02a088aed05/TheLockeBeerGarden.png?v=1650966152845",
  chapelSt:
    "https://cdn.glitch.global/5246aeba-3676-491e-b78f-b02a088aed05/ChapelSt.png?v=1650966120975",
  catherine:
    "https://cdn.glitch.global/5246aeba-3676-491e-b78f-b02a088aed05/LittleCatherineSt.png?v=1650966125219",
  merchant:
    "https://cdn.glitch.global/5246aeba-3676-491e-b78f-b02a088aed05/MerchantsQuay.png?v=1650966129269",
  milk_market:
    "https://cdn.glitch.global/5246aeba-3676-491e-b78f-b02a088aed05/MilkMarket.png?v=1650966133703",
  ormston:
    "https://cdn.glitch.global/5246aeba-3676-491e-b78f-b02a088aed05/OrmstonHouse.png?v=1650966141050",
  peoples_park:
    "https://cdn.glitch.global/5246aeba-3676-491e-b78f-b02a088aed05/PeoplesPark.png?v=1650966145439",
  skatepark:
    "https://cdn.glitch.global/5246aeba-3676-491e-b78f-b02a088aed05/Skatepark.png?v=1650966148935",
};

const audio = {
  beer: "https://cdn.glitch.me/5246aeba-3676-491e-b78f-b02a088aed05/BeerGarden%20v02.wav?v=1650966004229",
  chapelSt:
    "https://cdn.glitch.me/5246aeba-3676-491e-b78f-b02a088aed05/ChapelStreet%20v02.wav?v=1650967718593",
  catherine:
    "https://cdn.glitch.me/5246aeba-3676-491e-b78f-b02a088aed05/LittleCatherineStreet%20v02.wav?v=1650966021577",
  merchant:
    "https://cdn.glitch.me/5246aeba-3676-491e-b78f-b02a088aed05/MerchantsQuay%20v02.wav?v=1650966030692",
  milk_market:
    "https://cdn.glitch.me/5246aeba-3676-491e-b78f-b02a088aed05/MilkMarket%20v02.wav?v=1650966059982",
  ormston:
    "https://cdn.glitch.me/5246aeba-3676-491e-b78f-b02a088aed05/OrmstonHouse%20v02.wav?v=1650966072738",
  peoples_park:
    "https://cdn.glitch.me/5246aeba-3676-491e-b78f-b02a088aed05/PeoplesPark%20v02.wav?v=1650966093110",
  skatepark:
    "https://cdn.glitch.me/5246aeba-3676-491e-b78f-b02a088aed05/Skatepark%20v02.wav?v=1650966099466",
};

const track_objects = [
  { id: 1, bgImgUrl: images.beer, musicUrl: audio.beer },
  { id: 2, bgImgUrl: images.chapelSt, musicUrl: audio.chapelSt },
  { id: 3, bgImgUrl: images.catherine, musicUrl: audio.catherine },
  { id: 4, bgImgUrl: images.merchant, musicUrl: audio.merchant },
  { id: 5, bgImgUrl: images.milk_market, musicUrl: audio.milk_market },
  { id: 6, bgImgUrl: images.ormston, musicUrl: audio.ormston },
  { id: 7, bgImgUrl: images.peoples_park, musicUrl: audio.peoples_park },
  { id: 8, bgImgUrl: images.skatepark, musicUrl: audio.skatepark },
];

export { track_objects };

function osm(x, y, z) {
  var s = String.fromCharCode(97 + (x + y + z) % 3);
  return "https://" + s + ".tile.openstreetmap.org/" + z + "/" + x + "/" + y + ".png";
}
function stamenToner(x, y, z, dpr) {
  if (dpr === void 0) {
    dpr = 1;
  }

  return "https://stamen-tiles.a.ssl.fastly.net/toner/" + z + "/" + x + "/" + y + (dpr >= 2 ? '@2x' : '') + ".png";
}
function stamenTerrain(x, y, z, dpr) {
  if (dpr === void 0) {
    dpr = 1;
  }

  return "https://stamen-tiles.a.ssl.fastly.net/terrain/" + z + "/" + x + "/" + y + (dpr >= 2 ? '@2x' : '') + ".jpg";
}
var maptiler = function maptiler(apiKey, map) {
  if (map === void 0) {
    map = 'streets';
  }

  return function (x, y, z, dpr) {
    if (dpr === void 0) {
      dpr = 1;
    }

    return "https://api.maptiler.com/maps/" + map + "/256/" + z + "/" + x + "/" + y + (dpr >= 2 ? '@2x' : '') + ".png?key=" + apiKey;
  };
};

export { maptiler, osm, stamenTerrain, stamenToner };

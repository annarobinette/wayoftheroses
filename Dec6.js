d3.csv('https://raw.githubusercontent.com/annarobinette/wayoftheroses/blob/main/track_points.csv, function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row)
          { return row[key]; }); }

var x = unpack(rows , 'X');
var y = unpack(rows , 'Y');
var z = unpack(rows , 'ele');
///var c = unpack(rows , 'color');
Plotly.newPlot('myDiv', [{
  type: 'scatter3d',
  mode: 'lines',
  x: x,
  y: y,
  z: z,
  opacity: 1,
  line: {
    width: 6,
    color: 000000,
    reversescale: false
  }
}], {
  height: 640
});
});

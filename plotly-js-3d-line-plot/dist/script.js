d3.csv('https://raw.githubusercontent.com/annarobinette/wayoftheroses/main/track_points.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row)
          { return row[key]; }); }

var rawx = unpack(rows , 'X');
var rawy = unpack(rows , 'Y');
var rawz = unpack(rows , 'ele');
var x = rawx * 111304.96;
var y = rawy * 65575.75;
var z = rawz;
///var c = unpack(rows , 'color');
var layout = {
  title: 'Volume of Apple Shares Traded',
  xaxis: {
    autorange: true,
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false,
    title: 'AXIS TITLE',
    titlefont: {
      family: 'Arial, sans-serif',
      size: 18,
      color: 'lightgrey'
    },
  },
  yaxis: {
    autorange: true,
    showgrid: false,
    zeroline: false,
    showline: false,
    autotick: true,
    ticks: '',
    showticklabels: false
  }

};
       
Plotly.newPlot('myDiv', [{
  type: 'scatter3d',
  mode: 'lines',
  x: x,
  y: y,
  z: z,
  opacity: 1,
  line: {
    width: 1,
    color: 000000,
    reversescale: false
  }
}], {
  height: 980
 
});
});
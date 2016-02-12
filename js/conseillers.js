
  var data = [24, 23, 12, 10, 8, 8, 6, 5, 4, 4, 3, 3, 3, 2, 1, 1, 1, 1, 1];

  var width = 420;
  var height = 360;
  var r = 90;

  var canvas = d3.select("body")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height);

  var color = d3.scale.category20();

  var group = canvas.append("g")
                    .attr("transform", "translate(220, 180)");

  var arc = d3.svg.arc()
              .innerRadius(180)
              .outerRadius(r);

  var pie = d3.layout.pie()
              .value(function(d) { return d;});

  var arcs = group.selectAll(".arc")
                  .data(pie(data))
                  .enter()
                    .append("g")
                    .attr("class", "arc");

  arcs.append("path")
      .attr("d", arc)
      .attr("fill", function(d) { return color(d.data);});



    

  var data = [107, 60, 52, 47, 39, 32, 23, 18, 4, 13];
  var label = ["PJD", "PAM", "stuff"];
  var r = 90;

  var width = 420;
  var height = 360;

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

  

/*var widthScale = d3.scale.linear()
                       .domain([0, 107])
                       .range([0, width]);

  var color = d3.scale.linear()
                .domain([0, 107])
                .range(["yellow", "red"])

  var axis = d3.svg.axis()
               .scale(widthScale);

  var canvas = d3.select("body")
                 .append("svg")
                 .attr("width", width)
                 .attr("height", height);

  var bars = canvas.selectAll("rect")
                   .data(dataArray)
                   .enter()
                      .append("rect")
                      .attr("width", function(d) { return widthScale(d) })
                      .attr("height", 50)
                      .attr("fill", function(d) { return color(d) })
                            .attr("y", function(d, i) { return i * 55});

          canvas.append("g")
                .attr("transform", "translate(0, -6.5)")
                .attr("fill", "grey")
                .call(axis);

          bars.transition()
                .duration(2000)
                .attr("y", function(d, i) { return i * 55});*/
                
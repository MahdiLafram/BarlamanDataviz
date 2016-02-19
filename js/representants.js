    

  var data = [107, 60, 52, 47, 39, 32, 23, 18, 4, 13];
  var name = ['PJD', 'PAM', 'stuff', 'stuff', 'stuff', 'stuff', 'stuff'];
  var r = 90;

  var width = 420;
  var height = 360;

  var canvas = d3.select("body")
                  .append("svg")
                  .attr("width", width)
                  .attr("height", height);

  var color = d3.scale.ordinal()
                      .domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"])
                      .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


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

  arcs.append("text")
  .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
  .attr("text-anchor", "middle")
  .text( function (d) { return d.data; });
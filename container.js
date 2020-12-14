// Container.
const svg = d3.select('body')
  .append('BuffaloLines')
  .attr(width, 'width')
  .attr('height, 'height');

// Projection and path.
const projection = d3.geoAlbers().fitSize([width, height], geo);
const geoPath = d3.geoPath().projection(projection);

// Produce and configure the hexgrid instance.
const hexgrid = d3.hexgrid()
  .extent([width, height])
  .geography(geo)
  .projection(projection)
  .pathGenerator(geoPath);

// Get the hexbin generator and the layout.
const hex = hexgrid(myPointLocationData);

// Create a colour scale.
const colourScale = d3.scaleSequential(d3.interpolateViridis)
  .domain([...hex.grid.maxPoints].reverse());

// Draw the hexes.
svg.append('g')
  .selectAll('.hex')
  .data(hex.grid.layout)
  .enter()
  .append('path')
  .attr('class', 'hex')
  .attr('d', hex.hexagon())
  .attr('transform', d => `translate(${d.x}, ${d.y})`)
  .style('fill', d => !d.datapoints ? '#fff' : colourScale(d.datapoints));

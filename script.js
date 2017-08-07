window.onload = function() {
	d3.select("#container")
		.style("opacity",1)
		
	d3.select("#project")
		.append("object")
			.attr("type","text/html")
			.attr("class","project")
			.attr("data","project.html")
}
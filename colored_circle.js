// document.getElementById('hello_world').append('Hello World');
// window.onload = function() {
// 	document.getElementById("hello_world").innerText="Hello World";	
// }

$(document).ready(function() {
  // $("#hello_world").text("Hi there World");
	var R = new Raphael(document.getElementById('hello_world'), 500, 500);
	
	var color = "#FFF"
	
	var circle = R.circle(100, 100, 20).attr({fill: true});
	var t = R.text(circle.attr('cx'), circle.attr('cy') - circle.attr('r') - 20, "Raphaël kicks butt!").attr({fill: color, opacity: 0});
	
	circle.node.onmouseover = function() {
		circle.attr({fill: "#000"});
		t.attr({opacity:1});
		
	}
	
	circle.node.onmouseout = function () {
		circle.attr({fill: color});
		t.attr({opacity:0});
	}
	
});
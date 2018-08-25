import * as d3 from 'd3';
import Circle from './Circle';
import Line from './Line';
import Rectangle from './Rectangle';
import Rhombus from './Rhombus';
import Shape from './Shape';

 

export default class BPM {

    private root: any;
    svg: SVGElement;
     type:  HTMLElement
    constructor(root :object){
        this.root = root;
    }

    drawSvg(){
        this.svg = document.querySelector('svg'); 
        return this.svg;
    }


    draw(){
        let svg = this.drawSvg();
        let node = this.root;
        let previousElement:Shape = null;
        var svgPosition = svg.getBoundingClientRect();
        var previousElementPosition = {left: 40 + svgPosition.left, right: 40 + svgPosition.left, top: (svgPosition.top + svgPosition.height) /2};
        
        while(node){
                var shape:Shape = null;
                switch(node.type){
                    case "start":      
                    case "end":
                        shape = new Circle(previousElementPosition.right, previousElementPosition.top, svg, node.label);
                        shape.draw();
                        break;
                    case "rhombus": 
                        shape = new Rhombus(previousElementPosition.right,previousElementPosition.top,svg,node.label);
                        shape.draw();
                        break;
                    case "activity": 
                        shape = new Rectangle(previousElementPosition.right, previousElementPosition.top, 100, 60, svg, node.label);
                        shape.draw();                   
                        break;
                }
                if(node.next){
                    var position = shape.element.getBoundingClientRect();
                    shape = new Line(position.right, position.right + 120, position.top + position.height / 2, position.top + position.height / 2, svg);
                    shape.draw();               
                    node = node.next;
                    previousElement = shape;
                    previousElementPosition = previousElement.element.getBoundingClientRect();
                }else{
                    node = null;
                }
       }
    }
   
}


/**
 * 
 * for(var key in root){
             var width = 1000;
              var height = 1000;
             var svg= d3.select("svg")
              .attr("width",width)
              .attr("height",height)
            if(root[key] === "circle"){
             svg.append("circle")
                .attr("r", 10)
                .attr("cx", 10)
                .attr("cy", 10)
                .attr("fill", "blue");
            }
            if (typeof root[key] == "object") {
                for(var key1 in root[key]){
                        if(root[key][key1] === "line") {
                        svg.append("line")
                            .attr("x1", 30)
                            .attr("y1", 10)
                            .attr("x2", 60)
                            .attr("y2", 10)
                            .attr("stroke", "red")
                            .attr("stroke-width", 4);
                        }
                        if( typeof root[key][key1] === "object") {
                                for(var key2 in root[key][key1]) {
                                        if (root[key][key1][key2] === "rectangle") {
                                            svg.append("rect")
                                                .attr("x", 60)
                                                .attr("y", 10)
                                                .attr("width", 100)
                                                .attr("height", 100)
                                                .attr("fill", "blue");
                                        }
                                }
                        }    
                }
    
            }

        }
 */
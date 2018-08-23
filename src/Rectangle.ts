import * as d3 from "d3";
import Shape from "./Shape";

export default class Rectangle extends Shape{

    x:number;
    y:number;
    width:number;
    height:number;

    constructor(x:number, y:number, width: number, height: number, svg: SVGElement){
        super("rect", svg);
        this.x = x - this.svgPosition.left;
        this.y = y - this.svgPosition.top - height/2;
        this.width = width;
        this.height = height;
    }

    draw(){
        super.draw();
        this.attr("width",this.width+"")
        .attr("height",this.height+"")
        .attr("x",this.x+"")
         .attr("y",this.y+"")
        .attr("fill","blue");
    }
} 
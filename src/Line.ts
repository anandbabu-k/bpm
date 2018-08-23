import * as d3 from 'd3';
import Shape from './Shape';

export default class Line extends Shape{

    element: SVGLineElement;
    x1:number;
    x2:number;
    y1:number;
    y2:number;

    constructor(x1:number, x2:number, y1:number, y2:number, svg: SVGElement){
        super("line", svg);
        this.x1 = x1 - this.svgPosition.left;
        this.x2 = x2 - this.svgPosition.left;
        this.y1 = y1 - this.svgPosition.top;
        this.y2 = y2 - this.svgPosition.top;
    }

    draw(){
        super.draw();
        this.attr("x1",this.x1+"")
            .attr("y1",this.y1+"")
            .attr("x2",this.x2+"")
            .attr("y2",this.y2+"").attr("stroke-width", "5")
            .attr("stroke","green");
    }

}
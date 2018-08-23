import * as d3 from 'd3';
import Shape from './Shape';

export default class Circle extends Shape{

    cx:number;
    private cy:number;
    private r:number;

    constructor(cx:number, cy:number, svg: SVGElement){
        super("circle", svg);
        this.cy = cy - this.svgPosition.top;
        this.r = 30;
        this.cx = cx - this.svgPosition.left + this.r /2;
    }

    draw(){
        super.draw();
        this.attr("cx", this.cx+"")
            .attr("cy", this.cy+"")
            .attr("r",  this.r+"")
            .attr("fill", "green"); 
    }


}
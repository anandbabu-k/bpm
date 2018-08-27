import Shape from './Shape';
import Text from './TextElement';


export default class Circle extends Shape{

    cx:number;
    private cy:number;
    private r:number;
    label:string;

    constructor(cx:number, cy:number, svg: SVGElement, label: string,){
        super("circle", svg);
        this.cy = cy - this.svgPosition.top;
        this.r = 30;
        this.cx = cx - this.svgPosition.left + this.r /2;
        this.label = label;
    }

    draw(){
        super.draw();
        this.attr("cx", this.cx+"")
            .attr("cy", this.cy+"")
            .attr("r",  this.r+"")
            .attr("fill", "#88d588");
        this.addTitle(this.label);
    }
        
}
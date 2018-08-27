import Shape from "./Shape";
export default class Rectangle extends Shape{

    x:number;
    y:number;
    width:number;
    height:number;
    label:string;

    constructor(x:number, y:number, width: number, height: number, svg: SVGElement, label:string){
        super("rect", svg);
        this.x = x - this.svgPosition.left;
        this.y = y - this.svgPosition.top - height/2;
        this.width = width;
        this.height = height;
        this.label = label;
    }

    draw(){
        super.draw();
        this.attr("width",this.width+"")
        .attr("height",this.height+"")
        .attr("x",this.x+"")
         .attr("y",this.y+"")
        .attr("fill","#64b7da");
        this.addTitle(this.label);
    }
} 
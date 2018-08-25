import Shape from "./Shape";

export default class Text extends Shape{

    x:number;
    y:number;
    label:string;

    constructor(x:number, y:number, label: string, svg: SVGElement){
        super("text", svg);
        this.x = x - this.svgPosition.left;
        this.y = y - this.svgPosition.top;
        this.label = label;
    }

    draw(){
        debugger
        super.draw();
        this.element.textContent = this.label;
        this.attr("x", this.x + "");
        this.attr("y", this.y+"");
    }

}
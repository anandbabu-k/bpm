
import Shape from './Shape';
export default class Rhombus extends Shape {
    x:number;
    y:number;
    svg:SVGElement;
    label:string;
    constructor(x:number,y:number,svg:SVGElement,label:string){
        super("polygon", svg);
        this.x = x - this.svgPosition.left;
        this.y = y - this.svgPosition.top;
        this.svg = svg;
        this.label = label;

    }
     
    draw () {
        super.draw();
        let width = 50;
        let height = 50;
        let x = this.x;
        let y = this.y;
        this.attr("points", (x+ ","+y+" "+(x+width)+","+(y-height)+" " +(x+width*2)+","+(y)+" "+ (x+width)+","+(y+height))+"")
        this.addTitle(this.label);
    }

}
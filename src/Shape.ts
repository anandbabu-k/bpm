export default class Shape{

    element: SVGElement;
    svg: SVGElement;
    svgPosition: ClientRect;

    constructor(type: string, svg:SVGElement){
        this.svg = svg;
        this.svgPosition = svg.getBoundingClientRect();
        this.element = document.createElementNS("http://www.w3.org/2000/svg", type) as SVGElement;
    }

    public draw(){
        this.svg.appendChild(this.element);
    }

    public attr(key:string, value:string){
        this.element.setAttributeNS(null, key, value);
        return this;
    }
        
    addTitle(label:string){
        let position = this.element.getBoundingClientRect();
        let text = new Text(position.left, position.top + position.height + 20, label, this.svg);
        text.draw();
    }


}


class Text extends Shape{
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
        super.draw();
        this.element.textContent = this.label;
        this.attr("x", this.x + "");
        this.attr("y", this.y+"");
    }

}
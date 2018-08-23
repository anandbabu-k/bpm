export default class Shape{

    element: SVGElement;
    svg: SVGElement;
    svgPosition: ClientRect;

    constructor(type: string, svg:SVGElement){
        this.svg = svg;
        this.svgPosition = svg.getBoundingClientRect();
        this.element = document.createElementNS("http://www.w3.org/2000/svg", type) as SVGElement;
    }

    public attr(key:string, value:string){
        this.element.setAttributeNS(null, key, value);
        return this;
    }

    public draw(){
        this.svg.appendChild(this.element);
    }

}
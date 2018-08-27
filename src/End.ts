import Shape from './Shape';
export default class End extends Shape {
    cx:number;
    cy:number;
    svg: SVGElement;
    label: string;
    r : number;
  constructor(cx:number, cy:number, svg: SVGElement, label: string ){
    super("circle",svg);
    this.cx = cx;
    this.r = 30;
    this.cy = cy-this.svgPosition.top;
    this.svg = svg;
    this.label = label;
  }
  draw (){
      super.draw();
      this.attr("cx", this.cx+"")
      .attr("cy", this.cy+"")
      .attr("r",  this.r+"")
      .attr("fill", "#ea7979");
  this.addTitle(this.label);

  }

}
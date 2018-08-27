class Point {
    x : number;
    y : number;
    constructor(x : number,y : number){
         this.x = x;
         this.y = y;
    }
    print(){
        return "(console.log(this.x),console.log(this.y))"
    }
}
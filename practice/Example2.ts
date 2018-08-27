     class Example2 extends Point{
        x : number;
        y :number;
        color :string;
      constructor(x : number,y :number,color :string){
                    super(x,y);
                    this.color = color;
      }
        
     print(){
         return super.print() + this.color;
     }
    
    
}
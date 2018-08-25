import BPM from './BPM';
var root = {
    type : "start",
    label: "Start of the day",
    next : {
       type : "activity",
       label: "Breakfast",
       next  :{
            type : "rhombus",
            label: "diagram",
                  next  :{
                      type : "end",
                       label: "End of the day"
                   }
        }
    }
}
debugger;
var d =new BPM(root);
d.draw();
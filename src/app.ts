import BPM from './BPM';

var root = {
    type : "start",
    next : {
       type : "activity",
       next  :{
           type : "end"
       }
    }
} 
var d =new BPM(root);
d.draw();
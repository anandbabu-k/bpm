define(["require", "exports", "d3", "./Circle", "./Line", "./Rectangle"], function (require, exports, d3, Circle_1, Line_1, Rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BPM = /** @class */ (function () {
        function BPM(root) {
            this.root = root;
        }
        BPM.prototype.drawSvg = function () {
            this.svg = d3.select("svg")
                .attr("height", "1000")
                .attr("width", "1000");
            return this.svg;
        };
        BPM.prototype.a = function () {
        };
        BPM.prototype.draw = function () {
            var svg = this.drawSvg();
            var node = this.root;
            var previousElement = null;
            var svgPosition = svg.getBoundingClientRect();
            var previousElementPosition = { left: svgPosition.left + 40, right: svgPosition.left + 40, top: svgPosition.height / 2 };
            for (var key in node) {
                var element = null;
                switch (key) {
                    case "Start":
                    case "End":
                        element = new Circle_1.default(previousElementPosition.right + 10, previousElementPosition.top, 20);
                        element.draw();
                        break;
                    case "Activity":
                        element = new Rectangle_1.default(previousElementPosition.right, previousElementPosition.top - 25, 100, 50);
                        element.draw();
                        break;
                }
                if (node.next) {
                    var position = element.getBoundingClientRect();
                    element = new Line_1.default(position.right, position.right + 100, position.top + position.height / 2, position.top + position.height / 2);
                    element.draw();
                    node = node.next;
                }
                previousElement = element;
                previousElementPosition = previousElement.getBoundingClientRect();
            }
        };
        return BPM;
    }());
});
/**
 *
 * for(var key in root){
             var width = 1000;
              var height = 1000;
             var svg= d3.select("svg")
              .attr("width",width)
              .attr("height",height)
            if(root[key] === "circle"){
             svg.append("circle")
                .attr("r", 10)
                .attr("cx", 10)
                .attr("cy", 10)
                .attr("fill", "blue");
            }
            if (typeof root[key] == "object") {
                for(var key1 in root[key]){
                        if(root[key][key1] === "line") {
                        svg.append("line")
                            .attr("x1", 30)
                            .attr("y1", 10)
                            .attr("x2", 60)
                            .attr("y2", 10)
                            .attr("stroke", "red")
                            .attr("stroke-width", 4);
                        }
                        if( typeof root[key][key1] === "object") {
                                for(var key2 in root[key][key1]) {
                                        if (root[key][key1][key2] === "rectangle") {
                                            svg.append("rect")
                                                .attr("x", 60)
                                                .attr("y", 10)
                                                .attr("width", 100)
                                                .attr("height", 100)
                                                .attr("fill", "blue");
                                        }
                                }
                        }
                }
    
            }

        }
 */ 

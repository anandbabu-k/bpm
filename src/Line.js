define(["require", "exports", "d3"], function (require, exports, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Line = /** @class */ (function () {
        function Line(x1, x2, y1, y2) {
            this.x1 = x1;
            this.x2 = x2;
            this.y1 = y1;
            this.y2 = y2;
        }
        Line.prototype.draw = function () {
            d3.select("svg")
                .append("line")
                .attr("x1", this.x1)
                .attr("y1", this.y1)
                .attr("x2", this.x2)
                .attr("y2", this.y2)
                .attr("stroke", "green");
        };
        return Line;
    }());
    exports.default = Line;
});

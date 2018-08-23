define(["require", "exports", "d3"], function (require, exports, d3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Circle = /** @class */ (function () {
        function Circle(cx, cy, r) {
            this.cx = cx;
            this.cy = cy;
            this.r = r;
        }
        Circle.prototype.draw = function () {
            d3.select("svg").append("circle")
                .attr("cx", this.cx)
                .attr("cy", this.cy)
                .attr("r", this.r)
                .attr("fill", "red");
        };
        return Circle;
    }());
    exports.default = Circle;
});

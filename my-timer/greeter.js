define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Greeter = void 0;
    var Greeter = /** @class */ (function () {
        function Greeter(element) {
            this.element = element;
        }
        Greeter.prototype.start = function () {
            var _this = this;
            setInterval(function () { return _this.element.innerHTML = new Date().toLocaleTimeString(); }, 500);
        };
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
//# sourceMappingURL=greeter.js.map
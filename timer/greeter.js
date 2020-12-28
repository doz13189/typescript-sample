define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.Greeter = void 0;
    var Greeter = /** @class */ (function () {
        function Greeter(element) {
            this.element = element;
            this.element.innerHTML += "The time is: ";
            this.span = document.createElement('span');
            this.element.appendChild(this.span);
            this.span.innerHTML = new Date().toUTCString();
        }
        Greeter.prototype.start = function () {
            var _this = this;
            console.log('start', this.element);
            this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
        };
        Greeter.prototype.stop = function () {
            clearInterval(this.timerToken);
        };
        return Greeter;
    }());
    exports.Greeter = Greeter;
});
//# sourceMappingURL=greeter.js.map
define(["require", "exports", "greeter"], function (require, exports, model) {
    "use strict";
    exports.__esModule = true;
    var el = document.getElementById('content');
    var gr = new model.Greeter(el);
    gr.start();
});
//# sourceMappingURL=app.js.map
import model = require('greeter')
var el = document.getElementById('content')
var gr = new model.Greeter(el)
gr.start()
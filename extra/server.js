// Modules
var express = require(`express`);
var path = require(`path`);

// Express Port/App Declaration
var PORT = process.env.PORT || 3000;
var app = express();

// Middleware
app.use(express.static(path.join(__dirname, 'public')));

// Controllers
var todosRoute = require(`../controllers/todos`);

// Routes
app.use(`/todos`, todosRoute);

app.get(`*`, function(req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

// Connection to PORT
app.listen(PORT, function() {
  console.log(`Listening On Port: ${PORT}`);
});

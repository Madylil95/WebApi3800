var express = require('express');
var app = express();

app.get('/gets', function(req,res){
  res.set('Content-Type', 'text/html');
  var s = "<html><body><table>";
  for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';
  s+="</table></body></html>";
  res.send('Get Lily!' +s);
});

app.post('/posts', function(req,res){
  res.set('Content-Type', 'text/html');
  var s = "<html><body><table>";
  for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';
  s+="</table></body></html>";
  res.send('Post Lily!' +s);
});

app.put('/puts', function(req, res){

  //var json = JSON.stringify(req.headers);

  res.set('Content-Type', 'text/html');
  var s = "<html><body><table>";
  for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';
  s+="</table></body></html>";
  res.send('Put Lily!' + s);

});

app.delete('/deletes', function(req, res){

  //var json = JSON.stringify(req.headers);

  res.set('Content-Type', 'text/html');
  var s = "<html><body><table>";
  for (var name in req.headers) s += '<tr><td>' + name + '</td><td>' + req.headers[name] + '</td></tr>';
  s+="</table></body></html>";
  res.send('Delete Lily!' + s);

});


app.use('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  err.message = "bad mojo";
  next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }

  res.send(err.message || '** no unicorns here **');
});
app.listen(5050);
module.exports = app;

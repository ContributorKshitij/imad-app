var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articleone = {
    title: 'article-one',
    heading: 'article-one',
    date: '9 march 2018',
    content: ` 
           <p>
            this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.
        </p>
    </div>
    <div>
        <p>
            this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.this is a paragraph.
        </p>`
};
function createTemplate(data){
var title = data.title;
var heading = data.heading;
var content = data.heading;
var date = data.date;
var Template =`<html>
<head>
     <link href="/ui/style.css" rel="stylesheet" />
    <title>${title}</title>
    <meta name="viewport"  content="width-device-width,initia-scale-1"/>
</head>    
<body>
    <div class="container">
    <div>
    <a href="/">HOme</a>
    </div>
    <hr>
    <div>
    <h2>${heading} </h2>
    </div>
    <div>${date}</div>
    <div>
       ${content}
    </div>
    </div>
</body>
</html>

`;
    return Template;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one',function(req,res){
   res.send(createTemplate(articleone));
});
app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
   
});
app.get('/article-three',function(req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

const express = require('express');
const app = express();
const port = 3030;
const bodyParser = require('body-parser');
const catsCtrl = require('./Controller/cats')

app.use(bodyParser.json());
//This is serving up a static file
app.use(express.static(__dirname + '/build'))


//5 main endpoints default Endpoints
app.get('/api/cats',catsCtrl.list)
app.get('/api/cats/:id',catsCtrl.read)
app.post('/api/cats',catsCtrl.create )
app.put('/api/cats/:id',catsCtrl.update )
app.delete('/api/cats/:id',catsCtrl.delete)


//funtion that we want to access
function addStuff(x,y){
    return x+y;
}
//funtion Endpoint/ second param callback/(request,response)
// res.send(cannot send numbers)
//params
app.get('/api/calculate/add/:x/:y', (req,res) => {
    let total = parseInt(req.params.x) + parseInt(req.params.y)
    res.send({total:total})
})
//body on get request??
//Front end code that you would send in 
//url queries
// axios.post(/api/calculate/sub, {x:5, y:7})
//Body
app.post('/api/calculate/sub', (req,res) => {
    console.log(req.body);
    if(!req.body.x || !req.body.y){
       return res.status(400).send('Must Provide X and Y Property on the body')
    }
        let total = req.body.x - req.body.y
        res.send({total:total})
})
//checking to see if the server is running
app.listen(port, () => {
    console.log('Listening on port: ' + port)
})
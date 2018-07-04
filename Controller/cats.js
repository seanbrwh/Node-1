let cats = ['Garfield','Max'];
module.exports = {
    list:  (req,res) =>{
        return res.send(cats)
    },
    read: (req,res) =>{
        let index = req.params.id;
        if(cats[index]){
            return res.send(cats[index]);
        }
        return req.status(404).send('No cat with that id')
    },
    create: (req,res) =>{
        //optionally check for req props on body
        cats.push(req.body)
        res.send('New cat Added')
    },
    update:(req,res) =>{
        if(!cats[req.params.id]){
            return res.status(404).send('No cat at that id')
        }
        cats[req.params.id] = req.body;
        res.send('Cat Updated')
    },
    delete:(req,res) =>{    
        if(!cats[req.params.id]){
            return res.status(404).send('No cat at that id to delete')
        }
        cats.splice(req.params.id, 1);
        res.send('Cat deleted')
    }
}

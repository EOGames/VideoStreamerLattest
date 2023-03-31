const express = require('express');
const cors = require('cors');
const movie = require('./movies');
const shows = require('./shows');

const app = express();

app.use(express.json());
app.use(cors());

//------------------------------Movies-------------------------

//#region 
app.get('/getMoviedata', async(req,res)=>
{
    let data = await movie.find();
    res.send(data);
});

app.post('/addMovie',async (req,res) =>
{
    let mov = new movie(req.body);
    let data = await mov.save();
    console.log(data);

    res.send(data);
});

app.get('/findMovieById/:_id', async(req,res)=>
{
    let data = await movie.findById(req.params._id);
    // console.log(req.params);
    res.send(data);
});

app.put ('/updateMovie/:_id', async(req,res)=>
{
    let data = await movie.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    console.log(data);
    res.send(data);
});

app.delete('/deleteMovie/:_id',async (req,res)=>
{
    let data = await movie.deleteOne(req.params);
    console.log(data);
    res.send(data);
});

//------------------------------Movies-------------------------
//#endregion


//------------------------------Shows-------------------------
//#region 
app.get('/getShowsData', async(req,res)=>
{
    let data = await shows.find();
    res.send(data);
});

app.post('/addShow',async (req,res) =>
{
    let show = new shows(req.body);
    let data = await show.save();
    console.log(data);

    res.send(data);
});

app.get('/findShowById/:_id', async(req,res)=>
{
    let data = await shows.findById(req.params._id);
    // console.log(req.params);
    res.send(data);
});

app.put ('/updateShow/:_id', async(req,res)=>
{
    let data = await shows.updateOne(
        req.params,
        {
            $set: req.body
        }
    );
    console.log(data);
    res.send(data);
});

app.delete('/deleteShow/:_id',async (req,res)=>
{
    let data = await shows.deleteOne(req.params);
    console.log(data);
    res.send(data);
});

//------------------------------Shows-------------------------
//#endregion

app.post('/login',(req,res)=>
{
    let result ='';
    if (req.body.name === 'admin' && req.body.password === 'admin123')
    {
        result = 'logged';
        console.log('Admin Logged In');
    }else
    {
         result = "Wrong User Or Password";
        console.log("Wrong User Or Password");
    }
    
    res.send(result);
});


app.listen(5100,()=>
{
    console.log("Server Up And Running On Port 5100");
});
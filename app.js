// .env rewuirement
require('dotenv').config();
const app = require('express')();


const exphbs  = require('express-handlebars');

const bodyParser = require('body-parser');
const fetch = require('node-fetch');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', (req,res) =>{
    var strArr = [];


    async function getWakaTimeHours() {

        // read our JSON
        let wakatimeUser1Response = await fetch(`https://wakatime.com/share/@novandev/8349336c-62a7-4ca1-97f5-1fb4dfd329b6.json`);
        let user1 = await wakatimeUser1Response.json();

        // read another Json
        let wakatimeUser2Response = await fetch(`https://wakatime.com/share/@novandev/8349336c-62a7-4ca1-97f5-1fb4dfd329b6.json`);
        let user2 = await wakatimeUser2Response.json();



        console.log(user1)
        console.log(user2)
    }

    getWakaTimeHours()

    res.render('home', {})
})

app.listen(process.env.PORT||3000, ()=>{
   console.log('Wakatime tracker on port 3000')
});
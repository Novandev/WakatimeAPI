const app = require('express')();


const exphbs  = require('express-handlebars');

const bodyParser = require('body-parser');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



app.listen(process.env.PORT||3000, ()=>{
   console.log('Wakatime tracker on port 3000')
});
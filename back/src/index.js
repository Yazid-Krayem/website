import {createServer} from 'http';
import app from './app'
import initializeDatabase from './db'



// const whenRequestReceived = (request,Response)=>{

//     writeHead(200,{'Content-type':'text/plain'});

//     Response.write("dsa");

//  }

//  const server = createServer(whenRequestReceived);

//  server.listen(8080,()=>{console.log("welcome to the back")});



app.get( '/', (req, res) => res.send("ok") );

app.listen( 8080, () => console.log('server listening on port 8080') )




const start = async () => {
  const controller = await initializeDatabase()
  const contacts_list = await controller.getContactsList()
  console.log(contacts_list)
  //app.get('/',(req,res)=>res.send("ok"));
  //app.listen(8080, ()=>console.log('server listening on port 8080'))
}

start();







const accountSid = 'ACbf023d64b1fa5d5b617c824c886b8df1';
const authToken = 'e79ccc1f7edcedd76d142abfd251101a';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hello Abdullah How Are You?',
        from: '+12562978151',
        to: '+923037445023'
    })
    .then(message => console.log(message.sid));



 const Websocket= require("ws");
 const express=require("express");
 const app= express();
 const server=require("http").createServer(app);
 const wss=new Websocket.Server({server});

 wss.on("connection",(ws) =>{

     console.log("New Connection initiated");


     ws.on("message",(message) => {

         const msg=JSON.parse(message);
         switch (msg.event) {

             case "connected":
                 console.log("A new call has cnnected");
                 break;
             case "start":
                 console.log(`Starting media stream ${ msg.stream }`);
                 break;
             case "media":
                 console.log("Receiving audio");
                 break;
             case "stop":
                 console.log("Call has ended");
                 break;
             default:
                 break;


         }



     });


 });


app.get("/", (req,res)=>res.send("Message Sent to Abdullah"));

 app.post("/",(req,res)=>{

     res.set("Content-Type","text/xml");
     res.send(
         `
 <Response>
   <Start>
   <Stream url="wss:// /">
   </Start>
   <Say> I will Stream the next 60 Seconds of audio through your websocket</Say>
   <Pause length="60" />
 </Response>




 `)

     }


 );



console.log("Listin on port 8080...");
server.listen(8080);




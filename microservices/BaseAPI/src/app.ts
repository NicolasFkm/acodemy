import express from "express";
import path from "path";
import bodyParser from "body-parser";
import router from "./routes";
import { database } from "./config/database";

(async () => {
    try{
        const server = express();
        
        const PORT = process.env.PORT || 3000;
        
        server.use(express.static("public"));
        
        server.use(bodyParser.urlencoded({extended: false}));
        
        server.use(router);

        database.authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch((err) => {
                console.log('Unable to connect to the database:', err);
            });
        
        await database.sync({force: true});

        server.listen(PORT, ()=>{
            console.log(`Server on at port ${PORT}!`);
        });
    }
    catch(e){
        console.log(e);
    }
  
  })();
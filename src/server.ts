import express from 'express';
import { db } from './config/mongodb.config.js';
import { injectRoutes } from './routes/inject.routes.js';

const app = express();
const port = process.env.PORT || 3000

injectRoutes(app);

// if(port === 3000) {
    db.on("open", () => {
        console.log("conexão com o banco estabelecida")
    })
    
    app.listen(port, () => {
        console.log(`app escutando em http://localhost:${port}`) 
    })
// }

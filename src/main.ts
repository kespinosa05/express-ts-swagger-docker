import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as methodOverride from 'method-override';

import { RegisterRoutes } from './routes/routes';  // here

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

const port = 3000;

const swaggerUi = require('swagger-ui-express');
try {
    var swaggerDocument = require('../api/dist/swagger.json');
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (err) {
    console.log('Unable to load swagger.json', err);
}


RegisterRoutes(app);  // and here

app.listen(port, () => console.log(`Server started listening to port ${port}`));



import server from './server'
import {NotificationsRouter} from "./presentation/routers/notifications-router";
import cors from 'cors';
import bodyParser from 'body-parser';
import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware';
// async function getPGDS() {
//
//     const db = new Pool({
//         user: 'postgres',
//         host: 'localhost',
//         database: 'CONTACTSDB',
//         password: '',
//         port: 5432,
//     })
//     return new PGContactDataSource(db)
// }


    // const dataSource = await getPGDS();
    server.use(cors());
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(awsServerlessExpressMiddleware.eventContext());

    server.use('/health', NotificationsRouter())

module.exports = { mainServer: server };

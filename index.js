import awsServerlessExpress from 'aws-serverless-express'
import mainServer from "./src/main";
const server = awsServerlessExpress.createServer(mainServer)

exports.handler = (event, context) => { awsServerlessExpress.proxy(server, event, context) }
import express from 'express'
import routes from './routes/index.js'
import expressRoutes from './../lib/index.js'

const app: express.Application = express()

app
    .get(
        '/',
        (req, res, next) => res.status(200).send('Express Routes')
    )

    .use(routes)

expressRoutes(app, {
    basePath: 'https://example.com',
    display: 'table'
})

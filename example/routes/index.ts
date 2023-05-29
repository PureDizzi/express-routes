import { Router } from 'express'
import subroute from './subroute/index.js'

export default Router()
    .use('/subroute', subroute)

    .get(
        '/',
        (req, res, _next) => res.sendStatus(200)
    )

    .get(
        '/:param1',
        (req, res, _next) => res.sendStatus(200)
    )

    .put(
        '/:param1',
        (req, res, _next) => res.sendStatus(200)
    )

    .post(
        '/',
        (req, res, _next) => res.sendStatus(200)
    )

    .delete(
        '/:param1',
        (req, res, _next) => res.sendStatus(200)
    )

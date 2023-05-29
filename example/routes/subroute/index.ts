import { Router } from 'express'

export default Router()
    .get(
        '/test/:param1/:param2/testEnd',
        (req, res, _next) => res.sendStatus(200)
    )

    .put(
        '/test/:param1/:param2',
        (req, res, _next) => res.sendStatus(200)
    )

    .post(
        '/test/:param1/:param2',
        (req, res, _next) => res.sendStatus(200)
    )

    .delete(
        '/test/:param1/:param2',
        (req, res, _next) => res.sendStatus(200)
    )

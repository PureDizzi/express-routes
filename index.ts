import express, { Request, Response, NextFunction } from 'express'

type Path = {
    path: string
    method: string
}

const generateRoutes = (stack: any[], basePath: string, paths: Path[] = []) => {
    stack.forEach(layer => {
        let text = `${layer.regexp.source.toString()}`
            .replace(/\?\$$/, '') // End
            .replace('?(?=\\/|$)', '') // End
            .replaceAll('(?:([^\\/]+?))', '::') // Params
            .replaceAll('\\/', '/') // Slashes
        
        text = text.replace(/^\^/, '') // Start

        layer.keys.forEach((key: { name: string}) => (text = text.replace('::', `:${key.name}`)))

        text = text.replaceAll(/\/+/g, '/') // Multiple slashes

        if (layer.route)
            paths.push({
                path: `${basePath}${text}`.replaceAll(/\/+/g, '/'),
                method: Object.keys(layer.route.methods).join(', ')
            })

        if (layer.handle.stack?.length)
            generateRoutes(layer.handle.stack, basePath + text, paths)
    })

    return paths
}

type options = {
    basePath?: string
    display?: string
}

const expressRoutes = (app: express.Application, options?: options) => {
    if (!app || !app._router) {
        console.error('Express Routes: No express app detected')
        return false
    }

    const routes = generateRoutes(app._router.stack, options?.basePath || '')

    const routesMap = new Map<string, string[]>()

    routes.forEach(route => {
        if (routesMap.has(route.path))
            routesMap.get(route.path)?.push(route.method)
        else
            routesMap.set(route.path, [route.method])
    })

    if (options?.display === 'table')
        console.table(routesMap)

    if (options?.display === 'log')
        console.log(routesMap)

    return routesMap.entries()
}

export default expressRoutes

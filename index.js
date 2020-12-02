function generateRoutes(stack, basePath, paths = []) {
    stack.forEach(layer => {
        const base = `${basePath}${layer.regexp.source}`
            .replace('\\/?(?=\\/|$)', '')
            .replace('^^\\', '')

        if (layer.route)
            paths.push({
                path: `${basePath}${layer.route.path}`,
                methods: Object.keys(layer.route.methods).join(', ')
            })

        if (layer.handle.stack?.length)
            generateRoutes(layer.handle.stack, base, paths)
    })

    return paths
}

function expressRoutes(app, basePath = '') {
    if (!app || app.name === 'app' || !app._router) {
        console.error('Express Routes: No express app detected')
        return false
    }

    console.table(generateRoutes(app._router.stack, basePath))
}

module.exports = expressRoutes

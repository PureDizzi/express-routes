# Express Routes

Display a table of all your express routes.

## Installation

```sh
npm i @puredizzi/express-routes
```

## Usage

Import module in your main file.

```js
import expressRoutes from '@puredizzi/express-routes'
```

Provide the express app to the expressRoutes module at the end of the file.

```js
expressRoutes(app, {
  baseURL: 'https:/www.example.com',
  display: 'table'
})
```

Another example using the returned array.

```js
const routes = expressRoutes(app, {
  baseURL: 'https:/www.example.com'
})

console.table(routes)
```

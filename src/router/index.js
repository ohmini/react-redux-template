import createRouter from 'router5'
import browserPlugin from 'router5/plugins/browser'

const createRoute = (name, path, children) => ({
  name, path, children
})

const routes = [
  createRoute('home', '/home'),
]

const options = {
  defaultRoute: 'home'
}

export const router = createRouter(routes, options)
.usePlugin(browserPlugin({
  useHash: false,
}))

import ReactDOMServer from 'react-dom/server'
import { createInertiaApp } from '@inertiajs/react'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { usePage } from '@inertiajs/react'

type PageProps = ReturnType<typeof usePage>

const appName = import.meta.env.VITE_APP_NAME || 'AdonisJS'

export default function render(page: PageProps) {
  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
      return resolvePageComponent(`./pages/${name}.tsx`, import.meta.glob('./pages/**/*.tsx'))
    },
    setup: ({ App, props }) => <App {...props} />,
  })
}

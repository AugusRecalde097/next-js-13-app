import '../styles/globals.css'

import { Navigation } from "./components/Navigation"

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <title>Mi primera página en NextJS</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

import { lazy } from 'react'

const Home = lazy(async () => await import('./Home'))

export { Home}

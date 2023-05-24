import { lazy } from 'react'

const Home = lazy(async () => await import('./Home'))
const About = lazy(async () => await import('./About'))

export { Home, About}

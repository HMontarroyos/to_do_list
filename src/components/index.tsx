import { lazy } from 'react'
import Buttom from './Buttom'
import Note from "./Note"

const Header = lazy(async () => await import('./Header'))

export {Buttom, Note, Header}

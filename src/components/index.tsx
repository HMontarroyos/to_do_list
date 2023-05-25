import { lazy } from 'react'
import Buttom from './Buttom'
import Note from "./Note"
import Modal from "./Modal"

const Header = lazy(async () => await import('./Header'))

export {Buttom, Note, Modal, Header}

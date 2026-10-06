import '../styles/main.css'
import '../styles/header.css'
import '../styles/footer.css'

import { createHeader } from './components/header.js'
import { createFooter } from './components/footer.js'

document.querySelector('#header').innerHTML = createHeader()
document.querySelector('#footer').innerHTML = createFooter()
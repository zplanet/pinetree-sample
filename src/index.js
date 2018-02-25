import React from 'react'
import ReactDOM from 'react-dom'

import { init } from 'pinetree'
import App from './App'

init(state => {
    state.message = 'hello pinetree'
    state.todos = []
})

ReactDOM.render(<App />, document.getElementById('root'))

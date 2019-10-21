import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import RecordCollector from './components/RecordCollector'

ReactDOM.render(
    <Router>
        <RecordCollector />
    </Router>
    , document.getElementById('root'))
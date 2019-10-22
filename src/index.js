import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css';
import RecordCollector from './RecordCollector'

ReactDOM.render(
    <Router>
        <RecordCollector />
    </Router>
    , document.getElementById('root'))
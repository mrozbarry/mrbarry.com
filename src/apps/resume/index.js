import React from 'react'
import { render } from 'react-dom'
import App from './App.js'
import data from "../../../public/assets/data/resume.json"

render(
  <App resume={data.resume} />,
  document.getElementById('root')
)

import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// const reactElement={
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children:'Click me to go to Google'
// }

const anotherElement=(
  <a href="https://google.com"  target='_blank'>Visit Google</a>
)

const reactElement=React.createElement(
  'a',
  {href:'http://google.com', target:'_blank'},
  'Click here to visit Google'
)

createRoot(document.getElementById('root')).render(

  reactElement
 
)

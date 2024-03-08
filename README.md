# Basic ReactJS 01
## index.html file

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
## main.jsx file
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp()
{
  return(
    <h1>Hello World</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <MyApp />
  
)

```
## App.jsx file
```jsx
import One from "./one"; // this file is just for understanding purpose that how we can manipulate the files

function App() {
  return (
    <>
      < One/>
      <h3>Welcome to My page</h3>
    </>
  )
}

export default App;

```
# 02

## main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'


function MyApp()
{
  return(
    <h1>Hello World</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  
  // <MyApp />
  MyApp()
  
)
```
# 03
## main.jsx
creating an element in react
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'


function MyApp()
{
  return(
    <h1>Hello World</h1>
  )
}

let reactElement = React.createElement(
  'h2',
  { },
  "Learning react"
)

let another = React.createElement(
  'a',
  {href:'https://github.com/Shubham6041/ReactJS'},
  "Click here"
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <>
    <MyApp/>
    {reactElement}
    {another}
    
  </>
  
  
)
```

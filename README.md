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
### creating an element in react
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
# 04
In React, you can use variables by embedding JavaScript expressions inside curly braces {} within JSX.
## app.jsx
```jsx

function App() {
  let sum = 2 + 2
  return (
    <>
      <h3>Welcome to My page</h3>
      <p>The sum is {sum}</p>
    </>
  )
}

export default App;
```
## main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'


function MyApp()
{

  let myName = "'Shubham'"
  
  return(
    <h1>Hello World {myName}</h1>
  )
}

let str = "Welcome"

let reactElement = React.createElement(
  'h2',
  { },
  "Learning react ",
  str
  
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
    {str}
    
  </>
  
  
)
```
# 05
## hooks
hooks are functions that allow you to use state and other react features in functional components.

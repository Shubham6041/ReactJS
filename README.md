# Basic ReactJS 01
# index.html file

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```
# main.jsx file
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

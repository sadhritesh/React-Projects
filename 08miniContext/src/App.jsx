import Parent from './components/Parent.jsx'
import MyComponent from './components/ShowUsers.jsx'
import {MyContext} from './context/userContext.js'

function App() {


  return (
    <>
      <MyContext.Provider value={{name:'Ritesh',age:21}} >
        <MyComponent />
        <Parent />
      </MyContext.Provider>
    </>
  )
}

export default App

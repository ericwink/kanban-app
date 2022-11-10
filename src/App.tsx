import {useState, createContext} from 'react'
import data from './data.json'
import TaskPreviewCard from './components/TaskPreviewCard'
import TaskViewCard from './components/TaskViewCard'
import {ThemeContext} from './context/ThemeContext'

function App() {
const [theme, setTheme] = useState('light')

const toggleTheme = () =>{
  setTheme(theme === 'light' ? 'dark' : 'light')
}

  return (
    <div className={`App ${theme}`}>
      <ThemeContext.Provider value={theme}>
      Main App Page
      {/* <TaskPreviewCard />  */}
      <TaskViewCard /> 

      <button onClick={toggleTheme}>Change Theme</button>
    </ThemeContext.Provider>
    </div>

  )
}

export default App



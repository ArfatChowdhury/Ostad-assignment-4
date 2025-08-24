
import { useContext, useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import List from './List'
import { ThemeContext } from './Provider/ThemeProvider'

function App() {
  const [initial, setInitial] = useState('')
  const [data,setData] = useState([])

function getInput(event){
  setInitial(event.target.value); 
  console.log(event.target.value);
  
}
 function getData(){
  let newData = [...data, initial]
  setData(newData)
  setInitial('')
 }

 function deleteTask(index){
  console.log(index);
  let updateData = data.filter((element, id) => {
    return id != index
    
  })
  setData(updateData)
 }


 const {theme } = useContext(ThemeContext)

  // ... existing code ...
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <Navbar></Navbar>
      <div className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} min-h-screen flex flex-col items-center w-full max-w-4xl mx-auto p-6`}>
        <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-lime-100'} w-full max-w-2xl p-6 rounded-lg shadow-lg mb-8`}>
          <div className="flex gap-3">
            <input 
              value={initial} 
              onChange={getInput} 
              className={`flex-1 p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                theme === 'dark' ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
              type="text" 
              placeholder='Type here' 
            />
            <button 
              onClick={getData} 
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                theme === 'dark' ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
            >
              Add
            </button>
          </div>
        </div>

        <div className={`${theme === 'dark' ? 'bg-gray-700' : 'bg-white'} w-full max-w-2xl rounded-lg shadow-lg p-6`}>
          <h2 className={`text-2xl font-bold mb-6 text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            List Of Tasks
          </h2>
          <div className='space-y-3'>
            {data.length === 0 ? (
              <p className={`text-center py-8 ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
              }`}>
                No Task yet!
              </p>
            ) : (
              data.map((da, index) => (
                <List key={index} da={da} deleteTask={deleteTask} index={index} theme={theme}></List>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )

}

export default App

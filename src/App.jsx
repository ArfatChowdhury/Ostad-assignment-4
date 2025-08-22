
import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import List from './List'

function App() {
  const [initial, setInitial] = useState('')
  const [data,setData] = useState([])

function getInput(event){
  setInitial(event.target.value); 
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


  return (
    <div>
      <Navbar></Navbar>
      <div className='bg-lime-200 h-screen flex flex-col items-center '>
        <div className='bg-amber-400'>
          <input value={initial} onChange={getInput} className='p-2 border-black border-1 rounded-l-lg focus:outline' type="text" placeholder='Type here' />
          <button onClick={getData} className='bg-blue-600 p-4 m-4 rounded-xl text-white'>Add</button>
        </div>

        <div className='bg-white '>
          List Of Tasks
          {
            data.map((da, index) => <List key={index} da={da} deleteTask={deleteTask}  index={index}></List>)
          }
        </div>
      </div>
    </div>
  )
}

export default App

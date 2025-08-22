
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
      <div className='bg-lime-200 h-screen flex flex-col items-center  w-1/2 mx-auto'>
        <div className='bg-green-400 p-4'>
          <input value={initial} onChange={getInput} className='p-2 border-black border-1 rounded-l-lg focus:outline' type="text" placeholder='Type here' />
          <button onClick={getData} className='bg-black p-4 m-4 rounded-xl text-white'>Add</button>
        </div>

        <div className='bg-white flex flex-col items-center justify-center w-1/2 mx-auto py-4'>
        <h2 className='text-xl font-bold mb-4'>List Of Tasks</h2>
          <div className='w-full px-4'>
          {data.length === 0 ? (<p>No Task yet!</p>) : (data.map((da, index) => <List key={index} da={da} deleteTask={deleteTask}  index={index}></List>))
            
          }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

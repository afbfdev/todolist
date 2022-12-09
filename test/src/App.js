import React, {useState} from 'react'
import './App.css';

function App() {
const [Recup,setRecup] = useState('');
const [Task,setTask] = useState([{Task:'La premiere tache', status : false}]);

const removeTache = (para) => {
   const newtask = Task.filter(element =>element.Task !== para)
  setTask(newtask)
} 

let tache = 'tache'
let lineThrough = 'barre'
let noLine = 'nonBarre'


return (
  <div className="App">

      <div className='search'>
          <form className = 'form'>
            <input type = 'text' placeholder='Short search' onChange = {
               (e) => {
              setTask([...Task.filter(n =>(n.Task.includes(e.target.value)))])
              console.log(e.target.value)}
            }>

            </input>
            <button className='searchIcone'><i className="fa-solid fa-magnifying-glass"></i></button>
          </form>



      </div>
    {
    Task.map((el) =>  
    
       (

        <div className={tache}>
          <p className={el.status === true ?  lineThrough :  noLine}> <input type='checkbox' onClick={()=> {
                    setTask([...Task.map(num =>
                      num.Task === el.Task ? {...num, status : !num.status} : num)])    
                    console.log(Task)
                  }} >

         </input>{el.Task} <button className='del' onClick={()=>removeTache(el.Task)}><i className="fa-solid fa-trash"></i> </button></p>
        </div>
      )
    )
  }
    <div className='add'>
      <input type = 'text' placeholder = 'ecrire une tâche' onChange={(e) => {setRecup(e.target.value)}}/>

      <button onClick={()=>{setTask([...Task, {Task:Recup}])
      }}><i className="fa-regular fa-square-plus"></i></button>
    </div>


  </div>
     
);
}

export default App;

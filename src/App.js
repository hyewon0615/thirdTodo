
import { useState } from 'react';
import './App.css';

const boxstyle = {
  border : "1px solid gray",
  margin : "10px",
  padding :"10px",
  width : "200px"
}

function App() {
  const [todos, setTodos] = useState([
    {
      id: 0,
      title: "morning",
      content: "어쩌구",
      isDone: false
    },
    {
      id: 1,
      title: "evening",
      content: "저쩌구",
      isDone: true
    },
    {
      id: 2,
      title: "afternoon",
      content: "어쩌라구",
      isDone: false
    }
  ])
  const [title, setTitle]=useState('')
  const [content, setContent]= useState('')
  const titleOnchange =(event)=>{setTitle(event.target.value)}
  const contentOnchange = (event)=>{setContent(event.target.value)}

  const addListHandler = function(){
    if(title===''||content===''){
      alert('공란없이 입력해주세요')
    }else{
      const newTodo = {
      id: todos.length +1,
      title,
      content,
      isDone: false
    }
    setTodos([...todos, newTodo])
    setTitle('')
    setContent('')
    }
    
  }
  const removeListHandler = function(id){
    const remove =todos.filter((item)=>{
      return id !== item.id
    })
    setTodos(remove)
  }
  const doneStateHandler = function(id){
    const change =todos.map((item)=>{
     if (id === item.id){
      return {...item, isDone: !item.isDone}
      //또 헷갈린 부분
     }else{
      return item
     }
  })
  setTodos(change)
}


  return (
    <div>
      <header>todolist</header>
      <div>
        제목 : <input value={title} onChange={titleOnchange}/>
      </div>
      <div>
        내용 : <input value={content} onChange={contentOnchange}/>
      </div>
      <button onClick={addListHandler}>추가</button>
      <div>
        <h2>working</h2>
        {todos
        .filter((item)=>{
          return item.isDone ===false
        })
        .map((item) => {
          return(<div key={item.id} style={boxstyle}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <>{item.isDone}</>
            <button onClick={()=>(doneStateHandler(item.id))}>완료</button>
            <button onClick={()=>(removeListHandler(item.id))}>삭제</button>
          </div>)
        })}
        <h2>Done</h2>
        {todos
        .filter((item)=>{
          return item.isDone ===true
        })
        .map((item) => {
          return(<div key={item.id} style={boxstyle}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
            <>{item.isDone}</>
            <button onClick={()=>(doneStateHandler(item.id))}>완료</button>
            <button onClick={()=>(removeListHandler(item.id))}>삭제</button>
          </div>)
        })}

      </div>

    </div>
  );
}

export default App;

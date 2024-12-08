import logo from './logo.svg';
import React, {useState} from 'react';
// State를 사용하기 위해 useState import
import './App.css';
import TodoBoard from './components/TodoBoard';

// Todo List 만들기
// 1. 인풋창이 있고 버튼이 있다
// 2. 인풋창에 값을 입력하고 버튼을 클릭하면 아이템이 추가된다
// 3. 아이템 삭제 버튼을 누르면 삭제가 가능하다.

function App() {
  // State 선언
  // 초기 값은 알 수 없으므로 빈 값
  const [inputValue,setInputValue] = useState('')
  
  // 아이템값을 모아두는 배열
  const [todoList, setTodoList] = useState([])
  // item 추가 버튼 누르면 호출되는 함수
  const addItem = () =>{
    console.log("im herererere!",inputValue)
    // 아이템 추가 
    // 기존 아이템 유지하고 새로 추가
    setTodoList([...todoList,inputValue])
  }
  
  return (
   <main>
    <input value={inputValue}type="text" onChange={(event)=>setInputValue(event.target.value)} />
    <button onClick={addItem}>추가</button>
   
    <TodoBoard todoList={todoList}/>
   </main>
  );
}

export default App;

import { addTodo,removeTodo, todosStore } from "../store/itemsStore";
import { useUnit } from "effector-react";
import { useState } from "react";

const TodoList = () => {
    const todos = useUnit(todosStore)

    const[inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        if (inputValue.trim()) {  
          addTodo(inputValue); 
          setInputValue('');
        }
      };

    return(
        <div>
      <div className="flex justify-between gap-5 my-10">
        <input
          className='flex-1 py-2 px-4 border border-gray-500 rounded'
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Введите дело"
        />
        <button className='border rounded border-gray-500 p-2 transition-colors hover:bg-slate-500 hover:text-white'
          onClick={handleAddTodo}>Добавить</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}
          className='flex justify-between items-center my-8'>
            {todo}
            <button className='border rounded border-gray-500 p-2 transition-colors hover:bg-slate-500 hover:text-white'
              onClick={() => removeTodo(index)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
    );
}

export default TodoList;
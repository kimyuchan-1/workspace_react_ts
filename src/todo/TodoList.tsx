import TodoInput from './TodoInput'
import TodoItem from './TodoItem'
import { useState, useEffect } from "react";
import { supabase } from "../supabase/client";

export interface Todo {
    id:number;
    text:string;
    completed:boolean;
}

export default function TodoList() {
    const [ todos, setTodos ] = useState<Todo[]>([]);
    const [ completed, setCompleted ] = useState(0);
    const [ imcompleted, setImcompleted ] = useState(0);
    const [ itemTags, setItemTags ] = useState<React.ReactElement[]>([]);

    const getTodos = async () => {
        const { data, error } = await supabase
            .from('todos')
            .select('*')
            .order('id', {ascending: true});

        if (error) {
            console.error("Error fetching todos: ", error.message);
            setTodos([]);
        } else {
            setTodos(data);
        }
    };

    useEffect(()=>{
        getTodos();
    },[]);

    useEffect(()=>{
        const c = todos.filter(item => item.completed == true).length;
        const ic = todos.filter(item => item.completed == false).length;
        const temp = todos.map(item => <TodoItem key = {item.id} 
                                         id = {item.id} 
                                         text = {item.text} 
                                         completed ={item.completed}
                                         getTodos = {getTodos}/>);
        setItemTags(temp);
        setCompleted(c);
        setImcompleted(ic);
        
    },[todos]);


    return (
        <div className='w-49/50 flex flex-col justify-center items-center'>
            <div className='w-full max-w-3xl flex flex-col justify-center items-center py-4'>
                <div className='flex justify-center items-center text-3xl font-bold pb-4 text-center'>To do list (Supabase Library)</div>
                <div className='w-full px-4 py-2 bg-amber-100 rounded-md'>
                    전체 : {todos.length}개 | 완료 : {completed}개 | 미완료 : {imcompleted}개
                </div>
            </div>
            <div className='w-full max-w-3xl flex flex-col justify-center items-center'>
            <TodoInput getTodos={getTodos} />
            {itemTags}
            </div>
        </div>
    )
}

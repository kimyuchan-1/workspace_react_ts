import TailButton from "../component/TailButton";
import { useRef } from "react";
import { supabase } from "../supabase/client";

interface TodoInputProps {
    getTodos: () => void;
}


export default function TodoInput({ getTodos }: TodoInputProps) {
    const txtRef = useRef<HTMLInputElement>(null);

    const insertTodo = async () => {
        const temp = txtRef.current?.value;

        if (!temp || temp.trim() === "") {
            alert("할 일을 입력하세요.");
            txtRef.current?.focus();
            return;
        }

        const { error } = await supabase
            .from('todos')
            .insert([
                { text: temp, completed: false },
            ]);
        if (error) {
            console.error('Error inserting todo:', error);
        } else {
            getTodos();
            if (txtRef.current) {
                txtRef.current.value = "";
                txtRef.current.focus();
            }
        }
    };

    return (
        <div className="w-full flex flex-row justify-between items-center">
            <input className="flex-1 h-10 border rounded-md 
                                  px-4 py-2 border-gray-400"
                type='text' placeholder="새로운 할 일을 입력하세요." ref={txtRef} />
            <TailButton caption="추가" color="blue" onHandle={insertTodo} />
        </div>
    )
}

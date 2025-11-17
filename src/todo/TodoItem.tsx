import TailButton from "../component/TailButton";
import { useState } from "react";
import { supabase } from "../supabase/client";

export default function TodoItem({ id, text, completed, getTodos }) {
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState(text);

    const delTodo = async () => {
        const { error } = await supabase
            .from('todos')
            .delete()
            .eq('id', id);
        if (error) {
            console.error('Error deleting todo:', error);
        } else {
            getTodos();
        }
    };

    const insertField = (e) => {
        e.preventDefault();
        setIsEdit(true);
    };

    const cancelTodo = (e) => {
        e.preventDefault();
        setValue(text);
        setIsEdit(false);
    };

    const updateTodo = async () => {
        const temp = value;

        if (temp == "") {
            alert("수정할 내용을 입력하세요.");
            return;
        }

        const { error } = await supabase
            .from('todos')
            .update({ text: temp })
            .eq('id', id);
        if (error) {
            console.error('Error updating todo:', error);
        } else {
            getTodos();
            setIsEdit(false);
        }
    };

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleCheck = async () => {
        const { error } = await supabase
            .from('todos')
            .update({ completed: !completed })
            .eq('id', id);
        if (error) {
            console.error('Error toggling todo:', error);
        } else {
            getTodos();
        }
    };

    return (
        <div className="w-full">
            {isEdit ?
                <div className="w-full mt-4 flex flex-row items-center py-2 h-13 ">
                    <input type="checkbox" className="mx-2 w-5 h-5 cursor-pointer" checked={completed} onChange={handleCheck} />
                    <input type="text" name={id} value={value} className="flex-1 h-10 p-2" onChange={handleInputChange} autoFocus />
                    <TailButton caption="완료" color="lime" onHandle={updateTodo} />
                    <TailButton caption="취소" color="orange" onHandle={cancelTodo} />
                </div>
                :
                <div className="w-full mt-4 flex flex-row items-center py-2 h-13 " >
                    <input type="checkbox" className="mx-2 w-5 h-5 cursor-pointer" checked={completed} onChange={handleCheck} />
                    <div className={`flex-1 p-2 ${completed ? "line-through" : ""}`} name={id}>{text}</div>
                    <TailButton caption="수정" color="lime" onHandle={insertField} />
                    <TailButton caption="삭제" color="orange" onHandle={delTodo} />
                </div>
            }
        </div>
    )
}

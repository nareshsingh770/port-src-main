import React, { useState, useEffect, useReducer } from 'react'
import List from './List'
import reducerCity from '../reducers/Reducers';

const getlocalData = () => {
    const allData = localStorage.getItem('ToDoList');
    if (allData) {
        return JSON.parse(allData);
    }
    else {
        return []
    }
}
const TodoList = () => {
    const [state, setState] = useState('add');
    const [text, setText] = useReducer(reducerCity, '');
    const [list, setList] = useState(getlocalData);



    const inputEvent = (e) => {
        setText({ type: 'INPUT_TYPE', element: e });
    }

    const addList = () => {

        if (text) {
            const listsAdd = {
                id: new Date().getTime().toString(),
                name: text,
            };
            console.log(listsAdd);
            setList([...list, listsAdd]);
            setText('');
        } else {
            alert("Cann't add empty item");
        }
    }
    const deleteLists = (id) => {
        setList((oldList) => {
            return oldList.filter((val) => {
                return val.id !== id;
            })
        })
    }
    const doneEdit = () => {
        const data = list
        data.forEach(val => {
            if (val.id === state) {
                val.name = text
            }
        })
        console.log(data)
        setText('')
        setList(data)
        setState('add')
    }
    const deleteAll = () => {
        setList([])
    }

    const editNotes = (id) => {
        list.forEach(val => {
            if (id === val.id) {
                setText(val.name)
                setState(id)
            }
        })

    }


    useEffect(() => {
        localStorage.setItem('ToDoList', JSON.stringify(list));
    }, [list, text])
    return (
        <>
            <div className="card todo-list-wrap">
                <div className="card-header"><h4>Add Items in TODO List</h4></div>
                <div className="card-body">
                    <label>Enter Items</label>
                    <input type="text" className='form-control' value={text} onChange={inputEvent} />
                </div>
                <div className="card-footer text-end">
                    {
                        state === 'add' ? <button className="btn btn-primary" onClick={addList}>Add</button> : <button className="btn btn-primary" onClick={doneEdit}>Done</button>
                    }
                </div>
            </div>
            <div className='text-center mb-5'>
                <button className="btn btn-outline-danger" onClick={deleteAll}>Delete All</button>
            </div>
            {
                list.map((val, ind) => {
                    return (
                        <List key={ind} id={val.id} edit={editNotes} list={val.name} deleteList={deleteLists} />
                    )

                })
            }



        </>
    )
}

export default TodoList;
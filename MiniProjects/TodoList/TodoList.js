import React, { useState, useEffect, useRef } from 'react'
import List from './List'

import { Card, Typography, Box, Paper, Container, CssBaseline, CardContent, TextField, Stack, Button, Table, TableBody, TableRow, TableCell, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoList, deletedList, deleteAllList, editedList } from '../../actions/Actions';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';
import CheckBox from '@mui/material/Checkbox';
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
const redC = red[500];
const greenC = green[500];



// const getlocalData = () => {
//     const allData = localStorage.getItem('ToDoList');
//     if (allData) {
//         return JSON.parse(allData);
//     }
//     else {
//         return []
//     }
// }
const TodoList = () => {
    const [editingAble, setEdit] = useState(0)
    const [marked, setMark] = useState(0)


    const noteText = useRef();
    const editedText = useRef();



    const dispatch = useDispatch();
    const allList = useSelector(state => state.todoList);



    const addList = () => {

        if (noteText.current.value) {


            const listsAdd = {
                id: new Date().getTime().toString(),
                name: noteText.current.value,
            };
            dispatch(addTodoList(listsAdd))
            noteText.current.value = ''

        } else {
            alert("Cann't add empty item");
        }
    }
    const deleteList = (id) => {

        dispatch(deletedList(id))
    }

    const doneEdit = (id) => {
        setEdit(0);
        dispatch(editedList({ name: editedText.current.value, id: id }))

    }
    const handleChange = (status, id) => {
        console.log(status, id)
        if (status)
            setMark(id)
    }

    useEffect(() => {
        // localStorage.setItem('ToDoList', JSON.stringify(list));
        // console.log(editingAble)
    }, [])
    return (
        <>

            <CssBaseline />
            <Container maxWidth='sm' sx={{ mt: '9rem' }}>
                <Card>
                    <CardContent>
                        <Typography variant='h5' textAlign='center' fontWeight='600'>To Do List</Typography>
                        <Stack mt={5} direction='row' spacing={2} mb={5}>
                            <TextField fullWidth label='Enter Notes...' inputRef={noteText} variant='outlined' />
                            <Button color='primary' variant='contained' onClick={addList} size='large'><AddIcon /></Button>
                        </Stack>


                        <Table className='todo-list-table' >
                            <TableBody>
                                {
                                    allList.map(elem => {
                                        return (
                                            <TableRow key={elem.id}>
                                                <TableCell sx={{ padding: '5px', width: '20px' }}>
                                                    <CheckBox color='primary' onChange={(e) => handleChange(e.target.checked, elem.id)} />
                                                </TableCell>
                                                <TableCell sx={{ padding: '5px' }}>
                                                    {
                                                        editingAble === elem.id ? <TextField inputRef={editedText} defaultValue={elem.name} /> :
                                                            <Typography className={marked === elem.id && 'marked-done'} variant='h6'>
                                                                {elem.name}
                                                            </Typography>
                                                    }
                                                </TableCell>
                                                <TableCell sx={{ textAlign: 'right', padding: '5px' }}>
                                                    <Stack direction='row' justifyContent='flex-end'>
                                                        {
                                                            editingAble === elem.id ?
                                                                <IconButton sx={{ color: greenC }} onClick={() => doneEdit(elem.id)}>
                                                                    <DoneOutlinedIcon />
                                                                </IconButton> :
                                                                <>
                                                                    <IconButton sx={{ color: greenC }} onClick={() => setEdit(elem.id)}>
                                                                        <ModeOutlinedIcon />
                                                                    </IconButton>
                                                                    <IconButton sx={{ color: redC }} onClick={() => deleteList(elem.id)}>
                                                                        <DeleteOutlineOutlinedIcon />
                                                                    </IconButton>
                                                                </>
                                                        }
                                                    </Stack>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                        <Box textAlign='right' mt={5} color='primary'>
                            <Button variant='outlined' onClick={() => dispatch(deleteAllList())}>Delete All</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
            {/* <div className="card todo-list-wrap">
                <div className="card-body">
                    <label>Enter Items</label>
                    <input type="text" className='form-control' value={text} onChange={inputEvent} />
                </div>
                <div className="card-footer text-end">
                    {
                        state === 'add' ? <button className="btn btn-primary" onClick={addList}>Add</button> : <button className="btn btn-primary" onClick={doneEdit}>Done</button>
                    }
                </div>
            </div> */}
            {/* <div className='text-center mb-5'>
                <button className="btn btn-outline-danger">Delete All</button>
            </div> */}
            {/* {
                list.map((val, ind) => {
                    return (
                        <List key={ind} id={val.id} edit={editNotes} list={val.name} deleteList={deleteLists} />
                    )

                })
            } */}



        </>
    )
}

export default TodoList;
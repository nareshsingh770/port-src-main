import React from 'react'

const List = (props) => {
    return (
        <>
            <div id={`list_${props.id}`} className='added-list d-flex justify-content-between align-items-center'>
                <h5>{props.list}</h5>
                <span className='controls'>
                    <i className="fa fa-pencil-square-o text-success mx-2" onClick={() => props.edit(props.id)} aria-hidden="true"></i>
                    <i className="fa fa-trash-o mx-2 text-danger" onClick={() => props.deleteList(props.id)} aria-hidden="true"></i>
                </span>
            </div>
        </>
    )
}

export default List

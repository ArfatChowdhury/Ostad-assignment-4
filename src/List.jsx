import React from 'react';
import { MdDeleteOutline } from "react-icons/md";

const List = ({da, index, deleteTask}) => {

    return (
        <div className='flex justify-between gap-6'>
            <h1 className='ml-4'>{da}</h1>
<button onClick={()=>deleteTask(index)}><MdDeleteOutline className='text-3xl mr-4'></MdDeleteOutline></button>
        </div>
    );
};

export default List;
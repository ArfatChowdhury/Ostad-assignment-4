import React from 'react';

const List = ({da, index, deleteTask}) => {

    return (
        <div>
            <h1>{da}</h1>
<button onClick={()=>deleteTask(index)}>delete</button>
        </div>
    );
};

export default List;
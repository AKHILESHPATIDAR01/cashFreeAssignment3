import React from 'react'
import { useParams } from 'react-router'

function SingleUserData() {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            {id}
        </div>
    )
}

export default SingleUserData

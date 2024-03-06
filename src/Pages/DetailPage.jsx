import React from 'react';
import Percatatan from '../components/Percatatan';

function DetailPage({ data }) {
    console.log(data)
    return (
        <>
            <h1>DetailPage</h1>
            <Percatatan  
            id={data.id}
            title={data.title}
            body={data.body}
            createdAt={data.createdAt}
            />
        </>
    );
}

export default DetailPage;

import React, { useEffect, useState } from 'react';
import NewUsersTable from '../NewUsersTable/NewUsersTable';

const NewUsers = () => {

    const [items, setItems] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/newusers')
        .then(res => res.json())
        .then(data => {
            setItems(data);
        })
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='card recent-sales overflow-auto' style={{ width: '100%' }}>
            <div className="card-body" style={{ width: '100%' }}>
                <h5 className="card-title">
                    New Users
                </h5>
                <NewUsersTable items={items}/>
            </div>
        </div>
    );
}

export default NewUsers;

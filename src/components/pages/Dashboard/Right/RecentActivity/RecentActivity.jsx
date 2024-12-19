import React, { useEffect, useState } from 'react'
import './RecentActivity.css'
import RecentAcivityItem from '../RecentActivityItem/RecentAcivityItem'

const RecentActivity = () => {

    const [items,setItems] = useState([]);


    const fetchData = () => {
        fetch('http://localhost:4000/activity')
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
        <div className='card'>
            <div className="card-body">
                <h5 className="card-title mb-4">
                    Recent Activity
                </h5>
                
                <div className="activity">
                    {items &&
                    items.length > 0 &&
                    items.map(item => (
                        <RecentAcivityItem key={item._id} item={item} />
                    ))
                    }
                </div>
            </div>
        </div>
    ) 
}

export default RecentActivity

import React, { useEffect, useState } from 'react'
import Card from '../Left/Card/Card';
import Reports from '../Left/Reports/Reports';
import NewUsers from '../Left/NewUsers/NewUsers';
import RecentActivity from '../Right/RecentActivity/RecentActivity';

const Contents = () => {


    const [cards,setCards] = useState([])

    const fetchData = () => {
        fetch('http://localhost:4000/cards')
        .then(res => res.json())
        .then(data => {
            setCards(data);
        })
        .catch(e => console.log(e.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {
                            cards && cards.length > 0 &&
                            cards.map(card => <Card key={card._id} card={card}/>)
                        }
                        <div className="col-12">
                            <Reports />
                        </div>
                        <div className="col-12">
                            <NewUsers />
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <RecentActivity />
                </div>
            </div>
        </div>
    )
}

export default Contents

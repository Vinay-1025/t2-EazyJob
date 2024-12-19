import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';
import Reports from '../Reports/Reports';

const Chart = () => {


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
                    </div>
                </div>
                <div className="col-lg-4">

                </div>
            </div>
        </div>
    )
}

export default Chart

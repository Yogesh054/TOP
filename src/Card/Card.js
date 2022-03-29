import './Card.css'
import React from 'react';
import a3 from './a3.jpg'

function Card(props) {
    const { id, email, first_name, last_name,avatar,sel,handleClickAction } = props;
    const onClick =() => {
        handleClickAction(id);
    };
    return (
        <div className={`ID ${sel? "Sel":""}`}onClick={onClick}>
            <img src={avatar} className='img'></img>
            <div className="card">

                
                <span className="text">Id:{id ? id : ""}</span>
                <br></br>
                <span className="text">Email:{email}</span>

                <br></br>
                <span className="text">First Name:{first_name}</span>
                <br></br>
                <span className="text">Last Name:{last_name}</span>
                <br></br>
                


            </div>

        </div>
    );
};
export default Card;
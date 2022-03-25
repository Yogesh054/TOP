import './Card.css'
import a3 from './a3.jpg'

function Card(props) {
    const { id, email, first_name, last_name,gender } = props;
    return (
        <div className="ID">
            <img src={a3} className='img'></img>
            <div className='card'>

                
                <span className="text">Id:{id}</span>
                <br></br>
                <span className="text">Email:{email}</span>

                <br></br>
                <span className="text">First Name:{first_name}</span>
                <br></br>
                <span className="text">Last Name:{last_name}</span>
                <br></br>
                <span className='text'>Gender:{gender==='m'?"Male":"Female"}</span>


            </div>

        </div>
    );
};
export default Card;
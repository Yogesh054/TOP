import React from "react";
import Card from "../Card/Card";
import "./Container.css"

const Container = () => {
    const [selectedcard, setselectedcard] = React.useState()
    const [spinner, setspinner] = React.useState(false)
    const [userlist, setuserlist] = React.useState([])

    React.useEffect(() => {
        setspinner(true);
        fetch("https://reqres.in/api/users?page=1")
            .then((response) => response.json())
            .then((usedata) => {
                setuserlist(usedata.data);
                setspinner(false);
            });
    }, []);
    const handleClickAction = (selectedcardName) => {
        setselectedcard(selectedcardName);
    };
    return (
        <div className="data">
            {spinner ? (<h2>Data is fetching</h2>) : ( userlist.map((Data) => {
                    const { id, email, first_name, last_name,avatar } = Data;
                    return <Card id={id} email={email} first_name={first_name} last_name={last_name} avatar={avatar} sel={selectedcard === id} handleClickAction={handleClickAction}></Card>;
                }))
            }

        </div>
    );
};

export default Container;
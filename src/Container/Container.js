import React from "react";
import Card from "../Card/Card";
import "./Container.css"

const Container = () => {
    const userlist = [{ id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', gender: 'm' }
        , { id: 2, email: 'janet.weaver@reqres.in', first_name: 'Janet', last_name: 'Weaver', gender: 'f' }
        , { id: 3, email: 'emma.wong@reqres.in', first_name: 'Emma', last_name: 'Wong', gender: 'f' }
        , { id: 4, email: 'eve.holt@reqres.in', first_name: 'Eve', last_name: 'Holt', gender: 'm' }
        , { id: 5, email: 'charles.morris@reqres.in', first_name: 'Charles', last_name: 'Morris', gender: 'm' }
        , { id: 6, email: 'tracey.ramos@reqres.in', first_name: 'Tracey', last_name: 'Ramos', gender: 'm' }
    ];
    return (
        <div className="data">
            {userlist.map((Data) => {
                const { id, email, first_name, last_name, gender, image } = Data;
                return <Card id={id} email={email} first_name={first_name} last_name={last_name} gender={gender} image={image}></Card>;
            })}

        </div>
    );
};

export default Container;
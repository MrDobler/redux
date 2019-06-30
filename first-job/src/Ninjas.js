import React from 'react';

export const Ninjas = (props) => {
    const { ninjas, deleteNinja } = props;
    const ninjaList = ninjas.map(({id, name, age, belt}) => {
        return (
            <div className="ninja" key={id}>
                <div>Name: { name }</div>
                <div>Age: { age }</div>
                <div>Belt: { belt }</div>
                <button onClick={() => {deleteNinja(id)}}>Del</button>
                <br></br>
                -------------------------
            </div>
        );
    });
    return ninjaList;
}


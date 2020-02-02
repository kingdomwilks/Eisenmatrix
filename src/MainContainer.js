import React, { useState } from 'react';
import Header from './Header';
import BoardContainer from './BoardContainer';

 

const MainContainer = () => {
    const [email,setEmail ] = useState('');
    console.log(email)

    if (email === '') {
        return (
            <div>
                <Header title="Eisenmatrix" onGetEmail={setEmail}/>
            </div>
        );
    }
    else return (
        <div>
                <Header title="Eisenmatrix" onGetEmail={setEmail}/>
                <BoardContainer email={email}/>
        </div>
    )
}

export default MainContainer;
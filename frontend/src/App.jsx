import React, { useState, useEffect } from 'react';

const App = () => {

    const [integrantes, setIntegrantes] = useState([]);
    const [integrante, setIntegrante] = useState("");
    const [count, setCount] = useState("");

    const handleAddIntegrante = () => {
        setIntegrantes([...integrantes, integrante]);
        setIntegrante("");
    }

    useEffect(()=>{
        setCount(integrantes.length)
    },[integrantes]);

    return (
        <div className="App">
            <div>
                <h1>Incluir Integrante</h1>
                <input
                    value={integrante}
                    onChange={(event) => setIntegrante(event.target.value)}
                />
                <button onClick ={handleAddIntegrante}>Adicionar</button>
            </div>
            <hr />
            <h1>Total: {count}</h1>
            <hr />
            <div>
            {
                integrantes.map((item, index) => (
                    <h1 key={index}>{index+1}. {item}</h1>
                ))
            }

            </div>
        </div>
    );
};

export default App;
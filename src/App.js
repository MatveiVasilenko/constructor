import React from 'react';
import './App.css';
import Toolbar from './modules/Toolbar/Toolbar.jsx'
import Constructor from './modules/Constructor/Constructor.jsx'
import Container from './components/Container/Container'
import {BlockFlex} from './components/Block'
import {ContextInput} from './context/Inputs/ContextInput.jsx'
import ReducerInput from './context/Inputs/ReducerInput.jsx'
import StateInput from './context/Inputs/StateInput.jsx'


function App() {

    const [state, dispatch] = React.useReducer(ReducerInput, StateInput);

    return (
        <ContextInput.Provider value={{state, dispatch}}>
            <Container>
                <BlockFlex>
                    <div style={{width: '30%'}}>
                        <Toolbar />
                    </div>
                    <div style={{width: '70%'}}>
                        <Constructor />
                    </div>
                </BlockFlex>
            </Container>
        </ContextInput.Provider>
    );
}

export default App;

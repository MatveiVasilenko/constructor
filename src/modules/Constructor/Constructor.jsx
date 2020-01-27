import React from 'react'
import Draggable from 'react-draggable';
import {ContextInput} from './../../context/Inputs/ContextInput.jsx'
import Tools from '../Tools/Tools.jsx'
import {ContextTools} from './../../context/Tools/ContextTools.jsx'
import ReducerTools from './../../context/Tools/ReducerTools.jsx'
import StateTools from './../../context/Tools/StateTools.jsx'


export default React.memo(() => {

	const {...Inputs} = React.useContext(ContextInput)
	const stateInputs = Inputs.state.items
	const dispatchInputs = Inputs.dispatch

    const [state, dispatch] = React.useReducer(ReducerTools, StateTools);

    const enableActiveItem = (props) => {
    	const indexItems = props.target.getAttribute('index')
    	dispatchInputs({
    		type: 'GHANGE_ACTIVE_INPUT',
    		payload: indexItems
    	})
    	dispatch({
    		type: 'ENABLE_TOOLS',
    		payload: false
    	})

    }

	return (
			<ContextTools.Provider value={{state, dispatch}}>
				<Tools/>
				<div id="field" style={{ width: '100%',  height: '600px', background: '#ccc'}}>
					{stateInputs.map((input, index) => {
						console.log(input.bold)
						return (
							<Draggable
								key={index}
						        axis="both"
						        handle=".handle"
						        defaultPosition={{x: 0, y: 0}}
						        position={null}
						        scale={1}
						        bounds={document.getElementById('field')}
						       
						        >
						          <div 
						          	style={{
						          		display: 'block',
						          		width: '200px',
						          		color: input.colorText,
						          		fontWeight: !input.bold ? '400' : '700',
						          		fontStyle: !input.style ? 'normal' : 'italic',
						          		textDecoration: !input.underline ? 'none' : 'underline',
						          		}} 
						          	className="handle"
						          	index={index}
						          	onClick={enableActiveItem}
						          	>{input.text}
						          </div> 
						    </Draggable>
						    )
					})}
					
				    

				</div>
			</ContextTools.Provider>
		)
})
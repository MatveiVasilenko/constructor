import React from 'react'
import {ContextInput} from './../../context/Inputs/ContextInput.jsx'

export default React.memo(() => {

	const {dispatch, ...Inputs} = React.useContext(ContextInput)
	const stateInputs = Inputs.state.items

	const addInputText = () => {
		dispatch({
			type: 'ADD_INPUT'
		})
	}
	
	return (
			<div>
				{stateInputs.map((input, index) => {
					return <input 
							key={index}
							type="text"
							value={input.text} 
							onChange={(e) => {
								dispatch({
									type: 'CHANGE_TEXT_INPUT',
									payload: {
										id: input.id,
										value: e.target.value
									}
								})
							}}
							style={{
								display: 'block',
							}}
							/>
				})}
				<button onClick={addInputText}>Add items</button>

			</div>
		)
})
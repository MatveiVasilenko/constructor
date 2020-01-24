import React from 'react'
import {ContextTools} from './../../context/Tools/ContextTools.jsx'
import {ContextInput} from './../../context/Inputs/ContextInput.jsx'


export default React.memo(() => {

	const {...stateTools} = React.useContext(ContextTools)
	const EnableFlag = stateTools.state.EnableFlag

	const {dispatch} = React.useContext(ContextInput)

	const changeBold = () => {
		dispatch({
			type: 'CHANGE_BOLD'
		})
	}
	const changeStyle = () => {
		dispatch({
			type: 'CHANGE_STYLE'
		})
	}
	const changeUnderline = () => {
		dispatch({
			type: 'CHANGE_UNDERLINE'
		})
	}

	return (
			<div>
				<button onClick={changeBold} disabled={EnableFlag}>B</button>
				<button onClick={changeStyle} disabled={EnableFlag}>I</button>
				<button onClick={changeUnderline} disabled={EnableFlag}>U</button>
			</div>
		)
})
import React from 'react'
import {ContextTools} from './../../context/Tools/ContextTools.jsx'
import {ContextInput} from './../../context/Inputs/ContextInput.jsx'
import { SketchPicker } from 'react-color'


export default React.memo(() => {

	const {...stateTools} = React.useContext(ContextTools)
	const EnableFlag = stateTools.state.EnableFlag

	const {state, dispatch} = React.useContext(ContextInput)

	console.log(state)

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

	const handleChangeComplete = (color) => {
		dispatch({
			type: 'CHANGE_COLOR_TEXT',
			payload: {
				color: color.hex
			}
		})
	}

	return (
			<div>
				<button onClick={changeBold} disabled={EnableFlag}>B</button>
				<button onClick={changeStyle} disabled={EnableFlag}>I</button>
				<button onClick={changeUnderline} disabled={EnableFlag}>U</button>
				<SketchPicker
					color={state.items[state.activeInput].colorText}
       				onChange={ handleChangeComplete }
				/>
			</div>
		)
})

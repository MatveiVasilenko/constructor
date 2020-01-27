const ReducerInput = (state, action) => {

    switch(action.type) {
        case 'ADD_INPUT' :
        const newItems = {id: state.items + 1,
            text: 'Test item1',
            bold: false,
            style: false,
            underline: false,
            colorText: "#000",}
        state.items.push(newItems)
        console.log(state)
        return {
            ...state
        } 
    	case 'CHANGE_TEXT_INPUT' :
    	state.items[action.payload.id - 1].text = action.payload.value
    	return {
    		...state
    	} 
    	case 'GHANGE_ACTIVE_INPUT' :
    	state.activeInput = action.payload
    	return {
    		...state
    	} 
    	case 'CHANGE_BOLD' :
    	state.items[state.activeInput].bold = !state.items[state.activeInput].bold 
    	return {
    		...state
    	} 
    	case 'CHANGE_STYLE' :
    	state.items[state.activeInput].style = !state.items[state.activeInput].style 
    	return {
    		...state
    	} 
    	case 'CHANGE_UNDERLINE' :
    	state.items[state.activeInput].underline = !state.items[state.activeInput].underline 
    	return {
    		...state
    	} 
        case 'CHANGE_COLOR_TEXT' :
        state.items[state.activeInput].colorText = action.payload.color
        return {
            ...state
        } 
        default:
            return state
    }
};
export default ReducerInput
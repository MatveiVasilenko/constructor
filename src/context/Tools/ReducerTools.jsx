const ReducerTools = (state, action) => {

    switch(action.type) {
    	case 'ENABLE_TOOLS' :
    	state.EnableFlag = action.payload
    	return {
    		...state
    	}
        default:
            return state
    }
};
export default ReducerTools
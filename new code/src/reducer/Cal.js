import { v4 as uuidv4 } from 'uuid';
/**
 * Redux Reducer
 * A reducer will actually carry out the manipulation/mutation on the
 * state data. It should expect an "action" to be passed in with any
 * necessary target data to perform its duty.
 */
const calReducer = ( state = [], action ) => { // Default state is an empty array here.
    switch ( action.type )
    {
      // What happens if we are adding a new Result
      case 'ADD_RESULT':
        // Set up new result
        const newResult = {
        uniqueId: uuidv4(), // Ensure a unique ID.
        value: action.value 
        };
        console.log(action.value); //check the value
        // Create a new array ( with the same contents as the original.)
        const updatedState = state.slice();
        // Add this result to the state.
        updatedState.push( newResult );
        // Return the updated state value.
        return updatedState;
        case 'REMOVE_RESULT':
            // Returns a filtered version of the array, leaving only the items that DIDN'T match the "id" parameter.
            state = state.filter( result => result.uniqueId !== action.value ); // We'll have an array without the target!
            // Return the updated state value.
            return state;
        
    }
}
export default calReducer;
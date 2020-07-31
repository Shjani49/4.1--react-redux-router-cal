/**
 * Redux Actions
 * Actions are "labels" for what type of functionality/manipulation
 * we will be performing/allowing on our global state data.
 * The action "names" ('type' property values), by convention, are
 * uppercase as they are representing a "constant" value.
 */
const addResult = resultContent => {
    return {
      type: 'ADD_RESULT', // Our action "label."
      value: resultContent // We can also transport necessary info that the reducer might need.
    }
  }
  const removeResult = resultId => {
    return {
      type: 'REMOVE_RESULT', // Our action "label."
      value: resultId // For removal, we need a unique identifier.
    }
    
  }
  
  export { addResult, removeResult };
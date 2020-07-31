import React from 'react';
import { connect } from 'react-redux';
import Cal from './Cal';


class PastCal extends React.Component{

render()
{
    return(
        <>
        <h1>Past Calculation...</h1>
        <ul>
          {this.props.results.map(result => ( // We can use .map() to "loop" through our array contents. Great for outputting something like these ToDos.
            <Cal
              key={result.uniqueId}
              uniqueId={result.uniqueId}
              text={result.value} />
          ))}
        </ul>
        </>
    );
}

}


  export default connect(
    state => { return { results: state } }
  )(PastCal); 
 

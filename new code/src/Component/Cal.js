import React from 'react';
import { removeResult } from '../actions/Cal';
import { connect } from 'react-redux';

class Cal extends React.Component{
    
    deleteResult = () =>
    {
      // We'll grab our ID from props.
      const id = this.props.uniqueId;
      console.log( id ); // Check if we got it.
      // Tell the reducer to do its magic!
      this.props.dispatch( removeResult( id ) );
    }
   
    render()
    {
        return ( 
            <li>
                <input type="checkbox" onClick={this.deleteResult} />
                {this.props.text}
            </li>
        );
    }
}
export default connect(
    null
)(Cal);
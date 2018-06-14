import React, { Component } from 'react';
import { connect } from 'react-redux';

class scoreWindows extends Component {

    render() {
        console.log(this.props.garbage)
        return (
            <div className="score-windows">
                <h3>Score actuel</h3>
                <p className="score">{this.props.score}</p>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        score: state.score
    }
}
export default connect(mapStateToProps)(scoreWindows);

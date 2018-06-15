import React from 'react'
import { connect } from 'react-redux';

const scoreWindows = (props) => {
    console.log(props.score)
    return (
        <div className="score-windows">
            <h3>Score actuel</h3>
            <p className="score">{props.score.score}</p>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        score: state.score
    }
}
export default connect(mapStateToProps)(scoreWindows);

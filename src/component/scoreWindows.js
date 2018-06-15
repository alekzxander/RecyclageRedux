import React from 'react'
import { connect } from 'react-redux';
import { indiceResult } from '../config/resultConfig'

const scoreWindows = (props) => {
    const { score } = props.score;
    return (
        <div className="score-windows">
            <h3>Score actuel</h3>
            <p className="score" style={{ color: indiceResult(score) }}>{score}</p>

        </div>
    )
}

function mapStateToProps(state) {
    return {
        score: state.score
    }
}
export default connect(mapStateToProps)(scoreWindows);

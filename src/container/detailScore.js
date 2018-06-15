import React, { Component } from 'react';
import { connect } from 'react-redux';
import { indiceResult, indiceGarbage } from '../config/resultConfig'

class DetailScore extends Component {
    render() {
        let goodResultList;
        let badResultList;
        const { goodResult, badResult, score } = this.props.score;
        if (badResult) {
            badResultList = badResult.map((bad, i) => {
                // Traduction en français des poubelles
                let traductColor;
                if (bad.type === 'yellow') {
                    traductColor = 'Jaune'
                } else if (bad.type === 'green') {
                    traductColor = 'Verte'
                } else if (bad.type === 'blue') {
                    traductColor = 'Bleu'
                } else if (bad.type === 'marron') {
                    traductColor = 'Marron'
                }
                return (
                    <li key={i}>
                        <span style={{ color: 'red', textTransform: 'uppercase' }}>{bad.wast}</span> se range dans la poubelle <strong style={{ color: indiceGarbage(traductColor) }}>{traductColor}</strong>
                    </li>
                )
            })
        }
        if (goodResult) {
            goodResultList = goodResult.map((good, i) => {
                // Traduction en français des poubelles
                let traductColor;
                if (good.type === 'yellow') {
                    traductColor = 'Jaune'
                } else if (good.type === 'green') {
                    traductColor = 'Verte'
                } else if (good.type === 'blue') {
                    traductColor = 'Bleu'
                } else if (good.type === 'marron') {
                    traductColor = 'Marron'
                }
                return (
                    <li key={i}>
                        Bien joué ! <span style={{ color: 'green', textTransform: 'uppercase' }}>{good.wast}</span> se recycle bien dans la poubelle <strong style={{ color: indiceGarbage(traductColor) }}>{traductColor}</strong>
                    </li >
                )
            })
        }
        return (
            <div>
                {/* <Header /> */}
                < h1 className="text-center" style={{ marginTop: '50px' }}>Détails des scores</h1 >
                <div className="container">
                    <div className="details-score">
                        <div className="row">
                            <div className="col-md-8">
                                <h3 className="text-center">Détails</h3>
                                <ul>
                                    {goodResultList}
                                </ul>
                                <ul>
                                    {badResultList}
                                </ul>
                            </div>
                            <div className="col-md-4">
                                <h3 className="text-center">Total</h3>
                                <p className="score text-center" style={{ color: indiceResult(score) }}>{score}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}
function mapStateToProps(state) {
    return {
        score: state.score
    }
}
export default connect(mapStateToProps)(DetailScore)
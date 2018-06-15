import React, { Component } from 'react';
import Header from '../component/header';
import { connect } from 'react-redux';

class DetailScore extends Component {
    render() {
        let goodResult;
        let badResult;
        console.log(this.props.score)
        if (this.props.score.badResult) {
            badResult = this.props.score.badResult.map((bad) => {
                return (
                    <li>
                        <span style={{ color: 'red' }}>{bad.wast}</span> se range dans la poubelle {bad.type}
                    </li>
                )
            })
        }

        if (this.props.score.goodResult)  {
            goodResult = this.props.score.goodResult.map((good) => {
                return (
                    <li>
                        Bien joué ! <span style={{ color: 'red' }}>{good.wast}</span> se recycle bien dans la poubelle {good.type}
                    </li>
                )
            })
        }
        return (
            <div>
                <Header />
                <h1 className="text-center" style={{ marginTop: '50px' }}>Détails des scores</h1>
                <div className="container">
                    <div className="details-score">
                        <div className="row">
                            <div className="col-md-6">
                                <h3 className="text-center">Détails</h3>
                                <ul>
                                    {goodResult}
                                </ul>
                                <ul>
                                    {badResult}
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <h3 className="text-center">Total</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        score: state.score
    }
}
export default connect(mapStateToProps)(DetailScore)
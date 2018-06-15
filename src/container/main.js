import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { castInGarbage, dropWast, calculScore } from '../action/index';
import Header from '../component/header';
import Scorewindows from '../component/scoreWindows';
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWast: [],
            wastForGarbage: {},
            getAllwast: []
        }
    }
    getSelectWast(wast, type) {
        this.setState({
            selectedWast: wast,
            wastForGarbage: {
                wast, type
            }
        })
    }
    castInGarbage(wast, garbage) {
        this.props.calculScore(wast, garbage)
        this.props.dropWast(wast)
        this.props.castInGarbage(wast, garbage)
        this.setState({
            wastForGarbage: {}
        })
    }
    displayWast(list) {
        if (list) {

            if (list.length <= 0) {
                console.log('ooooooook')
                return (
                    <div>
                        <h2>Bravo tout les dêchets ont etait débarassés</h2>
                        <Link className="btn btn-primary btn-lg" to="/score">
                            Détails du score
                        </Link>
                    </div>
                )
            }
        }

    }
    render() {
        let wastList;
        if (this.props.wast) {
            wastList = this.props.wast.map((w, i) => {
                return (
                    <li className={this.state.selectedWast.indexOf(w.name, w.type) > -1 ? 'wast-item-selected' : 'wast-item'} onClick={() => { this.getSelectWast(w.name, w.type) }} key={i}>{w.name}</li>
                )
            })

        }
        return (
            <div>
                <Header />
                <Scorewindows />
                <div className="container">
                    <div className="garbage">
                        <button onClick={() => { this.castInGarbage(this.state.wastForGarbage, 'yellow') }}><i className="fa fa-trash fa-4x" style={{ color: '#E0D42B' }}></i></button>
                        <button onClick={() => { this.castInGarbage(this.state.wastForGarbage, 'green') }}><i className="fa fa-trash fa-4x" style={{ color: '#0B2E13' }}></i></button>
                        <button onClick={() => { this.castInGarbage(this.state.wastForGarbage, 'blue') }}><i className="fa fa-trash fa-4x" style={{ color: '#16193D' }}></i></button>
                        <button onClick={() => { this.castInGarbage(this.state.wastForGarbage, 'marron') }}><i className="fa fa-trash fa-4x" style={{ color: '#69471E' }}></i></button>
                    </div>
                    <div className="wast-container">
                        <ul>
                            {wastList}
                            {this.displayWast(wastList)}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        wast: state.wast,
        garbage: state.garbage
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        castInGarbage,
        dropWast,
        calculScore
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
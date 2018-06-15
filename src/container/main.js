import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { castInGarbage, dropWast, calculScore, getWaste } from '../action/index';
import Scorewindows from '../component/scoreWindows';
import DetailScore from './detailScore';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWast: [],
            wastForGarbage: {},
            getAllwast: []
        }
    }
    componentDidMount = () => {
        this.props.getWaste()
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
        // Je verifie qu'il est bien un objet dans wast, dans le cas contraire j'appelle aucune action
        if (Object.keys(wast).length > 0 && wast.constructor === Object) {
            this.props.calculScore(wast, garbage) // J'appelle l'action qui calcule le score a chaque entrée         
            this.props.dropWast(wast)  // J'appelle une action qui applique un filter pour retirer l'element recyclé          
            this.props.castInGarbage(wast, garbage) // Ajoute dans un tableau le wast en fonction du garbage(type)
        }
        // Je reinitialise mon state aprés utilisation
        this.setState({
            wastForGarbage: {}
        })
    }
    displayWast(list) {
        if (list) {
            if (list.length <= 0) {
                return (
                    <div>
                        < DetailScore />
                    </div>
                )
            }
        }

    }
    render() {
        const { wast } = this.props;
        const { selectedWast, wastForGarbage } = this.state;
        console.log(selectedWast)
        let wastList;
        if (wast) {
            wastList = wast.map((w, i) => {
                return (
                    // Si l'element selectionner est dans le tableau, alors je change sa classe
                    <li className={selectedWast.indexOf(w.name) > -1 ? 'wast-item-selected' : 'wast-item'} onClick={() => { this.getSelectWast(w.name, w.type) }} key={i}>{w.name}</li>
                )
            })

        }
        return (
            <div>

                <Scorewindows />
                <div className="container">
                    <div className="garbage">
                        {/* Au click sur une poubelle j'appelle ma fonction en recuperer le type et le wast stocker dans mon state */}
                        <button onClick={() => { this.castInGarbage(wastForGarbage, 'yellow') }}><i className="fa fa-trash fa-4x" style={{ color: '#E0D42B' }}></i></button>
                        <button onClick={() => { this.castInGarbage(wastForGarbage, 'green') }}><i className="fa fa-trash fa-4x" style={{ color: '#0B2E13' }}></i></button>
                        <button onClick={() => { this.castInGarbage(wastForGarbage, 'blue') }}><i className="fa fa-trash fa-4x" style={{ color: '#16193D' }}></i></button>
                        <button onClick={() => { this.castInGarbage(wastForGarbage, 'marron') }}><i className="fa fa-trash fa-4x" style={{ color: '#69471E' }}></i></button>
                    </div>
                    <div className="wast-container">
                        <ul>
                            {wastList}
                        </ul>
                    </div>
                    {this.displayWast(wastList)}
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        wast: state.wast,
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        castInGarbage,
        dropWast,
        calculScore,
        getWaste
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)
import React, { Component } from 'react'
import { getWaste } from '../action/index'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from './main';
class App extends Component {

  componentDidMount = () => {
    this.props.getWaste()
  }

  render() {
    return (
      <div>
        <Main />
      </div>
    )
  }
}

function mapStateToProps(state) {

}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getWaste,
    },
    dispatch
  );
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react'
import { getWaste } from '../action/index'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Main from './main';
import DetailScore from './detailScore'
import { BrowserRouter as Router, Route } from "react-router-dom";
class App extends Component {

  componentDidMount = () => {
    this.props.getWaste()
  }

  render() {
    return (
      <div>
        <Router>
          <Route exact path="/" component={Main} />
        </Router>
        <Router>
          <Route exact path="/score" component={DetailScore} />
        </Router>

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

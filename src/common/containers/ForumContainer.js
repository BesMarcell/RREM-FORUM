import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Forum from '../components/Forum';
import * as actions from '../actions/actions';
import {receiveAuth} from '../actions/authActions';


class ForumContainer extends Component {
  componentWillMount() {
    const { dispatch, user, messages } = this.props;
    if(!user.username) {
      dispatch(receiveAuth());
    }
    dispatch(actions.fetchMessages());
  }
  render() {
    return (
      <div>
        <Forum {...this.props} />
      </div>
    );
  }
}

ForumContainer.PropTypes = {
	user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
}

const mapStateToProps =  (state) => {
	return {
		user: state.auth.user,
		messages : state.messages.data
	}
}

export default connect(mapStateToProps)(ForumContainer);

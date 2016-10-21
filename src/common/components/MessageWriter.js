import React, {Component} from 'react';
import { Button, Input } from 'react-bootstrap';
import moment from 'moment';
import uuid from 'node-uuid';

export default class MessageWriter extends Component {
	constructor (props, context) {
		super(props, context);
		this.state = {
			messageText : '' 
		}
	}

	handleSubmit(event) {
    
    const { user} = this.props;
    const text = event.target.Message.value;
      event.preventDefault();
      var newMessage = {
        id: `${Date.now()}${uuid.v4()}`,
        text: text,
        user: user,
        time: moment().format('lll')
      };
      this.props.onSave(newMessage);
      this.setState({ messageText: ''});
    
  }
	handleChange(event) {
		this.setState({messageText : event.target.value});
	}


	render () {
		return (
			<div className="row">
				<div className="col-sm-5 col-md-3">
				</div>
			<div className="col-sm-10 col-md-6">
			<div className='panel-body rightB'>
				<form onSubmit={::this.handleSubmit}>
				<Input
	              ref="Message"
	              type="textarea"
	              rows="5"
	              name="Message"
	              placeholder="Enter Message"
	              value = {this.state.messageText}
	              onChange={::this.handleChange} />
				<Button 
					bsStyle="success"
					type="submit"
	              	name="sendButton">
					<p>SEND</p>
				</Button>
				</form>	
			</div>	
			</div>
			</div>
			)
	}
}
import React, {Component} from 'react';
import { Modal, Button, Input } from 'react-bootstrap';
import * as authActions from '../actions/authActions';
import * as actions from '../actions/actions';
import MessageArea from './MessageArea';
import MessageWriter from './MessageWriter';
import Message from './Message';

import moment from 'moment';
import uuid from 'node-uuid';

export default class Forum extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      ReplyModalMessage: false,
      messageText : '',
      messageId : '',
    };
  }

componentDidMount(){
	const { user, messages, dispatch } = this.props;
}

  handleSignOut() {
    const { dispatch } = this.props;
    dispatch(authActions.signOut());
  }

	handleSave(newMessage) {
    const { dispatch } = this.props;
    if (newMessage.text.length !== 0) {
      dispatch(actions.createMessage(newMessage));
    }
  }

  handleReply(message) {
  	this.setState({ReplyModalMessage : true});
    this.setState({messageId : message.id});
    this.setState({message : message});
  }

    handleReplyEnd() {
  	this.setState({ReplyModalMessage : false});
  }

  handleSubmit(event) {
    
    const { user} = this.props;
    const text = event.target.Message.value;
      event.preventDefault();
      var newMessage = {
        id: `${Date.now()}${uuid.v4()}`,
        text: text,
        user: user.username,
        time: moment().format('lll'),
        reply: this.state.message.id
      };
      this.handleSave(newMessage);
      this.setState({ messageText: ''});
      this.setState({ messageId: ''});
      this.setState({ReplyModalMessage: false});
    
  }
	handleChange(event) {
		this.setState({messageText : event.target.value});
	}



render(){
	const username = this.props.user.username;
	const { messages} = this.props;
  const messageId = this.state.messageId;

	const ReplyModal = (
      <div>
        <Modal bsSize="large" key={1} show={this.state.ReplyModalMessage} onHide={::this.handleReplyEnd}>
        <Modal.Header>
          <b>Reply the message</b>
        </Modal.Header>
        <Modal.Body>
	       
         <form onSubmit={::this.handleSubmit}>
					<Input
		              ref="MessageReply"
                  autoFocus="true"
		              type="textarea"
		              rows="5"
		              name="Message"
		              placeholder="Enter Message"
		              value = {this.state.messageText}
		              onChange={::this.handleChange} />
          <div className='rightB'>
          
          <Button 
						bsStyle="success"
						type="submit"
		        name="sendButton">
						<p>SEND</p>
					</Button>    
          {" "}
          <Button 
            onClick={this.handleReplyEnd.bind(this)}
            bsStyle="info" >
            <p>CLOSE</p>
          </Button>
          </div>
			</form>	
      
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
        </Modal>
      </div>
    );

	return(
		<div style={{background: '#337ab7', color: 'white'}}>
			<div className="navbar navbar-inverse">
				<h4><span className="navbar-text">Here is Forum. Hi {username}</span></h4>
				<div style={{marginRight: '3em'}} className='rightB'>
					<Button
	              		bsStyle="info"
	              		name="submitButton"
	              		onClick={::this.handleSignOut}>
	                	<p style={{color: 'white', margin: '0', padding: '0', fontSize: '1.5em'}} >Sign Out</p>
	         </Button>
        </div>
			</div>
			
			{ReplyModal}
			<MessageArea messages = {messages}  handleReply = {::this.handleReply} />
			<MessageWriter onSave={::this.handleSave} user = {username}/>
		</div>
		)
}
}
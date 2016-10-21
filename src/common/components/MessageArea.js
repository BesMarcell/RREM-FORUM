import React, {Component} from 'react';
import { Button, Input } from 'react-bootstrap';
import Message from './Message';

export default class MessageArea extends Component {

		combineParentMessages(reply) {
		let combineParentArr = [];
			let deeper = reply => {
				let parent = this.props.messages.filter((message) => message.id == reply);
				let parentMessage = parent[0].user + '->' + parent[0].time + '->' + parent[0].text;
				combineParentArr.push(parentMessage);
				if (parent[0].reply) {
					deeper(parent[0].reply)
				}
			}		
		if (reply) {deeper(reply)}
		return combineParentArr.reverse()
	}

	render () {
		const messages = this.props.messages.map( (message) => 
			{return <Message message = {message} key={message._id} handleReply = {this.props.handleReply} 
					parentMessages = {::this.combineParentMessages(message.reply)} />} )
		return (
			<div>
				{messages}
			</div>	
			)
	}
}
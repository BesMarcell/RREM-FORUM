import React, {Component} from 'react';
import MessageReply from './MessageReply';

export default class Message extends Component {

	render () {
		const { message, parentMessages } = this.props;
		let messageArr = parentMessages.map( (message, index) => 
			<MessageReply message={message} index = {index} key={index}/> )
		let parentMessage = message.reply? (message.reply):'';
		return (
			
			<div className="row" >
			
				<div className="col-sm-5 col-md-3">
				</div>
					<div className="col-sm-10 col-md-6">
						<div className='panel-info'>{messageArr}</div>
						<div className='panel panel-success' style={{background: 'grey'}}>

							<div className='panel-info'>
								<b>{message.user}</b> <span className='messageTime' >{message.time}</span>
							</div>
							
							<div className='panel-body'>
								{message.text.replace(/\n/g, '<br>')}
							<div><button className="btn btn-default pull-right" 
									onClick={this.props.handleReply.bind(this, message)}><b>Reply</b></button></div>
							</div>

							
						</div>
					</div>			
			</div>		
			)
	}
}
import React, {Component} from 'react';

export default class MessageReply extends Component {
	render() {
		let arrReply = this.props.message.split('->');
		let marginLeft = this.props.index*3;
		return (
			<div className = 'messageReply'>
			<div style={{ marginLeft: `${marginLeft}em`}}>
				<div className = 'messageReplyUser'>
					<b>{arrReply[0]} </b>
					<span className = 'messageTime'>
						{arrReply[1]}
					</span>
				</div>
				
				<div className = 'messageReplyText'>
					{arrReply[2]}
				</div>
			</div>
			</div>
			)
	}

}
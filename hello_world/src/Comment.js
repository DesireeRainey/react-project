import React, { Component } from 'react';

class Comments extends Component {
	render() {
		const allComments = this.props.comments.map(c => {
			return <p>&lsquo;{c}&rsquo;</p>
		});
		return(
			<div>{allComments}</div>
		);
	}
}

export default Comments;
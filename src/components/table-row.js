import React from 'react'
import {Link} from 'react-router-dom'

export default (props) => {
	const {deletePost, openComments} = props
	const {postId, name, content} = props.post

	const commentCount = props.post.comments.length

	return (
		<tr className="row">
			<td className="col-3">{name}</td>
			<td className="col-7">{content}</td>
			<td className="col-1 text-center">{commentCount}</td>
			<td className="col-1">
				<Link to={'/' + postId}><i 
					className="fas fa-comment-dots"
					onClick={() => openComments(postId)}></i></Link>
				<i className="fas fa-minus-square" 
					style={{marginLeft: 10 + 'px'}}
					onClick={() => deletePost(postId)}></i>
			</td>
		</tr>
	)
}
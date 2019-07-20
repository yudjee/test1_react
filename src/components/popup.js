import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeComments, deleteComment} from '../actions/posts'
import {Link} from 'react-router-dom'

import s from './popup.module.css'


class Popup extends Component {

	render() {
		const {closeComments, deleteComment, posts} = this.props;
		const post = posts[0]

		return (
			<div className={s.popup}>
				<div className={s.popup_wrapper}>
					<div className={s.popup_header}>
						<h4> Comments for article {post.name} </h4>
						<Link to={'/'}>
							<i className="fas fa-times fa-2x"
								onClick={() => closeComments()}></i>
						</Link>
					</div>
					<div className="container">
						<table className="table">
							<thead className="thead-light">
								<tr className="row">
									<th className="col-8 text-center">Comments</th>
									<th className="col-2 text-center">Date</th>
									<th className="col-2 text-center">Remove</th>
								</tr>
							</thead>
							<tbody>
								{post.comments.map(comment => {
									return (
									
									<tr className="row" key={comment.text}>
										<td className="col-8 text-center"> {comment.text} </td>
										<td className="col-2 text-center"> {comment.date} </td>
										<td className="col-2 text-center"> <i 
											className="far fa-trash-alt"
											onClick={() => deleteComment(comment.text, post.postId)}></i> </td>
									</tr>
									
								)
								})}
							</tbody>
							
						</table>
					</div>
				</div>
			</div>
		)
	}
}

const showPost = (posts) => {
	const currentPost = posts.posts.filter(post => post.postId === posts.currentPage)
	return currentPost
}


const mapStateToProps = ({posts}) => ({
	posts: showPost(posts)
})

const mapDispatchToProps = dispatch => ({
	closeComments: () => dispatch(closeComments()),
	deleteComment: (text, postId) => dispatch(deleteComment(text, postId))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Popup);
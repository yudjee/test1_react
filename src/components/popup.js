import React, {Component} from 'react';
import {connect} from 'react-redux';
import {closeComments} from '../actions/posts'
import {Link} from 'react-router-dom'

import s from './popup.module.css'


class Popup extends Component {

	render() {

		const {closeComments, posts} = this.props;



		return (
			<div className={s.popup}>
				<div className={s.popup_wrapper}>
					<div className={s.popup_header}>
						<h4> пост</h4>
						<Link to={'/'}>
							<i className="fas fa-times fa-2x"
								onClick={() => closeComments()}></i>
						</Link>
					</div>
				</div>
			</div>
		)
	}
}

const showPost = (posts) => {
	return console.log(posts.posts.filter(post => post.postId === posts.currentPage))
}


const mapStateToProps = ({posts}) => ({
	posts: showPost(posts)
})

const mapDispatchToProps = dispatch => ({
	closeComments: () => dispatch(closeComments())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Popup);
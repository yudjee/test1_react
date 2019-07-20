import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deletePost, openComments, setPosts} from './actions/posts'
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'

import Popup from './components/popup'
import Table from './components/table'
import Loader from './components/loader'



class App extends Component {

	componentWillMount() {

		const { setPosts } = this.props;
		axios.get('/data.json').then(response => {
			setPosts(response.data)
		}).catch(function (error) {
		    console.log(error);
		})



	}

	render() {

		const {posts, deletePost, openComments} = this.props
		const {url, currentPage, isReady} = posts
		const articlesQuantity = posts.posts.length
		let commentsQuantity = 0;

		for(let i = 0; i < posts.posts.length; i++){
			commentsQuantity += posts.posts[i].comments.length
		}

		return (
			<BrowserRouter>
			<div className="container">
				<h2>Articles</h2>
				{isReady ? 
					<Table posts={posts} deletePost={deletePost} openComments={openComments}/> 
					: <Loader /> }
				<div className="container mt-10">
					<div className="row">
						<div className="col p-3 m-2 border border-dark about">
							<div><span style={{fontSize: 2 + 'em'}}> { articlesQuantity } </span> Articles</div>
							<i className="fas fa-align-left fa-3x"></i>
						</div>
						<div className="col p-3 m-2 border border-dark about">
							<div><span style={{fontSize: 2 + 'em'}}> { commentsQuantity } </span> Comments</div>
							<i className="fas fa-comments fa-3x"></i>
						</div>
					</div>
				</div>
			</div>
			{ currentPage != null ? <Route path={url} component={Popup} /> : null }
			</BrowserRouter >

		)
	}

}

const mapStateToProps = (state) => ({
	posts: state.posts
})

const mapDispatchToProps = dispatch => ({
	deletePost: (id) => dispatch(deletePost(id)),
	openComments: (id) => dispatch(openComments(id)),
	setPosts: (posts) => dispatch(setPosts(posts))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
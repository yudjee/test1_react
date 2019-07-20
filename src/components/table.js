import React from 'react'

import Tablerow from './table-row'

export default (props) => {
	const {deletePost, openComments} = props
	const {posts} = props.posts;



	return (
		<table className="table">
			<thead className="thead-light">
				<tr className="row">
					<th className="col-3">Article title</th>
					<th className="col-7">Content</th>
					<th className="col-1">Comments</th>
					<th className="col-1">Actions</th>
				</tr>
			</thead>
			<tbody>
				{posts.map(post => {
					return (
						<Tablerow key={post.postId} post={post} deletePost={deletePost} openComments={openComments}/>
					)
				})}
				
			</tbody>
		</table>
	)
}
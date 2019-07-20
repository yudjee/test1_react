const initialState = {
	posts: [
    {
      "postId": 1,
      "name": "Post 1",
      "content": "content post 1",
      "date": "04.02.2018",
      "comments": [
        {
          "date": "04.02.2018",
          "text": "Comment post 1 2"
        },
        {
          "date": "04.02.2018",
          "text": "Comment post 1 3"
        },
        {
          "date": "04.02.2018",
          "text": "Comment post 1 4"
        },
        {
          "date": "04.02.2018",
          "text": "Comment post 1 5"
        }
      ]
    },
    {
      "postId": 2,
      "name": "Post 2",
      "content": "content post 2",
      "date": "04.03.2018",
      "comments": [
        {
          "date": "04.02.2018",
          "text": "Comment post 2 2"
        },
        {
          "date": "04.02.2018",
          "text": "Comment post 2 3"
        },
        {
          "date": "04.02.2018",
          "text": "Comment post 2 4"
        }
      ]
    },
    {
      "postId": 3,
      "name": "Post 3",
      "content": "content post 3",
      "date": "10.04.2018",
      "comments": [
        {
          "date": "04.02.2018",
          "text": "Comment post 3 2"
        },
        {
          "date": "04.02.2018",
          "text": "Comment post 3 3"
        },
        {
          "date": "04.02.2018",
          "text": "Comment post 3 4"
        },
        {
          "date": "04.02.2018",
          "text": "Comment post 3 5"
        }
      ]
    }
  ],
  url: '/',
  currentPage: null
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'DELETE_POST':
			return {
        ...state,
        posts: state.posts.filter(post => post.postId !== action.payload)
			};
    case 'OPEN_COMMENTS':
      return {
        ...state,
        url: '/' + action.payload,
        currentPage: action.payload
      };
    case 'CLOSE_COMMENTS':

      return {
        ...state,
        url: '/',
        currentPage: null
      };
    case 'DELETE_COMMENTS':
      const index = state.posts.findIndex(el => el.postId === action.id)
      
      let newCom = [];
      for(let i=0; i < state.posts.length; i++) {
        if(state.posts[i].postId === action.id) {
          newCom = state.posts[i].comments.filter(comment => comment.text !== action.text)
        }
      }
      console.log(newCom)
      return {
        ...state,
        posts: [...state.posts, state.posts[index].comments=newCom]

      };

		default:
			return state 
	}
} 
const initialState = {
	/*posts: [
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
  ],*/
  posts: [],
  url: '/',
  currentPage: null,
  isReady: false
}

export default (state = initialState, action) => {
	switch(action.type) {
    
    case 'SET_POSTS':
      return {
        ...state,
        posts: action.payload.posts,
        isReady:true
      };
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

      const newState = []
      for (let j =0; j < state.posts.length; j++) {
        if(j === index) {
          newState.push({...state.posts[j], comments: newCom})
        } else {
          newState.push({...state.posts[j]})
        }
      }


      return {
        posts: newState
      };

		default:
			return state 
	}
} 
import SocialButton from '../SocialButton'
import {BiLike} from 'react-icons/bi'
import {FaShare} from 'react-icons/fa'
import {FaBookmark} from 'react-icons/fa'

import './index.css'

const Post = () => (
  <div className="post-container">
    <h1 className="heading">React Hooks</h1>
    <p className="paragraph">
      Hooks are a new addition in React 16.8. They let you use state and other
      React features without writing a class.
    </p>
    <div className="social-button-wrapper">
      <SocialButton>
        <BiLike className="share-icon" />
        Like
      </SocialButton>
      <SocialButton>
        <FaShare className="share-icon" />
        Share
      </SocialButton>
      <SocialButton>
        <FaBookmark className="share-icon" />
        Save
      </SocialButton>
    </div>
  </div>
)

export default Post

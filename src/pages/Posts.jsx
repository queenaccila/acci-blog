import './Posts.css'
import RecentPosts from '../global-components/RecentPosts'

function Posts() {
  return (
    <>
      <div className="post-list">
        <h1>Recent Posts</h1>
        <RecentPosts limit={20}/>
      </div>
    </>
  )
}

export default Posts

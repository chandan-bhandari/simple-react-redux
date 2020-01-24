import React from 'react'
import PropTypes from 'react-proptypes'
import { Link } from 'react-router-dom'

class Posts extends React.Component {
  componentDidMount() {
    this.props.fetchPosts()
  }
  render() {
    const { loading, error, posts } = this.props
    return (
      <div>
        {loading && <div>Loading...</div>}
        {error && <span>Error: {error}</span>}
        {posts && posts.length && (
          <div>
            <h1>Posts</h1>
            <ul>
              {posts.map(post => (
                <li key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
}

export default Posts
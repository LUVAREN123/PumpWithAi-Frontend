import './styles.css'
import formatDate from '../../../lib/formatDate'
import type { Blog } from '../../../layouts/BlogLayout'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function BlogSidebar({ blogs }: { blogs: Array<Blog> }) {
  const [availableBlogs, setAvailableBlogs] = useState<Array<Blog>>(blogs)
  const { id } = useParams()

  useEffect(() => {
    if (!id) return
    setAvailableBlogs(blogs.filter(_ => _.id !== Number(id)))
  }, [id])

  return (
    <div id="blog-sidebar">
      {availableBlogs.map((blog) => (
        <Link to={`/blog/${blog.id}`} className="blog-item" key={blog.id}>
          <div className="blog-item-cover">
            <img src={blog?.cover} alt={blog?.title} />
          </div>
          <div className="blog-item-header">
            <div className="blog-item-title">{blog?.title}</div>
            <div className="blog-item-timestamp">
              {blog?.timestamp && formatDate(
                new Date(blog?.timestamp),
                "Posted on Do MMM ’YY, hh:MM A"
              )}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

import React, { useEffect, useState } from "react"
import classes from "../styles/Home.module.scss"
import { Link } from "react-router-dom"
import { API_BASE_URL } from '../constants'

export const Home = () => {
  const [posts, setPosts] = useState([])

  // APIでpostsを取得する処理
   useEffect(() => {
    const fetcher = async () => {
      const res = await fetch(`${API_BASE_URL}/posts`)
      const { posts } = await res.json()
      setPosts(posts)
    }

    fetcher()
  }, [])

  return (
    <div className="">
      <div className={classes.container}>
        <ul>
          {/* 記事の一覧をmap処理で繰り返し表示します。*/}
          {posts.map((post) => {
            return (
              <li key={post.id} className={classes.list}>
                <Link to={`/posts/${post.id}`} className={classes.link}>
                  <div className={classes.post}>
                    <div className={classes.postContent}>
                      <div className={classes.postInfo}>
                        <div className={classes.postDate}>
                          {new Date(post.createdAt).toLocaleDateString()}
                        </div>
                        <div className={classes.postCategories}>
                          {post.categories.map((category) => {
                            return (
                              <div
                                key={category}
                                className={classes.postCategory}
                              >
                                {category}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <p className={classes.postTitle}>{post.title}</p>
                      <div
                        className={classes.postBody}
                        dangerouslySetInnerHTML={{ __html: post.content }}
                      />
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
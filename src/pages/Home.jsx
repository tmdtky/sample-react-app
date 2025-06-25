import React, { useEffect, useState } from "react"
import classes from "../styles/Home.module.scss"
import { Link } from "react-router-dom"
import { Header } from "../components/Header"
import { posts as postsData } from "../data/posts"

export const Home = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // データを模擬的にAPIから取得する処理
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        setError(null)
        
        // post.tsからデータを設定
        setPosts(postsData)
      } catch (error) {
        console.error("Error fetching posts:", error)
        setError("記事の取得に失敗しました。")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <div className={classes.container}>
        <div>記事を読み込み中...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className={classes.container}>
        <div>エラー: {error}</div>
      </div>
    )
  }

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
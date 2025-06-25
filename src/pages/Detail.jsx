import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import classes from '../styles/Detail.module.scss'
import { API_BASE_URL } from '../constants'

export const Detail = () => {
  // react-routerのuseParamsを使って、URLのパラメータ（記事ID）を取得
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(false)
  
  // データを模擬的にAPIから取得する処理をuseEffectで実行
  useEffect(() => {
    const fetcher = async () => {
      setLoading(true)
      const res = await fetch(`${API_BASE_URL}/posts/${id}`)
      const { post } = await res.json()
      setPost(post)
      setLoading(false)
    }

    fetcher()
  }, [id])

  // 記事取得中は、読み込み中であることを表示
  if (loading) {
    return <div>読み込み中...</div>
  }

  // 記事が見つからなかった場合の表示
  if (!loading && !post) {
    return <div>記事が見つかりません</div>
  }

  return (
    <div className={classes.container}>
      <div className={classes.post}>
        {/* サムネイル画像 */}
        {post.thumbnailUrl && (
          <div className={classes.postImage}>
            <img src={post.thumbnailUrl} alt={post.title} />
          </div>
        )}
        
        <div className={classes.postContent}>
          {/* 記事情報（日付とカテゴリ） */}
          <div className={classes.postInfo}>
            <div className={classes.postDate}>
              {new Date(post.createdAt).toLocaleDateString()}
            </div>
            {post.categories && post.categories.length > 0 && (
              <div className={classes.postCategories}>
                {post.categories.map((category) => {
                  return (
                    <div key={category} className={classes.postCategory}>
                      {category}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {/* 記事タイトル */}
          <h1 className={classes.postTitle}>{post.title}</h1>
          
          {/* 記事本文 */}
          <div
            className={classes.postBody}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </div>
    </div>
  );
};
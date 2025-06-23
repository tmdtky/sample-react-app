import React from 'react';
import { useParams, Link } from 'react-router-dom';
import classes from '../styles/Detail.module.scss';
import { posts } from '../data/posts';

export const Detail = () => {
  // react-routerのuseParamsを使って、URLのパラメータ（記事ID）を取得
  const { id } = useParams();
  
  // posts配列から該当するIDの記事を検索
  const post = posts.find(post => post.id === parseInt(id));

	// 記事が見つからなかった場合の表示
  if (!post) {
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
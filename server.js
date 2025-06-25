const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

// CORS設定
app.use(cors());

// JSONパーサー
app.use(express.json());

// サンプルデータ
const posts = [
  {
    id: 1,
    title: "記事タイトル１",
    thumbnailUrl: "https://placehold.jp/800x400.png",
    createdAt: "2023-09-11T09:00:00.000Z",
    categories: ["React", "TypeScript"],
    content: `
    本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
  },
  {
    id: 2,
    title: "記事タイトル２",
    thumbnailUrl: "https://placehold.jp/800x400.png",
    createdAt: "2023-09-10T09:00:00.000Z",
    categories: ["HTML", "CSS"],
    content: `
    本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
  },
  {
    id: 3,
    title: "記事タイトル３",
    thumbnailUrl: "https://placehold.jp/800x400.png",
    createdAt: "2023-09-09T09:00:00.000Z",
    categories: ["JavaScript"],
    content: `
    本文です。本文です。本文です。本文です。本文です。本文です。<br/>本文です。本文です。本文です。本文です。本文です。<br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。本文です。<br/><br/><br/>本文です。本文です。本文です。本文です。本文です。本文です。<br/>`,
  },
];

// 記事一覧を取得するエンドポイント
app.get('/posts', (req, res) => {
  res.json({ posts });
});

// 特定の記事を取得するエンドポイント
app.get('/posts/:id', (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json({ post });
  } else {
    res.status(404).json({ error: '記事が見つかりません' });
  }
});

app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`);
}); 
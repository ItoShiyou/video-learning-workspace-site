# 動画学習ワークスペースの紹介ページ

HTML・CSS・JavaScriptだけで動く、GitHub Pages向けの紹介ページです。外部のJavaScript、フォント、解析サービス、ビルドツールは使用しません。

## ファイル

- `dist/index.html`：紹介文、機能、画面イメージ、料金構成、対応環境、FAQ
- `dist/style.css`：PC・タブレット・スマートフォンの表示
- `dist/script.js`：画面タブ、カードの答え表示、メニュー、画面拡大
- `dist/assets/`：アイコン、サンプル画像、実装済みアプリの画面
- `.github/workflows/pages.yml`：mainへのpushでGitHub Pagesへデプロイ
- `scripts/check-site.py`：画像やリンク、ARIA参照、相対パスなどの確認

掲載した教材や数値は画面イメージ用のサンプルです。口コミ・利用者数・販売実績を架空に追加していません。正式名称、販売価格と発売時期は未定で、購入・ダウンロードボタンは置いていません。

## ローカルで確認

```sh
python3 -m http.server 8642 --bind 127.0.0.1 --directory dist
```

ブラウザで `http://127.0.0.1:8642/` を開きます。`dist/index.html` を直接開いても表示・操作できます。

## 公開

このフォルダを紹介ページ専用のGitHubリポジトリとして使います。公開対象は `dist` のみです。アプリ本体、モデル、学習データ、購入ライセンスの秘密鍵は含みません。

1. 新しいリポジトリに、このフォルダの内容をpushします。
2. Settings → Pages → Build and deployment → Sourceで **GitHub Actions** を選びます。
3. mainへpushするか、Actionsの「Deploy introduction to GitHub Pages」を実行します。
4. 成功すると `https://<ユーザー名>.github.io/<リポジトリ名>/` で公開されます。

すべての画像・CSS・JSは相対パスで参照しているため、プロジェクトのサブパスでも動作します。独自ドメインも必要に応じてPages側で設定できます。

[GitHub公式のカスタムワークフロー案内](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)

## 検証

```sh
node --check dist/script.js
python3 scripts/check-site.py
```

説明文や名称は `dist/index.html`、色や余白は `dist/style.css` から変更できます。

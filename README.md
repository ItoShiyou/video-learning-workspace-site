# 動画学習ワークスペースの紹介ページ

公開URL: https://itoshiyou.github.io/video-learning-workspace-site/

リポジトリ: https://github.com/ItoShiyou/video-learning-workspace-site

HTML・CSS・JavaScriptだけで動く、GitHub Pages向けの紹介ページです。外部のJavaScript、フォント、解析サービス、ビルドツールは使用しません。

## ファイル

- `dist/index.html`：紹介文、機能、画面イメージ、料金構成、対応環境、FAQ
- `dist/style.css`：PC・タブレット・スマートフォンの表示
- `dist/script.js`：実画面の切り替えタブ、メニュー、画面拡大
- `dist/assets/`：アイコン、サンプル画像、実装済みアプリの画面
- `.github/workflows/pages.yml`：mainへのpushでGitHub Pagesへデプロイ
- `scripts/check-site.py`：画像やリンク、ARIA参照、相対パスなどの確認

掲載した教材や数値は画面イメージ用のサンプルです。口コミ・利用者数・販売実績を架空に追加していません。正式名称は「しおり」。正式配布はMac App Storeのみ、StoreKitによる無料版＋買い切りProです。日本Pro価格は本人指定の税込1,980円でApp Store Connectに設定済み、商品IDは`io.github.itoshiyou.shiori.pro`です。

AppleがTestFlight配信したことを確認済みの版は0.25.0 / build 0.25.2です。ローカル動画、時刻付きノート、スクリーンショット、復習カード、本棚、バックアップ復元、再起動後の保存、商品表示、購入キャンセル、未購入時の復元を確認しました。実Sandbox購入確定・返金は未確認です。

Appleへ配送済みでTestFlight処理完了を確認したbuildは0.25.16です。本人はこの版を開き、本棚が表示されたと報告しています。その他の主要機能の実操作は未確認です。最新のローカル提出候補はversion 0.25.0 / build 0.25.19、App Store署名pkg `dist/app-store-submission-v14-privacy-disclosure/Shiori-AppStore.pkg`（SHA-256 `d0a3acadb07f45e4a14d750d875a00f36ac1e0f67c3099a24231586d263785ac`）です。署名・Sandbox・App Store package checker・配布物検査に合格し、Python回帰234件は失敗0・実AIモデル3件skip、StoreKit/NativeBridge画面外試験は13件中12件成功・対話式購入キャンセル1件skip・失敗0でした。Appleへの配送は未実施。API Key ID、Issuer ID、`.p8`鍵が未設定のため、状態照会CLIはApple APIへ接続していません。実App Store Sandbox購入・返金は未確認です。

配布用署名identityとInstaller identityはこのMacで有効です。有料アプリ契約・銀行口座・税務フォームは2026-10-15にApp Store Connectで有効表示を再確認しました。アプリ本体価格は日本基準¥0、Proは税込¥1,980でApp Store Connectに保存済みです。初回配信地域は174か所で、フランスを除外しています。App Store向けスクリーンショット3枚とPro審査用画像1枚はアップロード済み。IAPは「提出準備中」、build 0.25.16はTestFlight内部グループでテスト準備完了です。TestFlight build 0.25.16の本棚表示は本人が確認済みです。主要機能操作、実Sandbox購入・返金、別Mac試験が残っています。App Privacy回答、公開サポート/プライバシーURL、App Review連絡先は未設定です。サポート/プライバシーの新ページはこのPR内にあり、公開URLではありません。Apple Developer Program契約更新とEUのDSA申告・販売地域方針は未確定です。

YouTube機能の初回利用前に日本語の同意画面を表示します。字幕・プレイリスト自動取得への書面許可、動画ごとのMade for Kids確認・追跡停止、App Privacy回答は未確認です。同意画面はサービスや権利者の許可を代替しません。無料版はローカル動画10本まで、YouTube教材は登録本数無制限とする仕様を本人が決定し、build 0.25.18へ実装しました。正式なApp Store URLが確定するまで購入・ダウンロードボタンは置きません。

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

## 0.16.0の掲載資料

本棚・教材選択・ノート・復習は、配布アプリに同梱したUIを掲載用の架空教材で起動し、ブラウザ撮影した実装画面です。静止画を切り替える紹介機能であり、Webサイト上でアプリを実行する機能ではありません。検証済みの範囲、AI実モデルテストの条件と確認範囲、販売前に残る作業、変更履歴を本文に記載しています。

## 図書のような見た目への刷新

Daunt Books、The London Library、白水社の実ページを設計の参考にしました。参考サイトの画像・ロゴは公開物に含みません。中央の目次、日本語の明朝題字、細い罫線、実画面を中心に再構成しました。本としおりのアイコンは独自制作です。

## 0.16.0のUI見本

bondavi「集中」の操作の少なさを主軸に、Apple Booksの一覧とBearの編集領域を参考にしています。古書の模型・文学的な題字・漢数字の節番号を外し、白背景と短い説明、実画面を中心に変更しました。第三者の掲載画像は公開素材に使っていません。

YouTube連携の提出前確認: IFrame Player APIのデスクトップWebView向けBundle ID Referer、無料10本枠からYouTube教材を除外する仕様は本人が決定し、build 0.25.18へ実装・検証しました。字幕・プレイリスト自動取得と保存の書面許可は未解決です。権利・許可の確認後に扱いを判断します。これらが解決するまで販売版の適合性や審査通過を案内しません。

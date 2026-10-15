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

最新の配布署名済み候補は0.25.0 / build 0.25.16です。YouTube機能の初回同意を含み、プレイヤーの自動再生を明示的に無効化しています。Mac App Store署名pkg、Apple証明書チェーン、プロファイル、アプリ署名、App Store package checker、配布物検査を通過しました。現行ソースのloopback統合テストは232件中229成功・実AIモデル3件スキップ・失敗0です。合成データによる大量件数テストでは教材1,000件、ノート20,000件、カード5,000件、スクリーンショット1,000件の保存・出力・バックアップ復元に成功しました。pkg SHA-256は本体リポジトリの提出記録に保存しています。Transporterで2026-10-15 16:51に配送済みとなり、画面上でApple側の処理完了を確認しました。App Store Connectで輸出コンプライアンス回答後に「提出準備完了」となり、内部テストグループ（1名）へ割当済みです。招待数1、インストール数0のため、TestFlight実機起動は未確認です。状態照会CLIはAPI Key IDとIssuer IDが未設定のためApple APIに接続していません。StoreKit画面外統合テストは12件中11成功・購入ダイアログ操作1件スキップ・失敗0で、実Sandbox取引を代替しません。追加で、Sandbox内の画面外テストホストから同梱Whisperの日本語文字起こしとローカルAIの解析・タグ・意味検索・カード候補・下書き保存を実モデルで確認しました。

配布用署名identityとInstaller identityはこのMacで有効です。有料アプリ契約・銀行・税務情報は2026-10-14時点で有効表示でしたが最新状態は未確認です。Apple Developer Program契約更新とEU DSAトレーダー申告も最新状態を未確認です。App Store向けスクリーンショット3枚とPro審査用画像1枚はApp Store Connectへアップロード済みです。IAPは「提出準備中」、App Privacy回答とプライバシーポリシーURLは未設定です。App Review連絡先、最新buildをApp Store versionへ設定する作業、TestFlight実機起動、別Mac試験が残っています。サポート/プライバシーの新ページはこのPR内にあり、公開URLではありません。

YouTube機能の初回利用前に日本語の同意画面を表示する実装を追加しましたが、YouTube字幕・プレイリスト自動取得への書面許可は未確認です。同意画面はサービスや権利者の許可を代替しません。動画ごとのMade for Kids確認・追跡停止とApp Privacy回答も未完了です。YouTube教材にも無料10本上限が適用される現行仕様には視聴制限上のポリシー懸念があり、適用範囲は本人の判断待ちです。正式なApp Store URLが確定するまで購入・ダウンロードボタンは置きません。

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

YouTube連携の提出前確認: IFrame Player APIのデスクトップWebView向けBundle ID Referer、YouTube教材にも適用される無料10本/Pro無制限の境界、字幕・プレイリスト自動取得と保存の書面許可は未解決です。権利・許可の確認後に扱いを判断します。これらが解決するまで販売版の適合性や審査通過を案内しません。

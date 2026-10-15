# しおり | Mac App Store公開チェックリスト（2026-10-12）

## 現行状態（2026-10-15更新）
- 最新の配布署名済み候補: version 0.25.0 / build 0.25.16、Bundle ID `io.github.itoshiyou.shiori`、Pro Product ID `io.github.itoshiyou.shiori.pro`。SHA-256 `e4fc29287a1044dcbed4dd5e3975392ca8cfc4dcb9b7e6e412fbca1b1d37a06f`。App Store package checkerと配布物検査にPASS。
- 現行アプリ回帰テスト: 232件中229件成功、実AIモデル3件をスキップ、失敗0。StoreKit/NativeBridgeの画面外テスト: build 0.25.16で12件中11件成功、購入ダイアログ操作1件をスキップ、失敗0。StoreKitの購入・返金はXcode仮想取引であり、App Store Sandboxの実取引ではない。
- Appleで受領を確認できているTestFlight版はbuild 0.25.2。build 0.25.16のアップロード・受領・TestFlight処理は未確認。App Store Connect API Key ID/Issuer IDと標準保存場所の`.p8`鍵がなく、画面操作なしのAPI照会・CLIアップロードは未実施。
- 商品価格は日本税込1,980円。審査連絡先、App Privacy回答、公開サポート/プライバシーURL、掲載素材のApp Store Connect登録、実Sandbox購入・返金、別Mac検証は未完了。
- YouTube字幕・プレイリスト自動取得の書面許可と動画別Made for Kids確認は未解決。YouTube教材にも無料10本上限が及ぶ現行仕様には視聴制限上のポリシー懸念があるため、本人の仕様判断後に販売版を確定する。
- この紹介サイトはMac App Store販売方針の案内のみ。正式なApp Store URLが発行されるまで購入・ダウンロードURLを設置せず、Draft PRのまま公開しない。

## 販売方式・優先順位
- ユーザーの決定：**配布経路は公式Mac App Storeのみ**。この紹介サイトは案内用とし、公式App Storeの商品ページだけにリンクする。
- **無料ダウンロード＋買い切りPro（Appleの非消耗型アプリ内購入）**を基本構成にする。日本価格はユーザー指定の税込1,980円でApp Store Connectに設定済み。
- Polar / Lemon Squeezy / 独自ライセンスキー / DMG直接販売はApple版の初回リリースから除外。**Developer ID公証・stapleの手順をApp Store申請に転用しない。**
- Apple Developer Program登録と有料アプリ契約は完了報告/確認済み。App Store ConnectのApp Record、銀行、税務も登録済みと確認。ただし更新版Apple Developer Program契約のAccount Holder同意とEU配信時のDSAトレーダー申告は未確認。
- 本repoは**紹介サイトのみ**。アプリ本体はこのrepoに移動せず、Codex DesktopのローカルmacOSプロジェクトで管理する。

## 技術リリースゲート（Codex、すべて実測で判定）
- [ ] 最新アプリ本体の場所、OS要件、バージョン、Bundle ID、ビルドコマンドを確定し、同一アプリとして追跡。
- [ ] macOS **App Sandbox**を有効化。ファイル選択、動画ファイルへの継続的なアクセス、書き込み・保存・再起動後の復元、モデル/キャッシュ保存がSandboxでも成功することを確認。必要最小限のentitlementのみ付与。
- [ ] YouTube利用方法と第三者の著作物利用を審査ガイドライン・利用規約と照合。第三者コンテンツの不適切なダウンロードを実装しない。App Reviewに説明できる操作動画/説明を準備。
- [ ] 本棚、動画、時刻付きノート、復習カード、学習記録の保存と読み出し、破損時の扱い、ネットワーク断を実機テスト。
- [ ] 無料とProの境界を現在の実装と合わせ、StoreKit（StoreKit 2または採用技術に合う安全なブリッジ）で**non-consumable**購入を実装。Appleの検証済み取引に基づいて権利を付与。購入、キャンセル、復元、返金/取り消し、オフライン時の復元済み権利をSandbox/TestFlightで検証。
- [ ] モデル、第三者ライブラリ、アセットの商用/再配布/Store内同梱条件と必要クレジットを記録。
- [ ] App Store配布用の署名・プロビジョニング・Archive・アップロードを実機で確認。直接配布用DMGは作業対象外。
- [ ] TestFlightで既存Mac以外の環境を検証し、審査提出後の指摘に対応。

## App Store Connectとサイトの作業
- [ ] Apple側でアプリレコードを作成：macOS、正式アプリ名、主要言語=日本語、Bundle ID、SKU。**IDやSKUは既存との整合を必ず確認**。
- [ ] App内課金で買い切りProを「非消耗型」として作成。製品ID・価格・ローカライズはStoreKit側と完全一致させる。
- [ ] データ取扱いを実装確認し、App Privacy回答、プライバシーポリシー、サポートページ、問い合わせ先を実態通りに準備。
- [ ] 申請用の紹介文・キーワード・カテゴリ・アイコン・スクリーンショット・審査用説明・暗号化関連の申告を実装内容と一致させる。
- [ ] **正規のストアURLが発行されるまで**紹介サイトに偽のApp Storeバッジ/ダウンロードURL/価格を置かない。公開後はAppleの公式リンクに置換する。
- [ ] サイト修正後 `python3 scripts/check-site.py` と `node --check dist/script.js` を実行。実行できなければ未実行と記録。

## 日本語の商品ページ文案（事実確認後に使用）
**アプリ名案**：しおり
**サブタイトル案**：動画にノートと復習を
**説明文案**：
「動画の学習を、途中で終わらせない。しおりは、YouTubeや手元の動画に時刻付きノートを残し、復習につなげるMac向け学習アプリです。教材を本棚から選び、気づいた場所へ戻りながら学べます。無料で始めて、必要に応じてPro機能を一度だけ購入する方式を予定しています。」
**注**：本体最新版の実機確認まで、アプリの機能・無料Pro範囲を断定した正式商品説明には使用しない。販売前は「公開準備中」。

## 人の操作が必要なブロッカー（ユーザーへ簡潔に報告）
1. Account HolderがApple Developer Program/有料アプリ契約、税務、銀行のApp Store Connect状態を確認し、必要な手続きを完了する。
2. EU配信を行う場合、本人が配信地域とDSAトレーダー状態を確認・申告する。
3. YouTube字幕・プレイリスト自動取得の許可を確認し、販売版での扱いを決める。App Review連絡先、プライバシー回答、サポート/プライバシーURLの登録も残る。
4. Apple Account/2FA/証明書署名・最終審査提出と公開判断は本人管理。秘密鍵・パスワード・トークンをGitHubやAI会話へ貼らない。

## 出荷条件
「最新本体が見つかった」「Sandboxで全主要動作が通った」「StoreKitの復元も含む購入テストに合格」「実ビルドがApp Store Connect/TestFlightで確認された」「Appleの審査が承認した」。すべて揃うまでは出荷済みとしない。

## 公式資料
- https://developer.apple.com/documentation/security/protecting-user-data-with-app-sandbox
- https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app/
- https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/create-consumable-or-non-consumable-in-app-purchases/
- https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview/
- https://developer.apple.com/app-store/review/

## 現在の確認状態（2026-10-14更新）

### できていること
- 最新のアプリ本体は紹介サイトとは別のローカルmacOSプロジェクト。利用者のMacでインストールと機能確認ができたTestFlight版はversion 0.25.0 / build 0.25.2、Bundle ID `io.github.itoshiyou.shiori`。最新ソースbuild 0.25.9はApp Sandboxを有効にしたad-hoc QAアプリで、ICNS・Privacy Manifest・ローカル配布物検査に合格したが、提出pkgではなくAppleへアップロードしていない。署名候補build 0.25.6は現行のICNS・コード署名検査に不合格のため提出には使わない。Transporterで直近配送を開始したとの本人報告はあるが、Appleの最新受領・処理状態は確認できていない。
- App Sandbox、選択ファイルの読み書き、ネットワーククライアント/ローカルサーバー権限、Sandboxを継承するhelperを設定。build 0.25.9を現行`check-app-store.py`と`check-release.py`で再検査しPASS。`security find-identity -v -p codesigning`は0件で、DownloadsのMac App Distribution/Mac Installer Distribution証明書は新CSR秘密鍵と一致しないため、配布署名pkgは未生成。新CSR対応のApple証明書発行が必要。
- ローカル動画、ノート、スクリーンショット、復習カード、本棚、学習履歴、バックアップ/復元、再起動後の保持をTestFlightで確認。Python/loopback統合テスト219件中216成功、AI実モデル3件をスキップ、失敗0。StoreKit仮想テストは8件中7成功、失敗0、ネイティブ購入ダイアログのキャンセル1件をスキップ。購入、Ask to Buy承認、権利復元、オフライン保持、返金後の解除と再購入を仮想セッションで確認。TestFlight確認はこのMacの1環境に限る。
- 無料版は教材10本まで。買い切りProはStoreKit非消耗型で、Product ID `io.github.itoshiyou.shiori.pro`。日本価格は税込1,980円。商品取得、購入シート、キャンセル、未購入時の復元を確認。
- App Store Connectのアプリレコード、年齢区分、説明文、キーワード、カテゴリ、およびTestFlight用ビルドを設定済み。年齢区分は申告内容に基づき16+（地域により異なる）。
- Apple側でTestFlight配信されたことを確認したbuildは0.25.2。build 0.25.9は最新ローカルQA版で、TestFlight版ではない。build 0.25.6のTransporter操作後の配送・処理記録は未確認。App Store Connect APIキー未設定のため現時点でAPI照会できない。
- 紹介ページには正式App Storeリンクや外部決済を置いていない。販売開始前の案内にとどめている。

### 提出前に残るゲート
- TestFlight購入シートに確定ボタンが表示されず、実取引・Pro解除・返金後の権利解除は未確認。StoreKitのXcode仮想テストは7件成功・1件スキップで通過しているが、実Sandbox取引の代替にはならない。
- YouTube字幕/プレイリスト自動取得はyt-dlpを使用する。権利者等の書面許可を確認してから販売版での扱いを決める方針で、許可は確認済みとしていない。紹介ページではこの機能の提供が未確定であることを表示。
- YouTube等の第三者サービスを含むApp Privacy回答は未提出。プライバシーポリシーとサポートページはHTML草案で、公開URLの稼働確認・App Store Connectへの登録が必要。
- アプリ本体repoに、現行WebKit UIと隔離した合成教材を使った2880×1800の画像プレビュー3枚（教材棚、時刻付きノート、復習カード）を生成済み。ユーザー画面のキャプチャや前面化は使っていない。描画元buildと現行UI資産のハッシュ一致を確認済み。IAP審査用プレビューも最新QA build 0.25.9から再生成し、Pro案内と購入/復元表示を確認。いずれもApp Store Connectへの登録とApp Review連絡先は未完了。紹介ページ内の参考画面は0.20.0のため、提出画像として流用しない。
- Account Holderによる最新Developer Program契約の確認、EU配信の選択と必要なDSAトレーダー申告は本人判断が必要。一般公開・App Review提出は行っていない。

この状態メモは内部作業用の進捗記録であり、発売済み・審査提出済みを意味しない。正式なApp Store URLが確定するまで、購入・ダウンロードリンクを作成しない。


- YouTube IFrame Player APIの`controls:0`を検出。Google公式ポリシーが標準プレイヤー機能を隠すことを例示付きで禁止しているため、学習用ツールバーを保ったまま標準プレイヤー操作も見せる`controls:1`へ修正し、build 0.25.5/0.25.6へ含めた。YouTube字幕/プレイリスト自動取得への権利許可は未確認で、継続可否の判断は保留。
- [x] macOS向けIFrameプレイヤーを専用WKWebViewへ分離し、`loadHTMLString(_:baseURL:)`のbaseURLとIFrame `origin`にHTTPS Bundle IDを指定。画面外・ActivationPolicy`.prohibited`の検証でIFrame APIの準備完了と動画画面のスクリーンショットを確認し、build 0.25.6に含めた。Xcodeの`build-for-testing`も成功。Refererヘッダーの直接記録、アプリ全体の画面・再生操作回帰、TestFlight検証は未実施。
- [ ] **仕様判断待ち:** 現行の無料10教材上限はYouTube教材にも適用され、11本目のYouTube教材登録・視聴をPro購入まで止める。GoogleのDeveloper Policiesは埋め込み動画の視聴課金と、再生以外の操作で視聴アクセスを制限することを禁じるため、現仕様には強い適合リスクがある。販売準備の推奨案はYouTube教材を無料枠から除外し、ローカル教材だけ10本上限、ProのAI自動化・検索・ローカル教材無制限を維持すること。無料/Pro境界を変える主要仕様のため、本人の選択前には実装を変更しない。対象はローカル動画追加、YouTube直接追加、プレイリスト取込、ゴミ箱復元で、実装根拠はアプリ本体repoの`docs/YOUTUBE_PERMISSION_REVIEW.md`。
- [ ] YouTube字幕/プレイリスト自動取得の書面許可と、字幕・スクリーンショット等の保存に関する権利根拠を確認する。回答は「権利・許可の確認後に判断する」であり、現行取得方式の継続や移行は未決定。

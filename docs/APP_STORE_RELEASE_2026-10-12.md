# しおり | Mac App Store公開チェックリスト（2026-10-12）

## 販売方式・優先順位
- ユーザーの決定：**配布経路は公式Mac App Storeのみ**。この紹介サイトは案内用とし、公式App Storeの商品ページだけにリンクする。
- **無料ダウンロード＋買い切りPro（Appleの非消耗型アプリ内購入）**を基本構成にする。価格はユーザー未決定。
- Polar / Lemon Squeezy / 独自ライセンスキー / DMG直接販売はApple版の初回リリースから除外。**Developer ID公証・stapleの手順をApp Store申請に転用しない。**
- Apple Developer Programの登録完了はユーザーが報告済み。ただしAccount Holderの有料アプリ契約・税務・銀行・App Store Connectレコード作成の成否は未確認。
- 本repoは**紹介サイトのみ**。アプリ本体を探す前に実装に着手しない。正規の最新ソース・commitをCodex Desktopで確定する。

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
1. App Store Connect「ビジネス」→有料アプリ契約（同意後は取消不可）→税務フォーム・銀行口座。
2. Small Business Programは対象なら別途申請。参加・承認状況を確認（自動15%ではない）。
3. Bundle IDとApp Record、IAP製品ID、Pro価格、配信地域を確定。
4. Apple Account/2FA/証明書署名・最終審査提出と公開判断は本人管理。秘密鍵・パスワード・トークンをGitHubやAI会話へ貼らない。

## 出荷条件
「最新本体が見つかった」「Sandboxで全主要動作が通った」「StoreKitの復元も含む購入テストに合格」「実ビルドがApp Store Connect/TestFlightで確認された」「Appleの審査が承認した」。すべて揃うまでは出荷済みとしない。

## 公式資料
- https://developer.apple.com/documentation/security/protecting-user-data-with-app-sandbox
- https://developer.apple.com/help/app-store-connect/create-an-app-record/add-a-new-app/
- https://developer.apple.com/help/app-store-connect/manage-in-app-purchases/create-consumable-or-non-consumable-in-app-purchases/
- https://developer.apple.com/help/app-store-connect/test-a-beta-version/testflight-overview/
- https://developer.apple.com/app-store/review/

## 現在の確認状態（2026-10-14、上記の初期チェックリストを更新）

### できていること
- 最新のアプリ本体は紹介サイトとは別のローカルmacOSプロジェクト。配布候補はversion 0.25.0 / build 0.25.2、Bundle ID `io.github.itoshiyou.shiori`。App Store用署名とMac App Storeプロファイルを含むpkgがTestFlightで処理済み。
- App Sandbox、選択ファイルの読み書き、ネットワーククライアント/ローカルサーバー権限、Sandboxを継承するhelperを設定。配布候補のバンドル・署名・プロファイル・pkg検査はローカルでPASS。
- ローカル動画、ノート、スクリーンショット、復習カード、本棚、学習履歴、バックアップ/復元、再起動後の保持をTestFlightで確認。Python回帰テスト、StoreKit仮想テスト、ループバック統合テストも実行済み。TestFlightの確認はこのMacの1環境に限る。
- 無料版は教材10本まで。買い切りProはStoreKit非消耗型で、Product ID `io.github.itoshiyou.shiori.pro`。日本価格は税込1,980円。商品取得、購入シート、キャンセル、未購入時の復元を確認。
- App Store Connectのアプリレコード、年齢区分、説明文、キーワード、カテゴリ、およびTestFlight用ビルドを設定済み。年齢区分は申告内容に基づき16+（地域により異なる）。
- 紹介ページには正式App Storeリンクや外部決済を置いていない。販売開始前の案内にとどめている。

### 提出前に残るゲート
- TestFlight購入シートに確定ボタンが表示されず、実取引・Pro解除・返金後の権利解除は未確認。StoreKitのXcode仮想テストは通過しているが、実Sandbox取引の代替にはならない。
- YouTube字幕/プレイリスト自動取得はyt-dlpを使用する。権利者等の書面許可を確認してから販売版での扱いを決める方針で、許可は確認済みとしていない。紹介ページではこの機能の提供が未確定であることを表示。
- YouTube等の第三者サービスを含むApp Privacy回答は未提出。プライバシーポリシーとサポートページはHTML草案で、公開URLの稼働確認・App Store Connectへの登録が必要。
- App Store用スクリーンショット、IAP審査用画像、App Review連絡先が未登録。紹介ページ内の参考画面は0.20.0のため、提出画像として流用しない。
- Account Holderによる最新Developer Program契約の確認、EU配信の選択と必要なDSAトレーダー申告は本人判断が必要。一般公開・App Review提出は行っていない。

この状態メモは内部作業用の進捗記録であり、発売済み・審査提出済みを意味しない。正式なApp Store URLが確定するまで、購入・ダウンロードリンクを作成しない。

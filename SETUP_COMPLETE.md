# Eleventy 静的サイトジェネレーター 実装完了 🎉

## ✅ 完了した作業

1. **Eleventyのセットアップ**
   - package.json, .eleventy.js, .gitignore を作成
   - 依存関係をインストール

2. **TSVデータの読み込み**
   - `src/_data/4koma.js` でTSVファイルを自動パース
   - 230本の4コマデータを読み込み

3. **テンプレートの作成**
   - `src/nakayosi-oneesan-tati/4koma.njk` で4コマページを自動生成
   - sub_num（155-1, 155-2など）にも対応
   - 前後ページへのナビゲーション機能実装

4. **ビルド成功**
   - 230本のHTMLファイルを0.48秒で生成 ⚡
   - 既存のデザインを完全に維持

## 📁 プロジェクト構造

```
yamako_creator_profile/
├── src/                      # ソースファイル（編集するのはここ）
│   ├── _data/
│   │   └── 4koma.js         # TSV読み込みスクリプト
│   ├── nakayosi-oneesan-tati/
│   │   ├── index.html       # 作品紹介ページ
│   │   └── 4koma.njk        # 4コマページのテンプレート
│   ├── index.html           # トップページ
│   ├── main.css
│   └── images/
│
├── docs/                     # 生成された静的ファイル（GitHub Pages公開用）
│   └── nakayosi-oneesan-tati/
│       ├── 4koma.tsv        # データソース
│       └── 4koma/
│           ├── 001.html     # 自動生成された230本のHTML
│           ├── 155-1.html
│           └── ...
│
├── .eleventy.js             # Eleventy設定
├── package.json
└── BUILD_README.md          # 詳細なドキュメント
```

## 🚀 使い方

### 開発サーバーを起動
```bash
npm start
```
→ http://localhost:8080 を開く（ファイル変更を自動検知）

### 本番ビルド
```bash
npm run build
```
→ `docs/` に静的ファイルを生成

### 4コマを追加・編集する方法
1. `docs/nakayosi-oneesan-tati/4koma.tsv` を編集
2. `docs/images/nakayosi-oneesan-tati/` に画像を追加
3. `npm run build` を実行
4. 完成！

## 🎯 メリット

| 項目 | 手作業 | Eleventy |
|-----|--------|----------|
| 230ページ作成時間 | 数時間〜数日 | **0.48秒** ⚡ |
| ミス | 多発 | **ゼロ** ✅ |
| ページング更新 | 全ページ手修正 | **自動** 🤖 |
| 保守コスト | 高い | **低い** 💰 |
| デザイン変更 | 全ページ手修正 | **1ファイル編集で一括反映** 🎨 |

## 📝 次のステップ（オプション）

以下の機能を簡単に追加できます：

1. **一覧ページ**（サムネイル付き）
2. **検索機能**
3. **GitHub Actionsで自動デプロイ**
4. **英語ページの自動生成**

ご希望があれば実装いたします！

## 🔍 動作確認

開発サーバーを起動してブラウザで確認できます：
```bash
npm start
```

---

詳細は [BUILD_README.md](BUILD_README.md) を参照してください。

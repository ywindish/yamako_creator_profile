# やまこ屋 作品紹介サイト

同人漫画サークル「やまこ屋」の活動内容および作品の紹介ページです。

## 技術スタック

- **静的サイトジェネレーター**: [Eleventy (11ty)](https://www.11ty.dev/)
- **テンプレートエンジン**: Nunjucks
- **データソース**: TSVファイル
- **ホスティング**: GitHub Pages

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 開発サーバーの起動

```bash
npm start
```

ブラウザで http://localhost:8080 を開きます。  
ファイルを編集すると自動的にリロードされます。

### 3. 本番ビルド

```bash
npm run build
```

`docs/` ディレクトリに静的ファイルが生成されます。

## プロジェクト構造

```
.
├── src/                    # ソースファイル
│   ├── _data/             # データファイル
│   │   └── 4koma.js       # TSVを読み込んでJSONに変換
│   ├── _includes/         # テンプレート部品（今後追加予定）
│   ├── index.html         # トップページ
│   ├── main.css           # スタイルシート
│   ├── images/            # 画像ファイル
│   └── nakayosi-oneesan-tati/
│       ├── index.html     # 作品紹介ページ
│       └── 4koma.njk      # 4コマページのテンプレート
│
├── docs/                   # ビルド出力先（GitHub Pages公開用）
│   └── nakayosi-oneesan-tati/
│       ├── 4koma.tsv      # データソース（230本分）
│       └── 4koma/         # 生成される4コマページ
│           ├── 001.html
│           ├── 002.html
│           └── ...
│
├── .eleventy.js           # Eleventy設定ファイル
└── package.json           # npm設定
```

## 4コマまんがの追加・編集方法

### 1. データの編集

`docs/nakayosi-oneesan-tati/4koma.tsv` を編集します。

```tsv
num	sub_num	caption	file_name
231		新しい4コマのキャプション	231-2026020301.jpg
```

### 2. 画像の配置

`docs/images/nakayosi-oneesan-tati/` に画像を配置します。  
ファイル名は `.jpg` で記載していますが、実際は `.png` が使用されます。

### 3. ビルド

```bash
npm run build
```

230本すべてのHTMLファイルが自動生成されます。

## ページング機能

各4コマページには以下のナビゲーションが自動生成されます：

- **トップ**: 作品紹介ページへ戻る
- **まえへ**: 前のページ（1ページ目では非表示）
- **つぎへ**: 次のページ（最終ページでは非表示）

## デプロイ

このプロジェクトはGitHub Pagesで公開されます。

1. `npm run build` でビルド
2. `docs/` ディレクトリをコミット
3. GitHubにプッシュ

GitHub Pagesの設定で「/docs」ディレクトリを公開ディレクトリに指定してください。

### 自動デプロイ（オプション）

GitHub Actionsで自動ビルド・デプロイを設定できます。  
`.github/workflows/deploy.yml` を追加することで、プッシュ時に自動でビルドされます。

## 今後の拡張案

- [ ] 一覧ページ（サムネイル付き）の追加
- [ ] 検索機能
- [ ] タグ・カテゴリ機能
- [ ] 英語ページの自動生成
- [ ] OGP画像の動的生成

## ライセンス

コンテンツの著作権は Yamako に帰属します。

## お問い合わせ

ywindish at yamako-ya.com


# 📝 Next.js 全栈管理システム

これは **Next.js を用いたフルスタックの管理システム** です。フロントエンドとバックエンドが統合されており、実際の業務に近い管理機能を実装しています。

---

## 🚀 使用技術スタック

- **Next.js** - React ベースのフルスタックフレームワーク  
- **Prisma** - ORM（データベース操作）  
- **Ant Design** - UI コンポーネントライブラリ  
- **Tailwind CSS** - ユーティリティファーストの CSS フレームワーク  
- **WangEditor** - 軽量なリッチテキストエディタ  
- **Middleware** - 認証やリクエスト処理のカスタマイズに使用

---

## 🔧 主な機能

1. **ログイン認証とルートガード**  
   - ログイン状態の確認  
   - 未認証ユーザーのリダイレクト制御

2. **ダッシュボード機能**  
   - 基本情報の表示  
   - タブで画面を切り替え可能

3. **記事管理機能**  
   - 記事一覧の表示  
   - タイトルによる曖昧検索  
   - 新規記事の作成  
   - 記事の編集・削除  
   - 画像アップロード機能  
   - WangEditor によるリッチテキスト編集

4. **ユーザー情報管理**  
   - ユーザー一覧の表示  
   - プロフィール画像の表示

---
## スクリーンショット    
### ホーム 履歴書
![首页截图](/public/shouye1.png)

### タブ切り替え
![首页截图](/public/shouye2.png)
![首页截图](/public/shouye3.png)
### 記事管理ページ
![首页截图](/public/shouye4.png)
### 記事と画像のアップロード機能を追加
![首页截图](/public/shouye5.png)
### ユーザー情報ページ
![首页截图](/public/shouye6.png)
---

## 📂 ディレクトリ構成（例）

### 📘 各フォルダの説明

- **app/api/**  
  - `admin/login/route.ts`：ログイン認証とトークンの管理。  
  - `admin/articles/route.ts`：記事の一覧取得、作成、編集、削除のAPI。  

- **app/admin/**  
  - `(admin-layout)`：ダッシュボードのトップページ、タブ切り替え付き。  
  - `layout.tsx`：Ant Design + Tailwind によるナビゲーションレイアウト。

- **middleware.ts**  
  - Next.js のミドルウェア。ログイン状態をチェックし、未ログイン時はリダイレクト。

- **prisma/schema.prisma**  
  - User や Post モデルなど、データベースの構造を定義。

- **src/app/admin/_components**  
  - UIコンポーネント、hooks、ユーティリティ関数、スタイルなどを整理。

- **public/**  
  - 記事画像やユーザーアイコンなど、静的ファイルを格納。

- **構成ファイル**  
  - `.env.example`：環境変数テンプレート。DB接続文字列やJWT秘密鍵など。  
  - `package.json`：開発用スクリプト（dev、build、migrate など）  
  - `next.config.js`、`tsconfig.json`：Next.js や TypeScript の設定。

---




## 🛠️ 開発環境での起動手順

このプロジェクトをローカル環境で実行するには、以下の手順を踏んでください。

### ✅ 前提条件

以下のソフトウェアがインストールされていることを確認してください：

- **Node.js**（バージョン 18 以上を推奨）  
  👉 [Node.js ダウンロードページ](https://nodejs.org/ja/)
- **npm** または **yarn**  
- **Git**
- **SQLite**（Prisma で SQLite を使用している場合）  
  ※ 別のデータベース（例: MySQL/PostgreSQL）を使っている場合は、`.env` ファイルで設定を変更してください。

---

### 📦 インストールと起動手順

```bash
# ① プロジェクトをクローン
git clone https://github.com/Asherzhangy/my-nextjs-app.git

# ② ディレクトリへ移動
cd my-nextjs-app

# ③ 依存関係をインストール
npm install
# または
yarn install

# ④ .env ファイルを作成し、DATABASE_URL を設定
# （例：SQLite を使用する場合）
cp .env.example .env

# ⑤ Prisma のマイグレーションを実行してデータベースを作成
npx prisma migrate dev

# ⑥ 開発サーバーを起動
npm run dev
# または
yarn dev



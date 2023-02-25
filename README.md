# nest_with_next_todo_auth
nest.jsとnext.jsと認証機能を使ったTodoList
認証はJWTを使用。

### docker image　を作成
```
docker compose build
```

### コンテナを起動
```
# フロントエンド、バックエンド、DBのコンテナを起動
docker compose up -d
```
※初回起動時は立ち上げに時間かかる。

### migration & seed
```
# backendコンテナに入る
docker exec -it backend sh

# マイグレーション
npx prisma migrate dev --name init

# seedを入れる
npx prisma db seed

### ブラウザ表示
```
url: http://localhost
```

next.jsの初期画面が表示されていればOK! 表示されない場合は少し待ってからリロードをしてください。

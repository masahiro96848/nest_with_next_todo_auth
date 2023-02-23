# nest_with_next_template
nest.jsとnext.jsでDockerを使ったテンプレート

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

### ブラウザ表示
```
url: http://localhost
```

next.jsの初期画面が表示されていればOK! 表示されない場合は少し待ってからリロードをしてください。

# lostfairy
lostfairyサイトリニューアル
http://lostfairy.com

## リファクタ内容
既存サイトはレガシー設計でhtmlに直にstyleを書いているような箇所もあるので、リデザと同時に内部も修正
テンプレートエンジンはPugとscssを使いタスクランナーにはgulpを使用

## js
軽微なjs実装なので、基本はprototypeベースに実装
jsを大幅に実装する場合はbabelとwebpackを導入し、画面毎にjsの切り出しを行う

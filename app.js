const express = require('express')
const app = express()


// 8080番ポートを利用
app.listen(8080, () => {
  console.log("Start Server");
});

app.get('/hello', (req, res) => {
    console.log("GETリクエストが来たよ！　ここで何かをしよう！")
    // レスポンスに乗せたいコンテンツをここで決めてるよ！
    res.send('Hello ' + req.query.name);
});

app.post('/hello', (req, res) => {
    res.send('Hello ' + req.body.name);
});

app.get('/business-partner-list-page', (req, res) => {
    res.send("<html><body> <h1>HELLO bold</h1> <br> <h2>samplesampe</h2></body> </html>");
});
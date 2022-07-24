const express = require('express')
const fs = require('fs');

//本来business_partner_listはデータベースから持ってきたりなんだりする
const business_partner_list = [
    "businesspartner1",
    "businesspartner2",
    "businesspartner3"
]

const app = express()

// 8080番ポートを利用
app.listen(8080, () => {
  console.log("Start Server");
});


app.get('/business-partner', (req, res) => {
    var bpJson = {"business_partner": business_partner_list}
    res.send(bpJson)
});


app.get('/', (req, res) => {
    var htmlString = `
    <html>
        <body>
            <h1>Top Page</h1>
            <a href="/business-partner-list-page">Business Partnerのリストページに移動</a>
        </body>
    </html>
    `
    console.log(htmlString)
    res.send(htmlString)
});




app.get('/business-partner-list-page-v1', (req, res) => {
    var htmlString = `
    <html>
        <script>
            function setupBody() {
                // 画面が読み込まれた後にこの関数が呼ばれる

                // タイトルを追加
                const h1Element = document.createElement('h1')
                h1Element.textContent = "Business Partnerリスト"
                document.getElementById("body").appendChild(h1Element)    
            }
        </script>
        <body id="body" onload="setupBody();">
        </body>
    </html>
    `
    console.log(htmlString)
    res.send(htmlString)
});


app.get('/business-partner-list-page-v2', (req, res) => {
    var htmlString = `
    <html>
        <script>
            function setupBody() {
                // 画面が読み込まれた後にこの関数が呼ばれる

                // タイトルを追加
                const h1Element = document.createElement('h1')
                h1Element.textContent = "Business Partnerリスト"
                document.getElementById("body").appendChild(h1Element)    
                
                // リストを追加
                const ulElement = document.createElement('ul')
                const liElement = document.createElement('li')
                liElement.textContent = "ハードコードしたビジネスパートナー"
                ulElement.appendChild(liElement)
                document.getElementById("body").append(ulElement)
            }
        </script>
        <body id="body" onload="setupBody();">
        </body>
    </html>
    `
    console.log(htmlString)
    res.send(htmlString)
});


app.get('/business-partner-list-page-v3', (req, res) => {
    var htmlString = `
    <html>
        <script>
            function setupBody() {
                // 画面が読み込まれた後にこの関数が呼ばれる


                // タイトルを追加
                const h1Element = document.createElement('h1')
                h1Element.textContent = "Business Partnerリスト"
                document.getElementById("body").appendChild(h1Element)    
                

                // リストを追加
                const ulElement = document.createElement('ul')

                fetch('/business-partner')
                    .then(response => response.json())
                    .then(data => {
                        // データを取得出来たらこのスクリプトが動く
                        console.log(data)
                        business_partner_list = data['business_partner']
                        business_partner_list.forEach((bp) => {
                            const liElement = document.createElement('li')
                            liElement.textContent = bp
                            ulElement.appendChild(liElement)
                        })
                        document.getElementById("body").append(ulElement)
                    })
            }
        </script>
        <body id="body" onload="setupBody();">
        </body>
    </html>
    `
    console.log(htmlString)
    res.send(htmlString)
});

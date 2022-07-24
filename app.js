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


app.get('/business-partner-list-page-v1', (req, res) => {
    var htmlString = `
    <html>
        <body>
            <h1>Business Partnerリスト</h1>
            <ul>
                <li>Blue cheese</li>
                <li>Feta</li>
            </ul>
        </body>
    </html>
    `
    console.log(htmlString)
    res.send(htmlString)
});


app.get('/business-partner-list-page-v2', (req, res) => {
    var htmlString = `
    <html>
        <body>
            <h1>Business Partnerリスト</h1>
            <ul>
                bp_list
            </ul>
        </body>
    </html>
    `
    htmlString = htmlString.replace("bp_list", "<li>bp1</li>")

    res.send(htmlString)
});


app.get('/business-partner-list-page-v3', (req, res) => {
    var htmlString = `
    <html>
        <body>
            <h1>Business Partnerリスト</h1>
            <ul>
                bp_list
            </ul>
        </body>
    </html>
    `

    liString = ""
    
    business_partner_list.forEach((bp) => {
        liString += "<li>" + bp + "</li>"
    })
    
    /* この書き方でもOK
    for (let i = 0; i < business_partner_list.length; i++){
        liString += "<li>" + business_partner_list[i] + "</li>"
    }
    */

    htmlString = htmlString.replace("bp_list", liString)
    res.send(htmlString)
});
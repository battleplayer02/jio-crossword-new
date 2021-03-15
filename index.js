var express = require('express');
const port = process.env.PORT || 3000
var app = express();
var server = app.listen(port, function () {
    console.log('listening for requests on port 4000,');
});
app.use(express.static('public'));


app.get('/api/crossword', (req, res) => {
    let data = [
      { answer: "ENODEB", clue: "The base stations in 4G LTE networks. "},
      { answer: "LTE", clue: "Standard for wireless broadband "},
      { answer: "VOLTE", clue: "Stands for 'Voice over Long Term Evolution'."},
      { answer: "STB", clue: "Device needed to receive and watch digital television on a ordinary television." },
      { answer: "ONT", clue: "Refers to the consumer end equipment in an optical Fiber link"},
      { answer: "HTB", clue: "Compact fiber wall outlet at the final fiber termination point in the customer premises"},
      { answer: "ARPU", clue: "The total revenue divided by the number of subscribers"},
      { answer: "RECHARGE", clue: "Done to increase validity of pre-paid account"},
      { answer: "PRIMARY", clue: "_________ Rate Interface allows for 23 concurrent transmissions of voice, data, or video traffic between the network and the user."},
      { answer: "SECONDARY", clue: "Sec"},
      { answer: "EKYC", clue: "Digital process to verify the identity of customers."},
      { answer: "SIM", clue: "A microchip that connects it to a particular phone network."},
      { answer: "ACQUISITION", clue: "The process of gaining a new customer"},
      { answer: "POSTPAID", clue: "The payment for services are made, after the services are used"},
      { answer: "PREPAID", clue: "Credit is purchased in advance of service use"},
      { answer: "JOIFI", clue: "Allows multiple users and mobile devices to access Jio's 4G high-speed internet connectivity and create a personal Wi-Fi hotspot."},
      { answer: "JOIFIBER", clue: "Fiber internet broadband service by Jio"},
      { answer: "CRNTRIX", clue: "Central office-based telecommunications system owned by an outside service provider. "},
      { answer: "LEASEDLINE", clue: "A private telecommunications circuit between two or more geographically distant locations."},
      { answer: "VPN", clue: "Provides privacy, anonymity and security to users by creating a private network connection across a public network connection."},
    ]
    var clg = require("crossword-layout-generator");
    var layout = clg.generateLayout(data);
    var rows = layout.rows;
    var cols = layout.cols;
    var table = layout.table; // table as two-dimensional array
    var output_html = layout.table_string; // table as plain text (with HTML line breaks)
    var output_json = layout.result;
    res.send(output_json)
  })
  
  

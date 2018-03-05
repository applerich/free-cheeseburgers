var request = require('request');
var chalk = require('chalk');
var fs = require('fs');

var green = chalk.green
var bg = chalk.bgGreen
var red = chalk.red

proxy = []
//"http://user:pw@ip:port"
console.log(bg('                                                                                                '))
console.log('')
console.log('')
console.log('')
console.log(green("Free cheeseburger script made by @ioganio / Loganio (spelled with i becuase i dont take L's"))
console.log('')
console.log('')
console.log('')
console.log(bg('                                                                                                '))

function start(callback) {
fs.readFile('./config.json', function(error, data) {
    if(error) { console.log(red(error)); }
    
    info = JSON.parse(data);
    var catchall = info.catchall
    for (let i = 0; i < info.proxies.length; i++) {
        proxy.push(info.proxies[i]);
    }
    console.log('Found ' + info.proxies.length + ' proxies')
    callback(catchall)
    })
}

var habitURL = 'https://www.habitburger.com/signup/'
function getInfo(catchall) {

    for(let i = 0; i < proxy.length * 4; i++) { 
        var email = Math.floor(Math.random() *1234938).toString() + "@" + catchall
        let opts = {
            method: "POST",
            url: habitURL,
            gzip: true,
            json: true,
            headers: {
                "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
                "Accept-Encoding":"gzip, deflate, br",
                "Accept-Language":"en-US,en;q=0.9",
                "Cache-Control":"max-age=0",
                "Connection":"keep-alive",
                "Content-Type":"multipart/form-data; boundary=----WebKitFormBoundaryvEv7D2b584Ww9gOY",
                "Origin":"https://www.habitburger.com",
                "Referer":"https://www.habitburger.com/signup/",
                "Upgrade-Insecure-Requests":"1",
                "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36"
    
            },
            formData: {
                'gform_target_page_number_6': '0',
                'is_submit_6'               : '1',
                'input_9'                   : 'CharClub Signup Page',
                'input_8'                   : '2608',
                'state_6'                   : 'WyJbXSIsIjAzN2JjZjRmOTZkOTZjNTZmNzQ1ZGM3ODIzYTgzYzM4Il0=',
                'input_3'                   : '65',
                'input_2'                   :  email,
                'input_7'                   : '6ABC7BEC-536E-462C-ABD3-EE3E2F6E233B',
                'input_6'                   : '92602',
                'input_5'                   : '13',
                'input_4'                   : '06',
                'gform_source_page_number_6': '1',
                'gform_submit'              : '6',
                'gform_field_values'        : '',
                'input_16'                  : '',
                'input_15'                  : '',
                'input_14'                  : '',
                'input_13'                  : '',
                'input_12'                  : '',
                'input_11'                  : "kyle",
                'input_10'                  : "loopious",
                'gform_unique_id'           : ''
            },
           proxy: proxy[Math.floor(Math.random() * proxy.length)]
        }
        try {
       //console.log(email)
        request(opts, function(error, response, body) { 
            if(error) { console.log(error)}
                console.log(green('You just got a free cheeseburger!'));
            })
        }
        catch(error) {}
    }

}
start(getInfo)


const playwright = require('playwright');
const https = require('https');

const browserType = 'chromium'; // chrome

const url = 'https://justwork11.000webhostapp.com/mydevapps/AllenJson.json';

async function main(cookiesArr) {
    console.log('started....');
    const browser = await playwright[browserType].launch({ headless: false });
    const context = await browser.newContext();
    // ----cookies---
    cookiesArr.forEach(async cookieObj => {
        await context.addCookies([cookieObj]);
    });
    // await context.addCookies([{ name: ".allenbpms.in", value: "tz8T2eZvESq6UtjJG9a8OW3Z_Ke4_qP-OPIowBVGG43krENeTHuM4hygahx4-2aMZvT2iaDegFfRGurMfzltAy3f-VliT_6wJACQ2l8okA1KicDr78CjMlLbJ0feZlrDbWDooFHwbfgOZrlRQEjTZJtqwDDYL__73noNIEn5ZEannMS-0lRdR98E6akHdjpnNUX6D-jRBeNTQ6x52_BhdM2mpH-lfvBZENdp-S4NbXfDUhd6PRhtfDuaiBKnD___BemTfKAU4hWGTWQq2_FzaIv-0KQPXJW__-A-OkNJ2gFaoxJfLfyHtuR0hBCWuvRhxm-_V3IlVnaWqtNKQUW7xqdcPTs3H_K0AjKQm2Se0bhfnGvAnwCZdjYFsSE4F8coghNXWf3sD4USpdsKacm46yqVgd4B3i9VxHr_KTJAOjFGOUgtA8A_C1TqkVHg-IpCoCMBZpWlWI2eglgbzhjWugbYNR_XnueiAyhr47M5-GeI0CcvaUPRct2Zn02YwYFQuuPHiQTHEbT_hw38hbJAb9fASFGRxfrFRncT7MN2L8NzNM0hgB6ritY669kzNAaYJHA52XGSUJudAPMQIBUfo54ATrlWwjSVKiuBKBQxbneB8o9aiCAWO6ZlTy1rnwvR3OsgUppxjQu2DpzFE5_gIcPw2WsilTFJFYD-buvdEceKnLcGLam-5gKs7N_NpP6hchNUVTCUsn3P0im52B4V7DNucdlVWh5J7pAV1O8YM3udB5kLftRx6F4NlAdUDIhLY0RhP9Q1LUHwnfmTp4a8Blln_JpF7Oumu61Q9H4gQ9D-1q1CX7Lk6BMKwgOI76GU2DEGjx1lW0pA_b-F_Ch1dJTNk3MZVr1FXKdNeuQ5pRPeJ8ianYFugdM0sWbwZ-kRZF7Mt8Qi_uO4zTxd_EtpF6Z4AUs", url: "https://.allenbpms.in/" }]);
    // await context.addCookies([{ name: "ASP.NET_SessionId", value: "05rdvxpikgrunb0lv4023cqb", url: "https://student.allenbpms.in/" }]);
    // await context.addCookies([{ name: "__RequestVerificationToken", value: "26wXqUC24BLWiz5qVGf9E7aYabGQqH5hL_f3JDfkeaM5eHXwFoRMq6n9neR1_P7Mqt1nbwHK98yP_PiR82c7PlcDgQ81", url: "https://student.allenbpms.in/" }]);
    let time = undefined;

    let checking = setInterval(gocheck, 1500);

    async function gocheck() {
        time = new Date().toTimeString({
            timeZone: 'Asia/Kolkata'
        }).slice(0, 5);
        let hrs = time.slice(0, 2);
        let mins = time.slice(3, 5);
        if (hrs == 08) {
            if (mins == 16) {
                // ------------------main-------------------
                clearInterval(checking);
                const page = await context.newPage();
                await page.goto('https://allenbpms.in/');// Opening bpms page
                await page.goto('https://student.allenbpms.in/JAIPUR/digital-doubt/Himanshu-Rawat?token=/');// Opening bpms page

                const ourLink = await page.getByText('Attend Live Class');
                await ourLink.click();
                setTimeout(async () => {
                    const joinBtn = await page.getByText('Join');
                    await joinBtn.click();
                }, 3000)

                let outing = setInterval(() => {
                    time = new Date().toTimeString({
                        timeZone: 'Asia/Kolkata'
                    }).slice(0, 5);
                    let hrs = time.slice(0, 2);
                    let mins = time.slice(3, 5);
                    if (hrs == 08) {
                        if (mins == 40) {
                            // ------------close page-----------------
                            page.close();
                            clearInterval(outing);
                            checking = setInterval(gocheck, 1500);
                        }
                    }
                }, 1000)
            }
        }
    }
}

https.get(url, (res) => {
    var body = '';

    res.on('data', (chunk) => {
        body += chunk;
    });

    res.on('end', () => {
        var fbResponse = JSON.parse(body);
        main(fbResponse);
    });
}).on('error', function (e) {
    console.log("Got an error: ", e);
});
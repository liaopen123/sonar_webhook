const request = require('request');
module.exports = {

    pushCodeModify: (status,bugCount,codeSmell,newDuplicatedLines,projectUrl,accessToken) => {
        let sonarResult = "最新代码检测结果：通过👍🏻";
        let titleColor = "#008000";
        if (status==="ERROR") {
            sonarResult = "最新代码检测结果：不通过💣";
            titleColor = "#FF0000";
        }
        const title = "### <font color="+titleColor+"> "+sonarResult+"\n";
        const content =title+"#### BUG数:"+ bugCount+ " \n "
            + "#### 异味代码数:"+ codeSmell+ " \n "
            + "#### 重复行数:"+ newDuplicatedLines+ " \n "
            + "#### [查看报告]("+ projectUrl+ ")"

        pushMessage("扫码结果", content,accessToken)
    },



}


function pushMessage(title, content,accessToken) {
    let data = {
        "msgtype": "markdown",
        "markdown": {
            "title": title,
            "text": content
        },
    }

    // let data = {
    //     "msgtype": "markdown",
    //     "markdown": {
    //         "title":"杭州天气",
    //         "text": "#### 杭州天气 @150XXXXXXXX \n > 9度，西北风笨笨1级，空气良89，相对温度73%\n > ![screenshot](https://img.alicdn.com/tfs/TB1NwmBEL9TBuNjy1zbXXXpepXa-2400-1218.png)\n > ###### 10点20分发布 [天气](https://www.dingtalk.com) \n"
    //     },
    //     "at": {
    //         "atMobiles": [
    //             "150XXXXXXXX"
    //         ],
    //         "atUserIds": [
    //             "user123"
    //         ],
    //         "isAtAll": false
    //     }
    // }
    request.post(//发送post
        "https://oapi.dingtalk.com/robot/send?access_token="+accessToken,
        {
            json: data,
            encoding: "utf-8",
            headers: {
                'Content-Type': 'application/json'
            }
        },
        function (error, response, body) {
            if (!error && response.statusCode === 200) {
                console.log(body)//成功返回
            }
        }
    );

}

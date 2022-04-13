# sonar_webhook
sonar 钉钉推送
## 食用方法:
```
docker pull liaopen123/sonar-webhook:0.0.1

sudo docker run -d -p 9234:9234 --restart=always     liaopen123/sonar-webhook
```
默认端口为9234
在网络调用的url设置为:
http://部署的服务器IP:9234/webhook?access_token=xxxxx
access_token为钉钉机器人的access_token。
设置关键字包含:
> 最新代码检测结果：通过👍🏻
> BUG数:0
> 异味代码数:75
> 重复行数:0
> 查看报告
其中任一即可


默认推送的值有：
BUG数:0
异味代码数:75
重复行数:0
需要你 quality_gates 质量阈里面设置并默认。
别忘了在 配置--通用--Server base URL 中修改你的地址为服务器地址(格式：http://81.71.28.121/)。否则项目地址会是localhost

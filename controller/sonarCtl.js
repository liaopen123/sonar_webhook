const pushService = require("./pushService");
module.exports = {

    saveRemark: async (ctx, next) => {
        let {
            qualityGate,
            project,
        } = ctx.request.body
        const accessToken =ctx.request.query.access_token;
        console.log("post:得到的参数:" + qualityGate.name+ ",,,,access_token:"+accessToken)
        let status = qualityGate.status;// "ERROR" 和  "OK"
        let projectUrl = project.url;// 地址
        let bugCount = "0"
        let codeSmell = "0"
        let newDuplicatedLines = "0"
        qualityGate.conditions.forEach((info,item)=>{
            if (info.metric==="new_bugs") {
                bugCount = info.value;
            }
            if (info.metric==="new_code_smells") {
                codeSmell = info.value;
            }
            if (info.metric==="new_duplicated_lines") {
                newDuplicatedLines = info.value;
            }
        });
        pushService.pushCodeModify(status,bugCount,codeSmell,newDuplicatedLines,projectUrl,accessToken)
        ctx.body = {code: 200, message: "success"};

    },


}

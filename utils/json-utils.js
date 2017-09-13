/**
 * Created by Asura on 2017-01-31 .
 */
const fs = require('fs');

var JsonUtils = {
    'getDataByUrl':(url, encoding='utf8') => {
        var data = fs.readFileSync(url, encoding);
        return data?JSON.parse(data):{};
    },
    'getStaticByName': (fileName, encoding='utf8') => {
        return JsonUtils.getDataByUrl('static/private/json/'+fileName+'.json', encoding);
    }
};

module.exports = JsonUtils;

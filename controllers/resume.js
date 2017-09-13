const JsonUtils = require('../utils/json-utils');

var resumeData = JsonUtils.getStaticByName('resume');

async function getIndexHtml(ctx, next){
    resumeData = JsonUtils.getStaticByName('resume');
    ctx.render('resume/index.html', {
        root:''
    });
}

async function getStaticHtml(ctx, next){
    var rpath = ctx.request.path.replace(/^\//, '');
    var rdata = extendCopy(resumeData[rpath.match(/\/([^\/.]*)./)[1]]||{});
    rdata.root = '';
    ctx.render(rpath, rdata);
}

function extendCopy(p) {
    var c = {};
    for (var i in p) {
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}

module.exports = {
    'GET /resume/': getIndexHtml,
    'GET /resume/index.html': getIndexHtml,
    'GET /resume/home.html': getStaticHtml,
    'GET /resume/about.html': getStaticHtml,
    'GET /resume/skill.html': getStaticHtml,
    'GET /resume/exp.html': getStaticHtml,
    'GET /resume/demo.html': getStaticHtml,
    'GET /resume/contact.html': getStaticHtml
};
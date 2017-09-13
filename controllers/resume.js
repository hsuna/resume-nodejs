const JsonUtils = require('../utils/json-utils');

var resumeData = JsonUtils.getStaticByName('resume');

async function getIndexHtml(ctx, next){
    resumeData = JsonUtils.getStaticByName('resume');
    ctx.render('index.html', {
        root:''
    });
}

async function getStaticHtml(ctx, next){
    var rpath = ctx.request.path.replace(/^\//, '');
    var rdata = extendCopy(resumeData[rpath.match(/([^\/.]*)./)[1]]||{});
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
    'GET /': getIndexHtml,
    'GET /index.html': getIndexHtml,
    'GET /home.html': getStaticHtml,
    'GET /about.html': getStaticHtml,
    'GET /skill.html': getStaticHtml,
    'GET /exp.html': getStaticHtml,
    'GET /demo.html': getStaticHtml,
    'GET /contact.html': getStaticHtml
};
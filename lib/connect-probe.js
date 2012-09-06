module.exports = probe;

function probe (options) {
    options = options || {};

    var path = options.path || '/probe';
    var uptime = options.uptime;

    return function (req, res, next) {
        if (req.originalUrl !== path) return next();
        if (req.method === 'OPTIONS') return res.end('GET\n');
        return res.end('OK' + (uptime ? ' ' + process.uptime() : '') + '\n');
    };
}

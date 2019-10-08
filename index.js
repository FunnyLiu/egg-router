'use strict';

const KoaRouter = require('./lib/router');
const EggRouter = require('./lib/egg_router');

// for compact
// 入口文件，暴露lib/router的KoaRouter和lib/egg_router的EggRouter。
module.exports = KoaRouter;
module.exports.KoaRouter = KoaRouter;
module.exports.EggRouter = EggRouter;


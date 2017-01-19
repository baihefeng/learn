/**
 * Created by neo.white on 2016/11/24.
 */
const getGlobal =  () => {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
};
module.exports = getGlobal;
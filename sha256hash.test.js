// for testing 
const Block = require('./sha256hash')
const block1 = new Block(1, Date.now(), "Awoke Zemenu", "AW12098BGFY12SWEKIU231NH563")

console.log(block1.calculateHash())
/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
  "https://www.maimemo.com/share/page?uid=6224378&pid=c669fb2afe25988898b0f2453e4409fd&tid=179686c5c8c61568ee7a8082fc1d2de0"
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=6224378&pid=c8a40bd752a7bc987fc5afc0abca8ed3&tid=2757233a0e95928e0a6b8a9ca1f03acb"
    
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }

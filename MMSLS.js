/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
  "https://www.maimemo.com/share/page?uid=6224378&pid=834ae1f176ad63898454d8fb1eb3bc4d&tid=e502bd8b2dd4716059472de57982a9d3"
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=6224378&pid=cea3fe88cdde66b413b59da9a32a8596&tid=1753023ad8c18ddcf64beca17a1c5547"
    
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

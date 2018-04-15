export default {
  kilo: function (num) {
    let [temp, tempStr, strArray, str] = [[], '', num.toString().split('.'), strArray[0]]
    str = str.split('').reverse()
    for (let i = 0; i < str.length; i++) {
      if ((i + 1) % 3 === 0 && i + 1 !== str.length) {
        temp.push(str[i])
        temp.push(',')
      } else {
        temp.push(str[i])
      }
    }
    tempStr = temp.reverse().join('')
    if (strArray.length > 1) {
      tempStr = tempStr + '.' + strArray[1]
    }
    return tempStr
  },
  MP: function (ak) {
    return new Promise(function (resolve, reject) {
      window.init = function () {
        resolve(BMap)
      }
      let script = document.createElement('script')
      script.type = 'text/javascript'
      script.src = 'http://api.map.baidu.com/api?v=2.0&ak=' + ak + '&callback=init'
      script.onerror = reject
      document.head.appendChild(script)
    })
  },
  Arabia_To_SimplifiedChinese: function (Num) {
    for (let i = Num.length - 1; i >= 0; i--) {
      Num = Num.replace(',', '')//替换Num中的“,”
      Num = Num.replace(' ', '')//替换Num中的空格
    }
    if (isNaN(Num)) { //验证输入的字符是否为数字
      //alert('请检查小写金额是否正确');
      return
    }
    //字符处理完毕后开始转换，采用前后两部分分别转换
    let part = String(Num).split('.')
    let returnChar = ''
    //小数点前进行转化
    for (let i = part[0].length - 1; i >= 0; i--) {
      if (part[0].length > 10) {
        //alert('位数过大，无法计算')
        return ''
      }//若数量超过拾亿单位，提示
      let tmpnewchar = ''
      let perchar = part[0].charAt(i)
      switch (perchar) {
        case '0':
          tmpnewchar = '零' + tmpnewchar
          break
        case '1':
          tmpnewchar = '一' + tmpnewchar
          break
        case '2':
          tmpnewchar = '二' + tmpnewchar
          break
        case '3':
          tmpnewchar = '三' + tmpnewchar
          break
        case '4':
          tmpnewchar = '四' + tmpnewchar
          break
        case '5':
          tmpnewchar = '五' + tmpnewchar
          break
        case '6':
          tmpnewchar = '六' + tmpnewchar
          break
        case '7':
          tmpnewchar = '七' + tmpnewchar
          break
        case '8':
          tmpnewchar = '八' + tmpnewchar
          break
        case '9':
          tmpnewchar = '九' + tmpnewchar
          break
      }
      switch (part[0].length - i - 1) {
        case 0:
          tmpnewchar = tmpnewchar
          break
        case 1:
          if (perchar != 0) tmpnewchar = tmpnewchar + '十'
          break
        case 2:
          if (perchar != 0) tmpnewchar = tmpnewchar + '百'
          break
        case 3:
          if (perchar != 0) tmpnewchar = tmpnewchar + '千'
          break
        case 4:
          tmpnewchar = tmpnewchar + '万'
          break
        case 5:
          if (perchar != 0) tmpnewchar = tmpnewchar + '十'
          break
        case 6:
          if (perchar != 0) tmpnewchar = tmpnewchar + '百'
          break
        case 7:
          if (perchar != 0) tmpnewchar = tmpnewchar + '千'
          break
        case 8:
          tmpnewchar = tmpnewchar + '亿'
          break
        case 9:
          tmpnewchar = tmpnewchar + '十'
          break
      }
      returnChar = tmpnewchar + returnChar
    }
    //替换所有无用汉字，直到没有此类无用的数字为止
    while (returnChar.search('零零') != -1 || returnChar.search('零亿') != -1 || returnChar.search('亿万') != -1 || returnChar.search('零万') != -1) {
      returnChar = returnChar.replace('零亿', '亿')
      returnChar = returnChar.replace('亿万', '亿')
      returnChar = returnChar.replace('零万', '万')
      returnChar = returnChar.replace('零零', '零')
    }
    //替换以“一十”开头的，为“十”
    if (returnChar.indexOf('一十') == 0) {
      returnChar = returnChar.substr(1)
    }
    //替换以“零”结尾的，为“”
    if (returnChar.lastIndexOf('零') == returnChar.length - 1) {
      returnChar = returnChar.substr(0, returnChar.length - 1)
    }
    return returnChar
  }
}

>场景：给定字符串，实现字符串倒序
var str = 'jirenguhungervalley'
输出'yellavregnuhugnerij'

###思路：字符串转数组-->数组倒序-->数组转字符串
####需要使用的方法   split、reverse、join
- #string
>`split() `方法使用指定的分隔符字符串将一个[`String`]对象分割成字符串数组，以将字符串分隔为子字符串，以确定每个拆分的位置。
```
 var arr = str.split("")
 console.log(arr)   // ["j", "i", "r", "e", "n", "g", "u", "h", "u", "n", "g", "e", "r", "v", "a", "l", "l", "e", "y"]
Tip: 如果空字符串("")被用作分隔符，则字符串会在每个字符之间分割。
```
- #reverse
>reverse方法用于颠倒排列数组元素，返回改变后的数组。注意，该方法将改变原数组。
```
arr.reverse(); //["y", "e", "l", "l", "a", "v", "r", "e", "g", "n", "u", "h", "u", "g", "n", "e", "r", "i", "j"]
```
- #join
>join()方法以指定参数作为分隔符，将所有数组成员连接为一个字符串返回。如果不提供参数，默认用逗号分隔。
```
arr.join("");//"yellavregnuhugnerij"
```
完整代码
```
function  sortString(str){
    var arr = str.split("");
    arr.reverse();
    return arr.join("")
}
var str = 'jirenguhungervalley'
var str2 = sortString(str)
console.log(str2) // 'yellavregnuhugnerij'
```

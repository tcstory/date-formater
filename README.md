### dateFormater
帮助你把日期格式化为想要的中文格式

### 参数
使用的是所有对于 **原生** `Date` 对象合法的参数
`MM`, `dd`, `HH`, `mm`, `ss`, `qq`: 当生成的输出是一位数的时候,会加入**前置**的0,例如,`2`=>`02`,反之`M`, `d`, `H`, `m`, `s`, `q`则不会
`yyyy`:返回四位数的年份,`yy`返回年份的后两位

### 例子

    import dateFormater from 'dateformater-tc'
    (dateFormater()).format('yyyy年MM月dd日 HH时mm分ss秒.S 第qq季度 第D天 F')
    // 2016年06月09日 16时34分43秒.601 第02季度 第161天 星期四
    (dateFormater(2016,1,1)).format('yyyy年MM月dd日 HH时mm分ss秒.S 第qq季度 第D天 F')
    // "2016年02月01日 00时00分00秒.0 第01季度 第32天 星期一"
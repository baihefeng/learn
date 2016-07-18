#概述

##宗旨

>Markdown 的目标是实现「易读易写」。

    可读性，无论如何，都是最重要的。一份使用 Markdown 格式撰写的文件应该可以直接以纯文本
    发布，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的
    影响，包括 Setext、atx、Textile、reStructuredText、Grutatext 和 EtText，而最大灵感来源其实是纯文本电子邮件的格式。

    总之， Markdown 的语法全由一些符号*\[mark\]*所组成，这些符号经过精挑细选，其作用一目了然。比如：在文字两旁加上星号，看起来
    就像*强调*。Markdown 的列表看起来，嗯，就是列表。Markdown 的区块引用看起来就真的像是引用一段文字，就像你曾在电子邮件中见过
    的那样。

    当然，也完全只是html的书写模式

##区块元素

###标题H1-H6

由＃的数量对应h1-h6标签
    
# 这是一个＃，对应h1
## 这是两个＃，对应h2
### 这是三个＃，对应h3
#### 这是四个，对应h4
##### 这是五个＃，对应h5
###### 这是六个＃，对应h6
    

###引用块 Blockquotes
html是用p标签代表段落，markdown用blockquotes，即引用来代表段落，引用中可以用其他的mark

###列表
无序列表用\*,+,-即多余一个空格来表示，有序列表用数字加英文点来表示，为了提高可读性，请用相同缩进。
当混合这些符号使用时，可以会导致得到的并非自己想要的结果，为了避免不必要的麻烦，请用相同符号表示一组列表
在这些符号前，进行缩进，则会形成嵌套列表
数字后面带英文点，想保留则需要用转义符转义\,如1980\.

*   this is list,use *
  *   this is list,use *
     *   this is list,use *

-   this is list,use -
-     this is list,use -
     -   this is list,use -

+   this is list,use +
   +   this is list,use +

1.  this is list,use 1.
     1.  this is list,use 1.
       1.  this is list,use 1.

###代码区块\<pre\>

代码区块用4个空格或一个tab键来实现,当嵌套在其他mark中时要double

这里是普通段落

    这里是代码区块<p>,function(){}

>     这里也是代码区块<p>,function(){}，做了两个tab缩进，因为是在引用区块中

###分割线

你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：
  
  \* * *
  
  \***
  
  \- - - 
  
  \----------
  
  \____________
  
###表格

    |标头|标头|标头|
    |:--|:-:|--:|
    |左对齐|剧中对其|右对其|

|标头|标头|标头|
|:--|:-:|--:|
|左对齐|剧中对其|右对其|

##区段元素

###链接

Markdown 支持两种形式的链接语法： 行内式和参考式两种形式。

不管是哪一种，链接文字都是用 [方括号] 来标记。

要建立一个行内式的链接，只要在方块括号后面紧接着圆括号并插入网址链接即可，如果你还想要加上链接的 title 文字，只要在网址后面，用双引号把 title 文字包起来即可，例如：

    This is [an example](http://example.com/ "Title") inline link.带title的写法
    [This link](http://example.net/) has no title attribute.不带title的写法
    See my [About](/about/) page for details.先对路径写法
    This is [an example][id] reference-style link. id表示法
    [id]: http://example.com/  "Optional Title Here"
    简易id写法[google][]
    [google]: http://google.com/        "Google"
    <http://example.com/>
    <address@example.com>
    
[id]: http://example.com/  "Optional Title Here"
[google]: http://google.com/        "Google"
会产生：

This is [带title](http://example.com/ "Title") inline link.

[不带title](http://example.net/) has no title attribute.

See my [相对路径](/about/) page for details.

This is [这是id表示法][id] reference-style link.

简易id写法[google][]

<http://example.com/>

<address@example.com>

### 强调

Markdown 使用星号（*）和底线（_）作为标记强调字词的符号，被 * 或 _ 包围的字词会被转成用 <em> 标签包围，用两个 * 或 _ 包起来的话，则会被转成 <strong>，例如：

    *single asterisks*

    _single underscores_

    **double asterisks**

    __double underscores__

*single asterisks*

_single underscores_

**double asterisks**

__double underscores__

### 代码\<code\>

如果要标记一小段行内代码，你可以用反引号把它包起来（`），例如：

    Use the `printf()` function.
    ``There is a literal backtick (`) here.``
    A single backtick in a code span: `` ` ``
    A backtick-delimited string in a code span: `` `foo
    Please don't use any `<blink>` tags.
    `&#8212;` is the decimal-encoded equivalent of `&mdash;`.
    
会产生：

Use the `printf()` function.

``There is a literal backtick (`) here.``

A single backtick in a code span: `` ` ``

A backtick-delimited string in a code span: `` `foo` ``

Please don't use any `<blink>` tags.

`&#8212;` is the decimal-encoded equivalent of `&mdash;`.

### 图片

很明显地，要在纯文字应用中设计一个「自然」的语法来插入图片是有一定难度的。
Markdown 使用一种和链接很相似的语法来标记图片，同样也允许两种样式： 行内式和参考式。
行内式的图片语法看起来像是：

    ![Alt text](/path/to/img.jpg)
    ![Alt text](/path/to/img.jpg "Optional title")
    ![Alt text][id]
    [id]: url/to/image  "Optional title attribute"

会输出：

![Alt text](http://img0.bdstatic.com/static/searchdetail/img/logo-2X_fae0455.png)

![Alt text](http://img0.bdstatic.com/static/searchdetail/img/logo-2X_fae0455.png "Optional title")

![Alt text][id]

[id]: http://img0.bdstatic.com/static/searchdetail/img/logo-2X_fae0455.png  "Optional title attribute"




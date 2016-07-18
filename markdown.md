#概述

<h3>宗旨</h3>

>Markdown 的目标是实现「易读易写」。

    可读性，无论如何，都是最重要的。一份使用 Markdown 格式撰写的文件应该可以直接以纯文本
    发布，并且看起来不会像是由许多标签或是格式指令所构成。Markdown 语法受到一些既有 text-to-HTML 格式的
    影响，包括 Setext、atx、Textile、reStructuredText、Grutatext 和 EtText，而最大灵感来源其实是纯文本电子邮件的格式。

    总之， Markdown 的语法全由一些符号*\[mark\]*所组成，这些符号经过精挑细选，其作用一目了然。比如：在文字两旁加上星号，看起来
    就像*强调*。Markdown 的列表看起来，嗯，就是列表。Markdown 的区块引用看起来就真的像是引用一段文字，就像你曾在电子邮件中见过的那样。

    当然，也完全只是html的书写模式

##对应标签及表现

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

###代码区块

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
  
>
>


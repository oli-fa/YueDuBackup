
---

<p align="center" style="color:red;font-size:28px;font-weight:bold"> 我的<span style="color:#ff00ff">阅读</span>app数据备份</p>
<center>
<a href="https://github.com/ifwlzs/YueDuBackup/"><img src="https://img.shields.io/badge/GitHub-项目地址-66ccff" /></a>
<a href="https://ifwlzs.github.io/YueDuBackup/"><img src="https://img.shields.io/badge/首页-首页-E5C681" /></a>
<a href="https://ifwlzs.github.io/YueDuBackup/teach"><img src="https://img.shields.io/badge/教程-导入源-46954A" /></a>
<a href="https://ifwlzs.github.io/YueDuBackup/source"><img src="https://img.shields.io/badge/资源-整理-802BCF" /></a>
<a href="https://ifwlzs.github.io/YueDuBackup/tool"><img src="https://img.shields.io/badge/工具-美化发现-015DA0" /></a>
</center>


---

<p align="center"style="color:red;font-size:30px;font-weight:bold">目录</p>

* [软件下载](#软件下载)
    * [阅读(2\.0)下载地址](#阅读20下载地址)
    * [阅读(3\.0)下载地址](#阅读30下载地址)
* [软件的官方账号](#软件的官方账号)
* [个人备份说明](#个人备份说明)
* [备份文件说明](#备份文件说明)
    * [2\.0版本](#20版本)
    * [3\.0前期版本(2021年之前？)](#30前期版本2021年之前)
    * [3\.0后期版本(2021\-至今)](#30后期版本2021-至今)
* [阅读使用教程](#阅读使用教程)
* [资源共享(各类源)](#资源共享各类源)
* [关耳\-美化发现工具](#关耳-美化发现工具)
    * [使用效果](#使用效果)
    * [使用教程](#使用教程)
    * [站点地址](#站点地址)
* [书源校验工具](#书源校验工具)

---

## 软件下载

#### 阅读(2.0)下载地址

| 序号 | 说明   | 地址                                                         |
| :--: | ------ | :----------------------------------------------------------- |
|  1   | Github | https://github.com/gedoor/MyBookshelf/releases/              |
|  2   | 90网盘 | https://www.90pan.com/wap.php?action=space&uid=0&folder_id=138703 |


#### 阅读(3.0)下载地址

| 序号 | 说明                    | 地址                                                         |
| :--: | ----------------------- | :------------------------------------------------------------ |
|  1   | 酷安                    | https://www.coolapk.com/apk/io.legado.app.release            |
|  2   | Github                  | https://github.com/gedoor/legado/releases                    |
|  3   | Google play（暂时下架） | https://play.google.com/store/apps/details?id=io.legado.play.release |
|  4   | 蓝奏云                  | https://kunfei.lanzoui.com/b0f7pt4ja                         |
|  5   | 90网盘                  | https://www.90pan.com/wap.php?action=space&uid=0&folder_id=138704 |
|  6   | R18版本                 | 软件官方TG通知群获取                                         |

---

## 软件的官方账号

软件作者开通了公众号，公众号有时会发布书源及各种订阅资源：

公众号名称：**`开源阅读`**，微信号：**`legado-top`**

公众号名称：**`开源阅读软件`**，微信号：**`MyBookRead`**

软件源码地址：https://github.com/gedoor/legado

官方TG通知群：https://t.me/legado_channels

官方TG聊天群：https://t.me/yueduguanfang

源仓库：http://yck.mumuceo.com/

对于软件各个版本（R18，Pro，普通版本）的说明和区别请看阅读官方TG通知群置顶 https://t.me/legado_channels/414

---


## 个人备份说明

阅读2.0版本的备份存在`Backup`文件夹中，阅读3.0版本的备份存在`legadoBackUp`文件夹中，其中的每个文件夹都是以“xxxx年-xx月xx日-xx时xx分”的规则命名。仅分享 **部分配置**。目前只更新3.0版本 。目前暂时只更新18Rss，各大佬的书源合集酷安评论区很多的哦！

## 备份文件说明


#### 2.0版本

>| 序号 | 文件名                   | 文件包含的内容（个人猜测）   | 在库中? |
>| :--: | :----------------------- | :--------------------------- | :------ |
>|  1   | config.xml               | 软件配置                     |         |
>|  2   | myBookReplaceRule.json   | 替换规则（替换净化）         | √       |
>|  3   | myBookSearchHistory.json | 搜索历史                     |         |
>|  4   | myBookShelf.json         | 个人的书架信息               |         |
>|  5   | myBookSource.json        | 图书来源（书源）             | √       |
>|  6   | myTxtChapterRule.json    | 小说章节显示规则（目录规则） | √       |

#### 3.0前期版本(2021年之前？)

>| 序号 | 文件名           | 文件包含的内容（个人猜测） | 在库中? |
>| :--: | :--------------- | :------------------------- | :------ |
>|  1   | bookSource.json  | 书源                       | √       |
>|  2   | bookshelf.json   | 书架信息                   |         |
>|  3   | config.xml       | 软件配置                   |         |
>|  4   | readConfig.json  | 阅读界面配置               | √       |
>|  5   | replaceRule.json | 替换净化规则               | √       |
>|  6   | rssSource.json   | 订阅(RSS)源                | √       |

#### 3.0后期版本(2021-至今)

>| 序号 | 文件名               | 文件包含的内容（个人猜测）                   | 在库中? |
>| :--: | :------------------- | :------------------------------------------- | :------ |
>|  1   | bookGroup.json       | 书源分组信息                                 |         |
>|  2   | bookSource.json      | 书源                                         | √       |
>|  3   | bookshelf.json       | 书架信息                                     |         |
>|  4   | config.xml           | 软件配置                                     |         |
>|  5   | httpTTS.json         | 在线朗读引擎（TTS）源                        | √       |
>|  6   | readConfig.json      | 阅读界面配置                                 | √       |
>|  7   | readRecord.json      | 记录每本书的阅读时长                         |         |
>|  8   | replaceRule.json     | 替换净化规则                                 | √       |
>|  9   | rssSources.json      | 订阅(RSS)源                                  | √       |
>|  10  | searchHistory.json   | 书籍搜索记录                                 |         |
>|  11  | shareReadConfig.json | 默认阅读界面配置（可能这个意思吧，不太确定） | √       |
>|  12  | sourceSub.json       | 规则订阅信息                                 | √       |
>|  13  | themeConfig.json     | 软件界面主题配置                             | √       |
>|  14  | txtTocRule.json      | 目录规则（对本地书籍有效）                   | √       |


---

## 阅读使用教程

教程页面较长，放到这里了：[![教程](https://img.shields.io/badge/教程-导入源-46954A)](https://ifwlzs.github.io/YueDuBackup/teach)

---

## 资源共享(各类源)

因为源太多了，放到这里了：[![源](https://img.shields.io/badge/资源-整理-46954A)](https://ifwlzs.github.io/YueDuBackup/source)

---

## 关耳-美化发现工具

#### 使用效果

![img](https://gitee.com/ifwlzs/img/raw/master/img/6831B49B91EA7B8D912FE2377BF8F3FC.jpg)

#### 使用教程

糖果写的教程：[![美化教程](https://img.shields.io/badge/教程-美化发现-46954A)](https://ifwlzs.github.io/YueDuBackup/teach.html#美化版关耳工具简单使用)

#### 站点地址

[![美化发现工具](https://img.shields.io/badge/工具-美化发现-015DA0)](https://ifwlzs.github.io/YueDuBackup/tool)

---

## 书源校验工具

自制校验辅助工具【仅根据自己电脑网络状态判断】**校验后，仅保留状态码为200的书源**。软件界面如图：

![运行界面](https://gitee.com/ifwlzs/img/raw/master/img/image-20210719202643842.png)

源码地址：[![源码](https://img.shields.io/badge/工具-书源校验-015DA0)](https://github.com/ifwlzs/YueDuBackup/tree/master/Tool/checkBookSource.py)

exe下载地址：[![exe](https://img.shields.io/badge/下载-书源校验-red)](https://github.com/ifwlzs/YueDuBackup/tree/master/Tool/checkBookSource.exe)

---
<p align="right">Update By ifwlzs</p>
<p align="right">2021.08.25</p>


# 批量美化发现，自动跳过发现中有js代码部分，可能会有部分空白占位符未被格式化
from jsonpath import jsonpath
import json
import re
import os


# 读取已排版的json 测试用（未用到）
def getTest1():
    with open('./test1.json', 'r', encoding='utf8')as fp:
        json_data = json.load(fp)
        print('这是文件中的json数据：', json_data)
        for i in json_data:
            # if i['exploreUrl'] != "":
            #     # print(i['exploreUrl'][0]) [
            #     formatJson=json.load(i['exploreUrl'])
            #     print(formatJson)
            # print(jsonpath(json_data,"$..exploreUrl")) # 获取exploreUrl
            print(checkFormat(i))


# 读取未排版的书源 测试用（未用到）
def getTest2():
    with open('./test2.json', 'r', encoding='utf8')as fp:
        json_data = json.load(fp)
        # print('这是文件中的json数据：', json_data)
        # 遍历 判断每个源
        for i in json_data:
            # print(cjson.isExtend(i, 'exploreUrl'))
            #
            # if i['exploreUrl'] !="":
            #     print(i['exploreUrl'][0])
            print(checkFormat(i))


# 判断 exploreUrl 是否为空（即该源中是否存在发现）
# 有就返回发现列表字段，无就返回Fasle。i为当前书源
def checkJsonIsNone(i):
    # 读取不到，返回false，读取到了 返回发现字段
    if jsonpath(i, "$..exploreUrl") != False:
        formatJosn = jsonpath(i, "$..exploreUrl")[0]
        # print("\n-------\n", formatJosn)
        # 跳过所有发现列表中出现js代码的
        if formatJosn != "" and formatJosn.find("<js>") < 0:
            return formatJosn
    return False

# 判断 是否已经美化，i为当前书源
# 如果已经美化了就返回True，否则返回False
# 这里我是根据发现字段中 第一个是不是[开头为判断标准。
def checkFormat(i):
    formatJosn = jsonpath(i, "$..exploreUrl")
    if formatJosn != False and len(formatJosn[0]) > 0:
        if formatJosn[0][0] == '[':
            return True
    return False


# 切割发现列表字段中的字符串，进行美化
def toFormat(str):
    # 根据回车进行切割
    str = re.sub("\n+", "\n", str).strip()
    # print("63 -->str", str)
    list1 = re.split("\n", str)
    # print("65 list-->", list1, len(list1))
    result = "["
    for i in range(0, len(list1)):
        # print("==68     ->", list1[i].find("\<js\>") < 0)
        # print(list1[i])
        # 根据::进行切割，此刻列表存的就是分类和地址
        list2 = list1[i].split("::")
        # 去除空行
        if list2 != "":
            # 设置无地址的分类，使得链接为空
            if len(list2) == 1:
                list2.append("")
            # string="{\\\"title\\\":\\\""+list[0]+"\\\",\\\"url\":\\\""+list[1]+"\\\",\"style\\\":{\\\"layout_flexGrow\\\":1}}"
            string = "{\"title\":\"" + list2[0] + "\",\"url\":\"" + list2[
                1] + "\",\"style\":{\"layout_flexGrow\":1}}"
            result += string + ","
    #美化发现列表的格式 {\"title\":\"+title+\",\"url\":\"+url+\","style":{\"layout_flexGrow\":1}}
    return result[:-1] + "]"

# 读取所有的书源
def getTestAll(filePath):
    # 打开json文件
    with open(filePath, 'r+', encoding='utf8')as fp:
        json_data = json.load(fp)
        # print('这是文件中的json数据：', json_data)
        # 遍历 判断每个书源
        # print("91 json长度-> ",len(json_data))
        # 遍历json，获取每个书源
        for i in range(len(json_data)):
            # if i['exploreUrl'] =="" :
            # 判断出所有未美化的：explorUrl为空和explorUrl第一个字符不是[
            if not checkFormat(json_data[i]) and checkJsonIsNone(json_data[i]):
                # print("97 json_data[i]['exploreUrl']->", json_data[i]['exploreUrl'])
                # print("98 exploreUrl-> ",json_data[i]['exploreUrl'])
                exploreUrl = checkJsonIsNone(json_data[i])
                # print("100 exploreUrl-->",exploreUrl)
                # 切割字符串，进行美化
                exploreUrl = toFormat(exploreUrl)
                # print("103 exploreUrl-->",exploreUrl)
                # 更改原发现为排版后的发现
                json_data[i]['exploreUrl'] = exploreUrl
                # print("==========")
                # print("107 json_data[i]—-> ", json_data[i])
            fp.seek(0)  # rewind
        json.dump(json_data, fp, ensure_ascii=False)
        fp.truncate()
        print("\n\n  ✔恭喜你！美化成功！！快导入阅读中查看效果吧！！\n\n")


if __name__ == '__main__':
    print("\n\t\t\t 批量美化阅读app发现列表")
    print("\n=====================================================================")
    print("  使用说明：")
    print("\t★本工具是直接修改输入的文件！！请自行备份原文件！！")
    print("\t★不保证完美美化，有些源作者写的发现可能不符合规范")
    print("\tps:  我手上的测试数据并不多，\n\t出现错误的自己看看书源里发现的格式是不是对的\n")
    print("  发现格式声明：")
    print("\t形如  分类名::分类url\n")
    print("  脚本源码地址：")
    print("\thttps://github.com/oli-fa/YueDuBackup/blob/master/Tool/toBeautify.py")
    print("  exe下载地址：")
    print("\thttps://github.com/oli-fa/YueDuBackup/blob/master/Tool/toBeautify.exe\n")
    print("  Bug反馈 & 建议：")
    print("\thttps://github.com/oli-fa/YueDuBackup/issues/new")
    print("=====================================================================\n")
    filePath=input("请输入将要批量美化的文件路径：")
    getTestAll(filePath)
    input("运行结束。输入任何键，退出本工具！")

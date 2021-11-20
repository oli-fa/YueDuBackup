# 批量美化发现，自动跳过发现中有js代码部分，可能会有部分空白占位符未被格式化
from jsonpath import jsonpath
import json
import re


# 读取已排版的json 测试用
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


# 读取未排版的书源 测试用
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


# 判断 是否已经美化
def checkFormat(i):
    formatJosn = jsonpath(i, "$..exploreUrl")
    if formatJosn != False and len(formatJosn[0]) > 0:
        if formatJosn[0][0] == '[':
            return True
    return False


# 判断 exploreUrl（发现字段）是否为空
def checkJsonIsNone(i):
    # 读取不到，返回false，读取到了 返回发现字段
    if jsonpath(i, "$..exploreUrl") != False:
        formatJosn = jsonpath(i, "$..exploreUrl")[0]
        # print("\n-------\n", formatJosn)
        if formatJosn != "" and formatJosn.find("<js>") < 0:
            return formatJosn
    return False


# 切割字符串，进行美化
def toFormat(str):
    # 根据回车和::进行切割

    str = re.sub("\n+", "\n", str).strip()
    # print("59 -->str", str)
    list1 = re.split("\n", str)
    # print("56 list-->", list1, len(list1))
    result = "["
    for i in range(0, len(list1)):
        # print("==64     ->", list1[i].find("\<js\>") < 0)
        # print(list1[i])
        list2 = list1[i].split("::")
        if list2 != "":
            if len(list2) == 1:
                list2.append("")
            # string="{\\\"title\\\":\\\""+list[0]+"\\\",\\\"url\":\\\""+list[1]+"\\\",\"style\\\":{\\\"layout_flexGrow\\\":1}}"
            string = "{\"title\":\"" + list2[0] + "\",\"url\":\"" + list2[
                1] + "\",\"style\":{\"layout_flexGrow\":1}}"
            result += string + ","
    # {\"title\":\"+title+\",\"url\":\"+url+\","style":{\"layout_flexGrow\":1}}
    return result[:-1] + "]"


# 读取混合的书源
def getTestAll():
    # 打开json文件
    with open('./show.json', 'r+', encoding='utf8')as fp:
        json_data = json.load(fp)
        # print('这是文件中的json数据：', json_data)
        # 遍历 判断每个源
        # print("71 json长度-> ",len(json_data))
        # 遍历json，获取每个书源
        for i in range(len(json_data)):
            # if i['exploreUrl'] =="" :
            # 判断出所有未美化的：explorUrl为空和explorUrl第一个字符不是[
            if not checkFormat(json_data[i]) and checkJsonIsNone(json_data[i]):
                # print("77 json_data[i]['exploreUrl']->", json_data[i]['exploreUrl'])
                # print("77 exploreUrl-> ",json_data[i]['exploreUrl'])
                exploreUrl = checkJsonIsNone(json_data[i])
                # print(exploreUrl)
                # 切割字符串，进行美化
                exploreUrl = toFormat(exploreUrl)
                # print(exploreUrl)
                # 更改原发现为排版后的发现
                json_data[i]['exploreUrl'] = exploreUrl
                # print("==========")
                # print("85 json_data[i]—-> ", json_data[i])

            fp.seek(0)  # rewind
        json.dump(json_data, fp, ensure_ascii=False)
        fp.truncate()


if __name__ == '__main__':
    getTestAll()

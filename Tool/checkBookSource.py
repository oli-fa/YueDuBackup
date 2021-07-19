"""
======================================
# 本脚本根据网页状态码来达到校验书源的目的  #
=====================================
"""
import json
import threading
import requests

# 请求超时时间默认为10秒
timeOut = 10
# 存储书源地址
sourceUrl = []
# 存储书源名称
sourceName = []
# 异常状态码的源
statusResult = []
# 无法获取站点状态码的源
exceptionResult = []


# 对书源json文件加工,返回json
def resolveJson(path):
    file = open(path, "rb")
    fileJson = json.load(file)
    for i in fileJson:
        # print(i)
        sourceUrl.append(i["bookSourceUrl"])
        sourceName.append(i["bookSourceName"])
    return fileJson


# 校验
def getHttpStatusCode(url):
    # 添加user-agent
    userAgent = {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.99 Safari/537.36"}
    t = {}
    try:
        request = requests.get(url, headers=userAgent, timeout=timeOut)
        httpStatusCode = request.status_code
        t["书源名称"] = sourceName[sourceUrl.index(url)]
        t["书源地址"] = url
        t["网站状态"] = httpStatusCode
        if httpStatusCode != 200:
            statusResult.append(t)
            # print(t)
    except Exception as e:
        t["书源名称"] = sourceName[sourceUrl.index(url)]
        t["书源地址"] = url
        t["异常信息"] = str(e)
        exceptionResult.append(t)
        # print(t)


# 开启多线程
def toStart():
    threads = []
    for url in sourceUrl:
        t1 = threading.Thread(target=getHttpStatusCode, args=[url])
        t1.setDaemon(True)
        threads.append(t1)

    for t in threads:
        t.start()
        t.join


# 存储校验后的书源
print("""============================================
# 本脚本根据网页状态码来达到校验书源的目的 #
# 项目源地址:                              #
# https://github.com/ifwlzs/YueDuBackup    #
#                                by ifwlzs #
============================================\n\n""")

# 设置文件目录
path = input("请输入书源的绝对地址（bookSource）：")
# path = r"D:\MyCode\Python\webState\bookSource.json"
# 设置站点超时时间
s = input("请设置超时时间（直接敲回车默认为10秒）")
print("校验中...请稍后...")
if s is None or s == "":
    timeOut = 10
else:
    timeOut = int(s)
# 处理json
oldSource = resolveJson(path)
# 获取长度
size = len(sourceUrl)
# 多线程进行校验
toStart()

file = open('result.txt', 'w', encoding="utf8")
file.write("网站状态码异常的源：\n")
file.flush()
# 用于存储状态码异常的书名
deleteName = []
# 用于存储状态码异常地址
deleteUrl = []

if len(statusResult) > 0:
    for i in statusResult:
        deleteName.append(i['书源名称'])
        deleteUrl.append(i['书源地址'])
        file.write(str(i) + '\n')
        file.flush()

file.write("\n无法获取站点状态码的源：\n")
file.flush()
if len(exceptionResult) > 0:
    for i in exceptionResult:
        file.write(str(i) + '\n')
        file.flush()
file.write("\n已删除的源：\n")
file.flush()

deleteSource = [x for x in oldSource if x["bookSourceName"] in deleteName and x["bookSourceUrl"] in deleteUrl]
if len(deleteSource) > 0:
    file.write("[\n")
    for i in deleteSource:
        file.write(str(i) + "\n")
        file.flush()
    file.write("]")
file.close()

# 写入校验后的书源
newSource = [x for x in oldSource if x["bookSourceName"] not in deleteName and x["bookSourceUrl"] not in deleteUrl]
file = open("newBookSource.txt", 'w', encoding="utf8")
file.write(str(newSource))
file.flush()
file.close()

print("网站状态码异常的源有" + str(len(statusResult)) + "个")
# print(statusResult)
print("无法获取站点状态码的源有" + str(len(exceptionResult)) + "个")
# print(exceptionResult)
print("结果仅供参考！！请用户自行判断，源是否真的失效。校验结果保存在当前目录下的【result.txt】文件中")
print("校验后的书源保存在当前目录下的【newBookSource.txt】文件中（仅去除状态码异常的源）")
input("\n\n\n请按任意键关闭本窗口 . .")

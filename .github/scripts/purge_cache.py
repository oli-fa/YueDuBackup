import os, requests


def get_file_list(folder_dir: str):
    dir_list = os.listdir(folder_dir)
    f_list = []
    for d in dir_list:
        sub_dir = os.path.join(folder_dir, d)
        if os.path.isfile(sub_dir):
            f_list.append(d)
    return f_list


if __name__ == '__main__':
    work_space = os.environ.get('GITHUB_WORKSPACE')
    file_list = get_file_list(work_space)
    for file in file_list:
        url = f'https://purge.jsdelivr.net/gh/oli-fa/YueDuBackup/{file}'
        print(url)
        print(requests.get(url).text)
        url = f'https://purge.jsdelivr.net/gh/oli-fa@master/YueDuBackup/R18/{file}'
        print(url)
        print(requests.get(url).text)
        url = f'https://purge.jsdelivr.net/gh/oli-fa@master/YueDuBackup/legadoBackUp/{file}'
        print(url)
        print(requests.get(url).text)
        

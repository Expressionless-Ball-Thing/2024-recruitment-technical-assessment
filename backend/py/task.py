from dataclasses import dataclass

@dataclass
class File:
    id: int
    name: str
    categories: list[str]
    parent: int
    size: int


"""
Task 1
"""
def leafFiles(files: list[File]) -> list[str]:
    
    parents = set([file.parent for file in files])
    return list(map(lambda x: x.name, filter(lambda x: x.id not in parents, files)))


"""
Task 2
"""
def kLargestCategories(files: list[File], k: int) -> list[str]:
    dictionary = dict()
    for file in files:
        for cat in file.categories:
            if cat not in dictionary.keys():
                dictionary[cat] = 1
            else:
                dictionary[cat] += 1
    
    return [cat for cat, _ in list(reversed(sorted(dictionary.items(), key=lambda item: item[1])))[:k]]

"""
Task 3
"""
def largestFileSize(files: list[File]) -> int:
    if len(files) == 0:
        return 0

    candidates = [file for file in files if file.parent == -1]

    dictionary = dict()
    dp = dict()

    for file in files:        
        if file.parent not in dictionary.keys():
            dictionary[file.parent] = [file]
            dp[file.parent] = [file.id]
        else:
            dictionary[file.parent].append(file)
            dp[file.parent].append(file.id)
        

    maxsize = 0
    for candidate in candidates:


        visited = set({candidate.id})
        queue = [candidate]
        size = 0
        while (len(queue) > 0):
            length = len(queue)
            for i in range(length):
                stuff = queue.pop(0)
                size += stuff.size
                if stuff.id in dictionary:
                    for thing in dictionary[stuff.id]:
                        if thing.id not in visited:
                            visited.add(thing.id)
                            queue.append(thing)
        maxsize = max(maxsize, size)



    return maxsize
    # retu rn max(list(dictionary.values()))


if __name__ == '__main__':
    testFiles = [
        File(1, "Document.txt", ["Documents"], 3, 1024),
        File(2, "Image.jpg", ["Media", "Photos"], 34, 2048),
        File(3, "Folder", ["Folder"], -1, 0),
        File(5, "Spreadsheet.xlsx", ["Documents", "Excel"], 3, 4096),
        File(8, "Backup.zip", ["Backup"], 233, 8192),
        File(13, "Presentation.pptx", ["Documents", "Presentation"], 3, 3072),
        File(21, "Video.mp4", ["Media", "Videos"], 34, 6144),
        File(34, "Folder2", ["Folder"], 3, 0),
        File(55, "Code.py", ["Programming"], -1, 1536),
        File(89, "Audio.mp3", ["Media", "Audio"], 34, 2560),
        File(144, "Spreadsheet2.xlsx", ["Documents", "Excel"], 3, 2048),
        File(233, "Folder3", ["Folder"], -1, 4096),
    ]

    assert sorted(leafFiles(testFiles)) == [
        "Audio.mp3",
        "Backup.zip",
        "Code.py",
        "Document.txt",
        "Image.jpg",
        "Presentation.pptx",
        "Spreadsheet.xlsx",
        "Spreadsheet2.xlsx",
        "Video.mp4"
    ]

    assert kLargestCategories(testFiles, 3) == [
        "Documents", "Folder", "Media"
    ]

    assert largestFileSize(testFiles) == 20992

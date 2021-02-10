import io
import os
import pypandoc
import sys

def convertBatchDocToText(path):
    for file in os.listdir(path):
        oftype = file.split(".")[-1]
        if oftype =="docx":
            convertDocxToText(file)

def convertDocxToText(docxFilename):
    output = pypandoc.convert_file(docxFilename, 'txt', outputfile="somefile.txt")
    assert output == ""

if __name__ == "__main__":
    # execute only if run as a script
    main()
    print("Path: "+sys.argv[0])
    path = sys.argv[0]
    convertBatchDocToText(path)

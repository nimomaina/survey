import json

with open ('static/data.json') as json_data:
    data = json.load(json_data)
    for k in data:
        for v, m in k.items():
            print (v)
            print (m)
    
            if v == "options" or v == "questions":
                for i in v[0]:
                    for a, b in i.items():
                        print(a)

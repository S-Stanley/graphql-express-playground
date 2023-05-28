import requests

print("GET QUERY HELLO")
req = requests.post(
    'http://localhost:4000/graphql',
    json={
        "query": "{ hello }"
    }
)
print(req.json())

print("GET QUERY TESTBOOL")
req2 = requests.post(
    'http://localhost:4000/graphql',
    json={
        "query": "{ testBool }"
    }
)
print(req2.json())

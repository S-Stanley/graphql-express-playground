import requests

req = requests.post(
    'http://localhost:4000/graphql',
    json={
        "query": "{ hello }"
    }
)
print(req.status_code)
print(req.json())

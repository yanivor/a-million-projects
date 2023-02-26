```
curl -X GET http://127.0.0.1:8000/api/post/63eaae170ebd495672805bae
```

```
curl -X GET http://127.0.0.1:8000/api/post
```

```
curl -X POST http://127.0.0.1:8000/api/post -H "Content-Type: application/json" -d '{"title": "title111", "content": "content111"}'
```

```
curl -X PUT http://127.0.0.1:8000/api/post/63eaae170ebd495672805bae -H "Content-Type: application/json" -d '{"title": "updated_title111", "content": "updated_content111"}'
```

```
curl -X DELETE http://127.0.0.1:8000/api/post/63eaae170ebd495672805bae
```
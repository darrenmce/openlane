## Lambda-Redis: a sample lambda function that utilizes redis

This sample is run via `docker-compose` (the host `redis` is hardcoded in the lambda function for simplicity)

To run:

```sh
docker-compose up

```

Note: there will be container volumes left over, to clean up run:

```sh
docker-compose down -v
```


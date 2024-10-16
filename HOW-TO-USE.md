# How to use

- All test should be inside the Scripts folder

# Run InfluxDb and Grafana

- Run the command

```shell
docker-compose up influxdb grafana -d
```

- After that you can access to the Grafana dashboard in localhost:3000
also you can change the port in the docker-compose file.

# Run test

## Windows

```shell
docker-compose run k6 run //scripts//load.js
```

## Linux / Mac

```shell
docker-compose run k6 run /scripts/load.js
```


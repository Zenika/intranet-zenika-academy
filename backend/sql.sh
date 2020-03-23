docker-compose exec mysql mysql \
  --host=$MYSQL_HOST \
  --port=$MYSQL_PORT \
  --user=$MYSQL_USER \
  --password=$MYSQL_PASSWORD \
  --database=$MYSQL_DATABASE

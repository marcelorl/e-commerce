#!/usr/bin/env bash

echo '########################################'
echo "#        Instalando Dependencias       #"
echo '########################################'
npm install -g yarn

declare -a apps=( \
  "client" \
  "server" \
)

## now loop through the above array
for app in "${apps[@]}"
do
  echo '########################################'
  echo "#        Empacotando ${app}           #"
  echo '########################################'
  cd $app
  npm install
  cd ..

  echo '#############################################'
  echo "#         Removendo imagens antigas         #"
  echo '#############################################'
  docker stop $(docker images marcelorl/e-commerce-${app} -q)
  docker rmi --force $(docker images marcelorl/e-commerce-${app} -q)

  docker container stop ${app}
  docker container rm --force ${app}

  echo '#######################################'
  echo "# Criando imagem docker ${app}   #"
  echo '#######################################'
  docker build --rm -t marcelorl/e-commerce-${app} -f ${app}/Dockerfile .
done

echo '#############################################'
echo "#         Removendo imagens DB              #"
echo '#############################################'
docker stop db
docker rm -f db

npm install

echo '#########################################'
echo "#        Iniciando imagem docker        #"
echo '#########################################'
docker-compose stop
docker-compose rm -v -f
docker-compose up -d

docker-compose ps

open http://localhost:3000

docker-compose logs -f

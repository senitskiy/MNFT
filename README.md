# M- NFT  Evolution of NFT
### Описание
«MNFT» это технология модифицированного смарт контракта (M-NFT) для NFT токенов. Созданные и перенесённые на M-NFT токены могут размещать дополнительный слой (маску) поверх оригинального изображения. Технология позволит модифицировать NFT под запросы рекламного бизнеса, а также может быть использована в крипто гейминге, коллективном творчестве и защите авторских прав.
NFT Токены можно как создавать, так и переносить на M-NFT с помощью одноимённого сервиса.

### Установка и запуск
```
git clone https://github.com/senitskiy/M-NFT.git
yarn install
yarn start
```

### Не забудьте в корне проекта создать файл 
.env
```
REACT_APP_WEB3_STORAGE_KEY = ...
```

### Run backend 

```
cd backend
pip install -r req.txt 
cd mnft
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```
URL for request: http://localhost:8000/graphql


### GraphQL 
#### Query:
- getAllNFT
- getNFT(address)
- getAllUser
- getUser(address)

#### Mutation
- createMNFT(input)
- updateMNFT(address, input)
- createUser(input)
- updateUser(address, input)
- createOrUpdate(address, input)


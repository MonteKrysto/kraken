all: init run composer-install npm-install migrate npm-run-watch

init:   ; bash vessel init

migrate:    ; ./vessel art migrate

run:    ; ./vessel start

composer-install:   ; ./vessel composer install

npm-install:    ; ./vessel npm install

npm-run-watch:  ; ./vessel npm run watch




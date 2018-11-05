# Mysql data container
DATA_DIR		?= vesselmysql


all: init run composer-install npm-install migrate npm-run-watch

init:   ; bash vessel init

migrate:    ; ./vessel art migrate

run:    ; ./vessel start

composer-install:   ; ./vessel composer install

npm-install:    ; ./vessel npm install

npm-run-watch:  ; ./vessel npm run watch

# Bring the container down, unmount the volume and remove the database directory
clean:
	docker-compose down -v
	rm -rf $(DATA_DIR)



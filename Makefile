all: build

build:
	@docker build -t mate/mysql .
	@docker run -d -p 3306:3306 --name mate_mysql mate/mysql
	sleep 5
	@mysql -h 0.0.0.0 -u sh_admin -padmin < mysql_backup/sh_dump.sql 

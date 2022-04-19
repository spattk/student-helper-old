# Dockerized SQL 

# Introduction

Dockerfile to build a MySQL container image.

# Pre-requisites:

Install docker, mysql

# Steps to run:

1. Run ```make```
2. Run ```mysql -h 0.0.0.0 -u sh_admin -p` (default pass: admin)

# Steps to update database to git (when container is running):
1. RUN ```mysqldump --column-statistics=0 -h 0.0.0.0 -u sh_admin -p -B student_helper> mysql_backup/sh_dump.sql```
2. ```git add mysql_backup/sh_dump.sql```
3. ```git commit -m "DB dump commit```
4. ```git push```


# Note: 

When container starts it loads schema,data from mysql_backup/sh_backup.sql

Please purge container or images after use to save space.

# Windows Bug:

Windows interprets "entrypoint.sh" with CRLF endings. Please convert CRLF to LF line endings for this file using VS Code and then proceed.
Since no support of makefile, please run commands as in makefile manually.

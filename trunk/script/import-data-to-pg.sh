#!/usr/bin/env bash
echo Execute import script at `date "+%Y-%m-%d %H:%M:%S"`
for z in `ls /home/gsm/indicator/*.zip`; do
    echo Processing $z ...
    rm -rf /tmp/gsm-data
    unzip $z -d /tmp/gsm-data
    psql -U postgres -d gsm -f /home/gsm/script/import-data-to-pg.sql
    mv $z /home/gsm/data-backup
    echo Processed $z
done
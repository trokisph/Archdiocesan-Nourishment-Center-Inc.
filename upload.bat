@echo off
gsutil -m rm -r gs://www.ancdavao.com/* | gsutil -m cp -r docs/* gs://www.ancdavao.com

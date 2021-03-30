#!/usr/bin/bash

apt-get update -y
apt-get upgrade -y
apt-get install nodejs -y
apt-get install libwebp -y
apt-get install mc -y
apt-get install ffmpeg -y
apt-get install wget -y
apt-get install tesseract -y
wget -O ~/../usr/share/tessdata/ind.traineddata "https://github.com/tesseract-ocr/tessdata/blob/master/ind.traineddata?raw=true"
npm install 
npm i -g cwebp
npm i -g ytdl
npm i node-tesseract-ocr
npm i imgbb-uploader
npm i
npm i got

echo "[❗] Group Bot: https://chat.whatsapp.com/Hs2scJJdGp80qRIG27lUCC"
echo "[❗] Copyright By TobatTeam"
echo "[❗] SILAKAN KETIK  [npm start] UNTUK MENJALANKAN SCRIPT"
#!/bin/bash
while true
do
    git pull origin main  # Uzak depo güncellemelerini al
    git add .
    git commit -m "Auto commit"
    git push origin main  # Değişiklikleri uzak depoya gönder
    sleep 60  # 60 saniye bekle, süreyi değiştirebilirsiniz
done

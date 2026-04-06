#!/bin/bash

i=1

for plik in *.png; do
    [ -e "$plik" ] || continue

    mv "$plik" "clothes$i.png"

    ((i++))
done

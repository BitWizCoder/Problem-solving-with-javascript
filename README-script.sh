#!/bin/bash

input_file="README-template.md"
output_file="README.md"
counter=1

awk -v counter=$counter '
{
    while (match($0, /xi\./)) {
        before = substr($0, 1, RSTART - 1)
        after = substr($0, RSTART + RLENGTH)
        $0 = before counter "." after
        counter++
    }
    print > "'"$output_file"'"
}
' "$input_file"

echo "Replacement complete. Result saved in $output_file."
#!/bin/bash

set -e

someFunction () {
   echo "param: $1"
}

someFunction "a param"

PS3='Select option: '
options=("1" "2")
select opt in "${options[@]}"
do
  case $opt in
    "1")
      OPTION="one"
      break
      ;;
    "2")
      OPTION="two"
      break
      ;;
    *) echo "invalid option $REPLY";;
  esac
done

while true; do
  read -p "Enter your name: " NAME

  if [[ -z "${NAME// }" ]]
  then
    echo "Error: please enter a non-empty name"
  elif [[ $NAME =~ ^[a-z] ]]
  then
    echo "Error: name should start with an uppercase letter"
  else
    break;
  fi
done

SOME_DIR=src/some_dir

mkdir -p "$SOME_DIR"

cat > "${SOME_DIR}/somefile.txt" << EOL
I am a file
EOL

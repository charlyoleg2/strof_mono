#!/usr/bin/env bash
# test_strof.sh

#pwd
cd $(dirname $0)/..
#pwd

echo "=========================="
echo "===== test-01"
echo "=========================="
node dist/strof.js -d test/data/rep_friends.txt coco boulo

echo "=========================="
echo "===== test-02"
echo "=========================="
node dist/strof.js -d test/data/rep_contacts.txt -d test/data/rep_friends.txt coco boulo

echo "=========================="
echo "End of test_strof.sh"
echo "=========================="

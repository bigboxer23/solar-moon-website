#!/usr/bin/env bash
host=blah.com
user=ec2-user
destination=blah.com

echo Deploying to $destination
rm -rf build
npm run build
scp -i "~/.ssh/Core.pem" -r ./build $user@$host:/var/www/$destination/html-new
ssh -i "~/.ssh/Core.pem" -t $user@$host -o StrictHostKeyChecking=no "rm -rf /var/www/$destination/html; mv /var/www/$destination/html-new /var/www/$destination/html"

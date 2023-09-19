#!/usr/bin/env bash
host=blah.com
user=ec2-user
destination=blah.com

echo Rolling back $destination
ssh -i "~/.ssh/Core.pem" -t $user@$host -o StrictHostKeyChecking=no "rm -rf /var/www/$destination/html; mv /var/www/$destination/html-prev /var/www/$destination/html"


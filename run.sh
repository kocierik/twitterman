#!/bin/sh
nohup sh -c mongod &
mongoimport --db twitterman --collection Tweets --file ./json/tweets-data.json --jsonArray
mongoimport --db twitterman --collection Users --file ./json/user-data.json --jsonArray
go run .
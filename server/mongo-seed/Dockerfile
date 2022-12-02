FROM mongo

COPY tweets-data.json /tweets-data.json
COPY user-data.json /user-data.json
CMD mongoimport --host mongodb --db reach-engine --collection Tweets --type json --file /tweets-data.json --jsonArray
CMD mongoimport --host mongodb --db reach-engine --collection Users --type json --file /user-data.json --jsonArray

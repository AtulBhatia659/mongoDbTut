
db.inventory.find().sort({ qty: 1 }) //ascending order of qty

db.inventory.find().sort({ qty: -1 }) //descending order of qty

db.inventory.find().skip(1) //skips first document

db.inventory.find().skip(2) //skips first 2 document

db.inventory.find().limit(1) //limits the number of documents in the output to 1

db.inventory.find().limit(2) //limits the number of documents in the output to 2
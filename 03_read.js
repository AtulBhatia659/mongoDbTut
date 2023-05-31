db.inventory.find()
db.inventory.find({ qty: 60 })
db.inventory.find({ status: { $in: ["A", "D"] } })

//AND
db.inventory.find({ status: "A", qty: { $lt: 30 } })

//OR
db.inventory.find({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })

db.inventory.findOne({ $or: [{ status: "A" }, { qty: { $lt: 30 } }] })

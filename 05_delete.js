db.inventory.deleteMany({})

db.inventory.deleteOne({ status: "D" })

db.inventory.deleteMany({ status: "A" })
/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0aesb5qgfw90s9p")

  collection.updateRule = ""
  collection.deleteRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0aesb5qgfw90s9p")

  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})

/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0aesb5qgfw90s9p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iyovwoj1",
    "name": "agent",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "27vv8b5an1g6ikh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0aesb5qgfw90s9p")

  // remove
  collection.schema.removeField("iyovwoj1")

  return dao.saveCollection(collection)
})

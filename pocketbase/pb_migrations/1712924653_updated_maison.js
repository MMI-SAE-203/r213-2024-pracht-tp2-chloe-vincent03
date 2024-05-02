/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0aesb5qgfw90s9p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ezaund9z",
    "name": "image",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "mimeTypes": [],
      "thumbs": [],
      "maxSelect": 1,
      "maxSize": 5242880,
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0aesb5qgfw90s9p")

  // remove
  collection.schema.removeField("ezaund9z")

  return dao.saveCollection(collection)
})

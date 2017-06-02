module.exports = class {
  constructor(mongo, model) {
    this.client = mongo
  }

  get(collection, id) {
    return this.client.collection(collection).findOne({ _id: id })
  }

  async create(collection, attrs) {
    await this.client.collection(collection).insertOne(attrs)
    return { id: attrs._id }
  }

  update(collection, id, attrs) {
    return this.client.collection(collection).updateOne({ _id: id }, {
      $set: attrs
    })
  }

  find(collection, query) {
    return this.client.collection(collection).find(query).toArray()
  }

  delete(collection, id) {
    return this.client.collection(collection).deleteOne({ _id: id })
  }

  deleteAll(collection) {
    return this.client.collection(collection).deleteMany()
  }
}
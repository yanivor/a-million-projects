class crudAuthor {
  model: any;

  constructor(model: any) {
    this.model = model;
  }

  async findOne(params: any) {
    try {
      return await this.model.findOne(params).lean();
    } catch (error) {
      console.log(error);
    }
  }

  async findMany(params: any, limit?: number) {
    try {
      return await this.model.find(params).limit(limit);
    } catch (error) {
      console.log(error);
    }
  }

  async create(params: any) {
    try {
      return await this.model.create(params);
    } catch (error) {
      console.log(error);
    }
  }

  async update(id: string, data: any) {
    try {
      return await this.model.update(id, data).lean();
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string) {
    try {
      return await this.model.deleteOne(id).lean();
    } catch (error) {
      console.log(error);
    }
  }
}

export default crudAuthor;

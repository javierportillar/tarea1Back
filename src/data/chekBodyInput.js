class ChekBodyJson {
  static errors = [];

  static isNameString(nameSting) {
    if (typeof nameSting !== "string") {
      this.errors.push("name must be string");
    }
    return this.errors;
  }

  static isAgeNumber(ageNumber) {
    if (typeof ageNumber !== "number" || !Number.isInteger(ageNumber)) {
      this.errors.push("age must be number");
    }
    return this.errors;
  }

  static isIdString(idString) {
    if (typeof idString !== "string") {
      console.log(typeof idString);
      this.errors.push("id must be string");
    }
  }

  static validateCreateUser(data) {
    this.errors = []
    const validateInputs = ['name', 'age'];
    const dataKeys = Object.keys(data);
    dataKeys.forEach((key) => {
      if (!validateInputs.includes(key)) {
        this.errors.push(`Propiedad inválida: ${key}`);
      }
      this.isNameString(data.name);
      this.isAgeNumber(data.age);
    });
    return this.errors;
  }

  static validateUser(dataId,dataBody) {
    this.errors = []
    //Validate that req.Body Only have name and age as keys
    const validInputs = ["name", "age"];
    const dataKeys = Object.keys(dataBody)
    dataKeys.forEach((key) => {
      if (!validInputs.includes(key)) {
        this.errors.push(`Propiedad inválida: ${key}`);
      }
    });
    this.isNameString(dataBody.name);
    this.isAgeNumber(dataBody.age);
    this.isIdString(dataId.id);
    return this.errors;
  }
}

module.exports = ChekBodyJson;

// const axios = require("axios");
const Clinic = require("../models/Clinic");
const parseStringAsArray = require("../utils/parseStringAsArray");

// index, show, store, update, destroy

module.exports = {
  async index(request, response) {
    const clinics = await Clinic.find();
    return response.json(clinics);
  },

  async store(request, response) {
    const { name, type, plans, address, latitude, longitude } = request.body;

    let clinic = await Clinic.findOne({ name });

    if (!clinic) {
      // const github_username = "diego3g";
      // const apiResponse = await axios.get(
      //   `https://api.github.com/users/${github_username}`
      // );
      // const { name = login, avatar_url, bio } = apiResponse.data;

      const plansArray = parseStringAsArray(plans);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      clinic = await Clinic.create({
        name,
        type,
        plans: plansArray,
        address,
        location
      });
    }

    return response.json(clinic);
  },

  // TO DO:

  async update() {},

  async delete() {}
};

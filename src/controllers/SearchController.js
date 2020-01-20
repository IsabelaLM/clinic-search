const Clinic = require("../models/Clinic");
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
  async index(request, response) {
    // Buscar todas as clinicas em um raio de 10km
    // Filtrar por planos

    const { latitude, longitude, plans } = request.query;

    const plansArray = parseStringAsArray(plans);

    const clinics = await Clinic.find({
      plans: {
        $in: plansArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000
        }
      }
    });

    return response.json({ clinics });
  }
};

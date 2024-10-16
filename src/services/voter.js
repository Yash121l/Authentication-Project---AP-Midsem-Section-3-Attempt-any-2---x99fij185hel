const bcrypt = require("bcrypt");
const prisma = require("../config/database");

class VoterService {
  constructor(details) {
    this.details = details;
  }
  static async getVoterByEmail(email) {
    return await prisma.voter.findUnique({ where: { email } });
  }
  async createVoter(voterDetails = this.details) {
    voterDetails.password = bcrypt.hashSync(voterDetails.password, 4)
    const voter = await prisma.voter.create({
      data: voterDetails,
    });
    return { voter, message: "Account created Successfully!" };
  }
}
module.exports = VoterService;

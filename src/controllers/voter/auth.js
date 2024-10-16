const VoterService = require("../../services/voter");
const Validator = require("../../utils/validators");
const { SIGNUP, SERVER_ERROR } = require("../../utils/constants");

const signup = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const { isInputValid, msg: inputValidationError } =
      Validator.inputValidation({
        email,
        password,
        name,
      });
    if (!isInputValid) {
      return res.status(400).json({ message: inputValidationError });
    }
    const voter = await VoterService.getVoterByEmail(email);
    const { isNewUserEntry, msg: authAttemptError } =
      Validator.assessAuthAttempt(voter, {
        attempt: SIGNUP,
      });
    if (!isNewUserEntry) {
      return res.status(400).json({ message: authAttemptError });
    }
    const voterService = new VoterService({
      email,
      password,
      name,
    });
    const { voter: newVoter, message } = await voterService.createVoter();
    return res.status(200).json({ message, newVoter });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: SERVER_ERROR });
  }
};

module.exports = { signup };
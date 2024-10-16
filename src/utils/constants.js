//access
const VOTER = "VOTER";
const PARTY = "PARTY";
const ACCESSES = [VOTER, PARTY];

//response message
const SERVER_ERROR = "Internal server error";
const HEADER_ERROR = {
  AUTHORIZATION: "Authorization header not found",
};

//auth
const SIGNUP = "signup";
const SECRET_KEY = "SLMASLVWATHM";

module.exports = {
  VOTER,
  PARTY,
  ACCESSES,
  SERVER_ERROR,
  HEADER_ERROR,
  SIGNUP,
  SECRET_KEY
};

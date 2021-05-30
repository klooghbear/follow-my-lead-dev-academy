const jwt = require("jsonwebtoken")

module.exports = {
  issue,
}

const issue = (req, res) => {
  res.json({
    ok: true,
    message: "Authentication succesful",
    token: createToken(res.locals.userId),
  })
}

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" })
}

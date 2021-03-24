const login = (req, res) => {
  res.send(`
   <form method="post" action="/login">
    <input type="text" name="user" />
    <input type="text" name="pass" />
    <input type="submit" name="sbm" value="Login" />
   </form>
  `);
};

const submitLogin = (req, res) => {
  const user = req.body.user;
  const pass = req.body.pass;

  res.send(`
    User: ${user} <br/>
    Pass: ${pass}
  `);
};

const logout = (req, res) => {
  res.send("Logout");
};

module.exports = {
  login: login,
  logout: logout,
  submitLogin: submitLogin,
};

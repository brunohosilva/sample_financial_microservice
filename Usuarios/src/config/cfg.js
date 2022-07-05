const cfg = () => {
  return {
    jwt_secret: "#V$Code%",
    jwt_expires: "2d",
    salt: 10,
    db_path:
      "mongodb+srv://BrunoSilva:bruno123@cluster0.1pnt4.mongodb.net/database?retryWrites=true&w=majority",
  };
};
module.exports = cfg();

module.exports.signUpErrors = (err) => {
  let errors = { pseudo: "", email: "", password: "" };

  if (err.message.includes("pseudo"))
    errors.pseudo = "Pseudo incorrect ou déja pris";

  if (err.message.includes("email")) errors.email = "Email incorrect";

  if (err.message.includes("password"))
    errors.password = "Le mot de passe doit faire 6 caracterères minimum";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("email"))
    errors.email = "Cet email est dejà enregistré";

  if (err.code === 11000 && Object.keys(err.keyValue)[0].includes("pseudo"))
    errors.pseudo = "Ce pseudo est dejà pris";

  return errors;
};

module.exports.signInErrors = (err) => {
  let errors = { email: "", password: "" };

  if (err.message.includes("email")) errors.email = "Email inconnu";

  if (err.message.includes("password"))
    errors.password = "Mot de passe incorrect";

  return errors;
};

//Erreurs fichiers

module.exports.uploadErrors = (err) => {
  let errors = { format: "", maxSize: "" };
  if (err.message.includes("Invalid file")) errors.format = "Format non valide";

  if (err.message.includes("Max size")) errors.maxSize = "Fichier volumineux";

  return errors;
};

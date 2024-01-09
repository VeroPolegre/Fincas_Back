const handleValidationErrors = (error, res) => {
  const errors = Object.values(error.errors).map((element) => element.message);

  if (errors.length > 1) {
    const errorMessages = errors.join(" && ");

    res.status(400).send({ messages: errorMessages });
  } else {
    res.status(400).send({ message: errors });
  }
  console.error("Validation Error:", error);
};

const handleTypeError = (error, req, res, next) => {
  if (error.name === "ValidationError") {
    handleValidationErrors(error, res);
  } else if (error.code === 11000 && error.keyValue && error.keyValue.email) {
    res
      .status(400)
      .send({ message: "Este correo ya está en uso", error: error.message });
  } else {
    res.status(500).send({ message: "Hubo un error", error: error.message });
  }
  console.error("Unhandled Error:", error);
};

module.exports = { handleTypeError };

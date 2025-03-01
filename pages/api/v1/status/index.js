function status(request, response) {
  response.status(200).json({ nome: "Christiane", sobrenome: "Pinheiro" });
}

export default status;

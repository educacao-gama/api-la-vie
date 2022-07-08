CREATE TABLE `pacientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `idade` date NOT NULL,
   `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

CREATE TABLE `psicologos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `senha` varchar(300) NOT NULL,
  `apresentacao` varchar(1000) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,

  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
);

CREATE TABLE `atendimentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `data_atendimento` date NOT NULL,
  `paciente_id` int NOT NULL,
  `psicologo_id` int NOT NULL,
  `observacao` varchar(1000) NOT NULL,
    `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `paciente_id` (`paciente_id`),
  KEY `psicologo_id` (`psicologo_id`),
  CONSTRAINT `atendimentos_ibfk_1` FOREIGN KEY (`paciente_id`) REFERENCES `pacientes` (`id`),
  CONSTRAINT `atendimentos_ibfk_2` FOREIGN KEY (`psicologo_id`) REFERENCES `psicologos` (`id`)
);
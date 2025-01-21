
CREATE DATABASE IF NOT EXISTS `db_mecanico` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `db_mecanico`;

CREATE TABLE IF NOT EXISTS `t_agendamento` (
  `codigo` int(11) NOT NULL AUTO_INCREMENT,
  `placa` varchar(7) NOT NULL,
  `servicos` varchar(255) NOT NULL,
  `mecanicos` varchar(255) NOT NULL,
  `datahora` datetime NOT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

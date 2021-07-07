-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-07-2021 a las 21:19:49
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `alumnos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alta_alumnos`
--

CREATE TABLE `alta_alumnos` (
  `id` int(11) NOT NULL,
  `programa` varchar(50) NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `apellidoP` varchar(20) NOT NULL,
  `apellidoM` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `alta_alumnos`
--

INSERT INTO `alta_alumnos` (`id`, `programa`, `nombre`, `apellidoP`, `apellidoM`) VALUES
(39, 'Ingeniería en Sistemas Computacionales', 'kkkkkkkkk', 'Kasandra', 'Kasandra'),
(40, 'Ingeniería en Sistemas Computacionales', 'Kasandra', 'Kasandra', 'Kasandra'),
(41, 'Ingeniería en Sistemas Computacionales', 'Kasandra', 'Kasandra', 'Kasandra'),
(42, 'Ingeniería en Sistemas Computacionales', 'kkkkk', 'Curso de Android', 'Curso de Android'),
(44, 'Ingeniería en Sistemas Computacionales', 'K', '<button type=\"button', '');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alta_alumnos`
--
ALTER TABLE `alta_alumnos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alta_alumnos`
--
ALTER TABLE `alta_alumnos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

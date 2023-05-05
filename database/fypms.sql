-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 07, 2023 at 07:26 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fypms`
--

-- --------------------------------------------------------

--
-- Table structure for table `project_manager`
--

CREATE TABLE `project_manager` (
  `id` text NOT NULL COMMENT 'This "id" refers to the project manager''s staff id in Asia Pacific University (APU).',
  `name` text NOT NULL,
  `field_of_study` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `results`
--

CREATE TABLE `results` (
  `tp_number` varchar(8) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL,
  `first_mark` int(3) DEFAULT NULL,
  `second_mark` int(3) DEFAULT NULL,
  `final_mark` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `schedule`
--

CREATE TABLE `schedule` (
  `meetingid` int(11) NOT NULL COMMENT 'The column "id" is used to refer back to the record of meeting conducted among students and their supervisors.',
  `date` date NOT NULL,
  `time` time(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `second_marker`
--

CREATE TABLE `second_marker` (
  `id` text NOT NULL COMMENT 'This "id" refers to the lecturer''s staff id in Asia Pacific University (APU).',
  `name` text NOT NULL,
  `field_of_study` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `tp_number` varchar(8) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `field_of_study` varchar(20) DEFAULT NULL,
  `specialism` varchar(20) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `title` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student_progression`
--

CREATE TABLE `student_progression` (
  `tp_number` varchar(8) DEFAULT NULL,
  `proposal` int(1) DEFAULT NULL,
  `ir` int(1) DEFAULT NULL,
  `fyp` int(1) DEFAULT NULL,
  `presentation` int(1) DEFAULT NULL,
  `notes` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `supervisor`
--

CREATE TABLE `supervisor` (
  `id` text NOT NULL COMMENT 'This "id" refers to the lecturer''s staff id in Asia Pacific University (APU).',
  `name` text NOT NULL,
  `field_of_study` text NOT NULL,
  `email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `email` text NOT NULL COMMENT 'This column is the email that the users use to login into the FYP management system.',
  `password` text NOT NULL,
  `user_type` int(1) NOT NULL COMMENT 'This column is used to identify the user type associated to the email and password.'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `project_manager`
--
ALTER TABLE `project_manager`
  ADD PRIMARY KEY (`id`(12));

--
-- Indexes for table `results`
--
ALTER TABLE `results`
  ADD KEY `tp_number` (`tp_number`);

--
-- Indexes for table `schedule`
--
ALTER TABLE `schedule`
  ADD PRIMARY KEY (`meetingid`);

--
-- Indexes for table `second_marker`
--
ALTER TABLE `second_marker`
  ADD PRIMARY KEY (`id`(12));

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`tp_number`);

--
-- Indexes for table `student_progression`
--
ALTER TABLE `student_progression`
  ADD KEY `tp_number` (`tp_number`);

--
-- Indexes for table `supervisor`
--
ALTER TABLE `supervisor`
  ADD PRIMARY KEY (`id`(12));

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`email`(256));

--
-- Constraints for dumped tables
--

--
-- Constraints for table `results`
--
ALTER TABLE `results`
  ADD CONSTRAINT `results_ibfk_1` FOREIGN KEY (`tp_number`) REFERENCES `students` (`tp_number`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `student_progression`
--
ALTER TABLE `student_progression`
  ADD CONSTRAINT `student_progression_ibfk_1` FOREIGN KEY (`tp_number`) REFERENCES `students` (`tp_number`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

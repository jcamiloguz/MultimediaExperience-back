CREATE TABLE `schools` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `school_name` varchar(255) NOT NULL 
);

CREATE TABLE `users` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL ,
  `user_last_name` varchar(255) NOT NULL ,
  `email` varchar(255) NOT NULL ,
  `created_at` date NOT NULL ,
  `born_date` date NOT NULL , 
  `id_school` int NOT NULL 
);

CREATE TABLE `questions` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `content_question` varchar(255) NOT NULL 
);

CREATE TABLE `options` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `id_question` int NOT NULL ,
  `content_option` varchar(255) NOT NULL 
);

CREATE TABLE `answers` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT ,
  `id_user` int NOT NULL ,
  `id_question` int NOT NULL ,
  `id_option` int NOT NULL 
);

CREATE TABLE `opinions` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT ,
  `id_user` int NOT NULL ,
  `content_opinion` varchar(255) NOT NULL 
);

CREATE TABLE `admins` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `admin_name` varchar(255) NOT NULL ,
  `admin_last_name` varchar(255) NOT NULL ,
  `email` varchar(255) NOT NULL ,
  `password` varchar(255) NOT NULL 
);

ALTER TABLE `users` ADD FOREIGN KEY (`id_school`) REFERENCES `schools` (`id`);

ALTER TABLE `options` ADD FOREIGN KEY (`id_question`) REFERENCES `questions` (`id`);

ALTER TABLE `answers` ADD FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

ALTER TABLE `answers` ADD FOREIGN KEY (`id_question`) REFERENCES `questions` (`id`);

ALTER TABLE `answers` ADD FOREIGN KEY (`id_option`) REFERENCES `options` (`id`);

ALTER TABLE `opinions` ADD FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

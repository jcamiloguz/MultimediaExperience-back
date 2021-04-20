CREATE TABLE `school` (
  `id` int PRIMARY KEY,
  `school_name` varchar(255)
);

CREATE TABLE `user` (
  `id` int PRIMARY KEY,
  `user_name` varchar(255),
  `user_last_name` varchar(255),
  `email` varchar(255),
  `created_at` date,
  `born_date` date,
  `id_school` int
);

CREATE TABLE `question` (
  `id` int PRIMARY KEY,
  `content_question` varchar(255)
);

CREATE TABLE `option` (
  `id` int PRIMARY KEY,
  `id_question` int,
  `content_option` varchar(255)
);

CREATE TABLE `answer` (
  `id` int PRIMARY KEY,
  `id_user` int,
  `id_question` int,
  `id_option` int
);

CREATE TABLE `opinion` (
  `id` int PRIMARY KEY,
  `id_user` int,
  `content_opinion` varchar(255)
);

CREATE TABLE `admin` (
  `id` int PRIMARY KEY,
  `admin_name` varchar(255),
  `admin_last_name` varchar(255),
  `email` varchar(255),
  `password` varchar(255)
);

ALTER TABLE `user` ADD FOREIGN KEY (`id_school`) REFERENCES `school` (`id`);

ALTER TABLE `option` ADD FOREIGN KEY (`id_question`) REFERENCES `question` (`id`);

ALTER TABLE `answer` ADD FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

ALTER TABLE `answer` ADD FOREIGN KEY (`id_question`) REFERENCES `question` (`id`);

ALTER TABLE `answer` ADD FOREIGN KEY (`id_option`) REFERENCES `option` (`id`);

ALTER TABLE `opinion` ADD FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

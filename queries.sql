-- Crear usuario
 

SELECT user_name, user_last_name, email, content_opinion, score   FROM multimedia_experience.users u, multimedia_experience.opinions o where o.id_user=u.id;
SELECT  id_user, id_question, COUNT(case id_option when 1 then 1 else null end) as option1,  COUNT(case id_option when 2 then 1 else null end) as option2 from multimedia_experience.answers WHERE id_question=1;
SELECT DATEDIFF(CUrDate(),born_date )/365.25 from multimedia_experience.users;
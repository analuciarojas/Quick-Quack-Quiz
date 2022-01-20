CREATE TABLE IF NOT EXISTS User
INSERT INTO User (first_name, last_name)
VALUES
  ('Lauren', 'de Guzman'),
  ('Ryan', 'Lopez'),
  ('Ana', 'Rojas'),
  ('Demetre', 'Growette');
CREATE TABLE IF NOT EXISTS Category
INSERT INTO Category (category_name)
VALUES
  ('Frontend'),
  ('Backend');
CREATE TABLE IF NOT EXISTS Frontend
INSERT INTO Frontend (quiz_name, category_id)
VALUES
  ('HTML', 1),
  ('CSS', 1),
  ('Javascript', 1);
CREATE TABLE IF NOT EXISTS Backend
INSERT INTO Backend (quiz_name, category_id)
VALUES
  ('Sql', 2),
  ('Express', 2),
  ('Databases', 2);
CREATE TABLE IF NOT EXISTS Html
INSERT INTO HTML (question, answer)
VALUES
  ('What does HTML stand for?', 'HyperText Markup Language');
  
DROP TABLE IF EXISTS favourites_goals CASCADE;

CREATE TABLE favourites_goals (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE
);

DROP TABLE IF EXISTS goals_locations CASCADE;

CREATE TABLE goals_locations (
  id SERIAL PRIMARY KEY NOT NULL,
  goal_id INTEGER REFERENCES goals(id) ON DELETE CASCADE,
  street VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  province VARCHAR(255) NOT NULL
);
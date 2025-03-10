-- Create database
CREATE DATABASE IF NOT EXISTS movie_db;
USE movie_db;

-- Create Movies Table
CREATE TABLE IF NOT EXISTS Movies (
    movie_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    release_date DATE NOT NULL,
    genre VARCHAR(100) NOT NULL,
    budget DECIMAL(15,2) CHECK (budget >= 0),
    runtime INT CHECK (runtime > 0)
);

-- Create Cast_Crew Table
CREATE TABLE IF NOT EXISTS Cast_Crew (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    actor VARCHAR(255),
    director VARCHAR(255),
    producer VARCHAR(255),
    writer VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id) ON DELETE CASCADE
);

-- Create Marketing Table
CREATE TABLE IF NOT EXISTS Marketing (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    promotion_budget DECIMAL(15,2) CHECK (promotion_budget >= 0),
    trailer_views INT CHECK (trailer_views >= 0),
    social_media_mentions INT CHECK (social_media_mentions >= 0),
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id) ON DELETE CASCADE
);

-- Create BoxOffice Table
CREATE TABLE IF NOT EXISTS BoxOffice (
    id INT AUTO_INCREMENT PRIMARY KEY,
    movie_id INT NOT NULL,
    opening_weekend DECIMAL(15,2) CHECK (opening_weekend >= 0),
    total_revenue DECIMAL(15,2) CHECK (total_revenue >= 0),
    region VARCHAR(100) NOT NULL,
    FOREIGN KEY (movie_id) REFERENCES Movies(movie_id) ON DELETE CASCADE
);

-- Insert Sample Data
INSERT INTO Movies (title, release_date, genre, budget, runtime) VALUES
('Movie A', '2024-05-15', 'Action', 100000000, 120),
('Movie B', '2024-06-20', 'Comedy', 50000000, 95);

INSERT INTO Cast_Crew (movie_id, actor, director, producer, writer) VALUES
(1, 'Actor A', 'Director A', 'Producer A', 'Writer A'),
(2, 'Actor B', 'Director B', 'Producer B', 'Writer B');

INSERT INTO Marketing (movie_id, promotion_budget, trailer_views, social_media_mentions) VALUES
(1, 20000000, 5000000, 1000000),
(2, 10000000, 3000000, 700000);

INSERT INTO BoxOffice (movie_id, opening_weekend, total_revenue, region) VALUES
(1, 50000000, 300000000, 'USA'),
(2, 20000000, 100000000, 'USA');

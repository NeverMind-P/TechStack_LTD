CREATE DATABASE apartmentmarketplace;

CREATE TABLE IF NOT EXISTS apartments(
    id SERIAL,
    room DECIMAL NOT NULL,
    name VARCHAR(255) NOT NULL,
    price DECIMAL NOT NULL,
    description VARCHAR(255)
);

INSERT INTO apartments(room, name, price, description) VALUES(1, 'Sun hotel', 80, 'Great apartments');
INSERT INTO apartments(room, name, price, description) VALUES(2, 'Sun hotel', 120, 'Amazing apartments');
INSERT INTO apartments(room, name, price, description) VALUES(2, 'Cozy Room', 150, 'This Room is located opposite Shadwell DLR station.');
INSERT INTO apartments(room, name, price, description) VALUES(1, 'Danylo Inn', 50, 'One of the best apartments, I ever had');


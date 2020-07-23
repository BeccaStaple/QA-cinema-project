drop database if exists cinemaDB;
create database cinemaDB; 
use cinemaDB;

CREATE TABLE movie(
movie_id int NOT NULL auto_increment,
title varchar (256) NOT NULL,
Director varchar (256),
cast varchar (1024),
year_released int,
description text,
duration_min int,
PRIMARY KEY(movie_id)
);

INSERT INTO movie VALUES (1, 'The Expendables 2', 'Simon West', 'Van Damme, Arnold Schwarzenegger, Bruce Willis', 2012, 'Mr. Church reunites the Expendables for what should be an easy paycheck, but when one of their men is murdered on the job, their quest for revenge puts them deep in enemy territory and up against an unexpected threat.', 96);
INSERT INTO movie VALUES (2, 'Inception', 'Christopher Nolan', 'Leonardo Dicaprio ,Tom Hardy, Michael Cane', 2010, 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.', 148);
INSERT INTO movie VALUES (3, 'Doctor Sleep', 'Mike Flanagan', 'Ewan McGregor, Rebecca Ferguson, Kyliegh Curran', 2019, 'Years following the events of The Shining (1980), a now-adult Dan Torrance must protect a young girl with similar powers from a cult known as The True Knot, who prey on children with powers to remain immortal.', 152);
INSERT INTO movie VALUES (4, 'Trolls World Tour 2020', 'Walt Dohrn, David P. Smith', 'Anna Kendrick, Justin Timberlake, Rachel Bloom', 2020, 'When the Queen of the Hard Rock Trolls tries to take over all the Troll kingdoms, Queen Poppy and her friends try different ways to save all the Trolls.', 90);
SELECT * FROM movie; 

CREATE TABLE theatre_Screen(
theatre_Screen_id int NOT NULL auto_increment,
screen_name varchar(100),
seat_no int,
PRIMARY KEY(theatre_Screen_id)
);

INSERT INTO theatre_Screen (screen_name, seat_no) VALUES ("Director's Box", 10);
INSERT INTO theatre_Screen (screen_name, seat_no) VALUES ("Standard Screen", 40);
SELECT * FROM theatre_Screen;

CREATE TABLE MovieTime(
movieTime_id int NOT NULL auto_increment,
fk_movie_id int NOT NULL,
fk_theatre_Screen_id int NOT NULL,
start_time int,
start_date date,
end_date date,
PRIMARY KEY(movieTime_id),
FOREIGN KEY(fk_movie_id) REFERENCES movie(movie_id),
FOREIGN KEY(fk_theatre_Screen_id) REFERENCES theatre_Screen(theatre_Screen_id)
);

INSERT INTO MovieTime (fk_movie_id, fk_theatre_Screen_id, start_time, start_date, end_date) VALUES (1, 1, 1200, '2020-8-01', '2020-8-01');
INSERT INTO MovieTime (fk_movie_id, fk_theatre_Screen_id, start_time, start_date, end_date) VALUES (1, 1, 1600, '2020-8-01', '2020-8-01');
INSERT INTO MovieTime (fk_movie_id, fk_theatre_Screen_id, start_time, start_date, end_date) VALUES (2, 2, 1200, '2020-8-02', '2020-8-02');
INSERT INTO MovieTime (fk_movie_id, fk_theatre_Screen_id, start_time, start_date, end_date) VALUES (2, 2, 1600, '2020-8-03', '2020-8-03');
INSERT INTO MovieTime (fk_movie_id, fk_theatre_Screen_id, start_time, start_date, end_date) VALUES (3, 1, 1500, '2020-8-02', '2020-8-02');
INSERT INTO MovieTime (fk_movie_id, fk_theatre_Screen_id, start_time, start_date, end_date) VALUES (3, 1, 2100, '2020-8-02', '2020-8-03');
INSERT INTO MovieTime (fk_movie_id, fk_theatre_Screen_id, start_time, start_date, end_date) VALUES (4, 2, 1500, '2020-8-02', '2020-8-02');
INSERT INTO MovieTime (fk_movie_id, fk_theatre_Screen_id, start_time, start_date, end_date) VALUES (4, 2, 2100, '2020-8-02', '2020-8-02');

SELECT * FROM MovieTime;


CREATE TABLE ticket_Type(
ticket_Type_id int NOT NULL auto_increment,
ticket_Type varchar (100),
price double,
PRIMARY KEY(ticket_Type_id)
);

INSERT INTO ticket_Type (ticket_Type, price) VALUES ("Adult", 12.55);
INSERT INTO ticket_Type (ticket_Type, price) VALUES ("Child", 7.75);
INSERT INTO ticket_Type (ticket_Type, price) VALUES ("Concession", 9.88);

SELECT * FROM ticket_Type;

CREATE TABLE payment(
payment_id int NOT NULL auto_increment,
card_name varchar (100),
card_number varchar (16),
expiry_date date,
cvc varchar(3),
PRIMARY KEY(payment_id)
);

CREATE TABLE booking(
booking_id int NOT NULL auto_increment,
customer_name varchar (256),
customer_email varchar (256),
ticket_qty int,
fk_movieTime_id int NOT NULL,
fk_ticket_Type_id int NOT NULL,
fk_payment_id int NOT NULL,
PRIMARY KEY(booking_id),
FOREIGN KEY(fk_movieTime_id) REFERENCES MovieTime(movieTime_id),
FOREIGN KEY(fk_ticket_Type_id) REFERENCES ticket_Type(ticket_Type_id),
FOREIGN KEY(fk_payment_id) REFERENCES payment(payment_id)
);



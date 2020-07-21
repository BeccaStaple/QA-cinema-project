create database if not exists cinemaDB;
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

CREATE TABLE MovieTime(
timeSlot_id int NOT NULL auto_increment,
fk_movie_id int NOT NULL,
start_time int,
start_date date,
end_date date,
PRIMARY KEY(timeSlot_id),
FOREIGN KEY(fk_movie_id) REFERENCES movie(movie_id)
);

CREATE TABLE theatre_Screen(
theatre_Screen_id int NOT NULL auto_increment,
screen_name varchar(100),
seat_no int,
PRIMARY KEY(theatre_Screen_id)
);

CREATE TABLE seat(
seat_id int NOT NULL auto_increment,
fk_theatre_Screen_id int NOT NULL,
seat_row int,
seat_number int,
PRIMARY KEY(seat_id),
FOREIGN KEY(fk_theatre_Screen_id) REFERENCES theatre_Screen(theatre_Screen_id)
);


CREATE TABLE screening(
screening_id int NOT NULL auto_increment,
fk_movie_id int NOT NULL,
fk_theatre_Screen_id int NOT NULL,
screening_start timestamp,
PRIMARY KEY(screening_id),
FOREIGN KEY(fk_movie_id) REFERENCES movie(movie_id),
FOREIGN KEY(fk_theatre_Screen_id) REFERENCES theatre_Screen(theatre_Screen_id)
);

CREATE TABLE ticket_Type(
ticket_Type_id int NOT NULL auto_increment,
ticket_Type varchar (100),
price double,
PRIMARY KEY(ticket_Type_id)
);

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
fk_screening_id int NOT NULL,
fk_ticket_Type_id int NOT NULL,
fk_payment_id int NOT NULL,
PRIMARY KEY(booking_id),
FOREIGN KEY(fk_screening_id) REFERENCES screening(screening_id),
FOREIGN KEY(fk_ticket_Type_id) REFERENCES ticket_Type(ticket_Type_id),
FOREIGN KEY(fk_payment_id) REFERENCES payment(payment_id)
);

CREATE TABLE seatReserved(
seatReserved_id int NOT NULL auto_increment,
fk_seat_id int NOT NULL,
fk_booking_id int NOT NULL,
fk_screening_id int NOT NULL,
PRIMARY KEY(seatReserved_id),
FOREIGN KEY(fk_seat_id) REFERENCES seat(seat_id),
FOREIGN KEY(fk_booking_id) REFERENCES booking(booking_id),
FOREIGN KEY(fk_screening_id) REFERENCES screening(screening_id)
);

drop schema cinemadb;

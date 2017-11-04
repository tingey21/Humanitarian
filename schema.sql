create table users(
    id serial primary key,
    user_name varchar(180),
    email varchar(180),
    img varchar(255),
    auth_id varchar(255)
)

create table blogposts(
    id serial primary key not null,
    title varchar(255) not null,
    blog text not null,
    author varchar(255) not null
)

create table voptions(
    id serial primary key not null,
    volunteername varchar(255) not null,
    volunteerdetails varchar(255) not null,
    link varchar(300),
    overseas boolean 
)

create table emails(
    id serial primary key not null,
    email varchar(255) not null,
    thankyou boolean default FALSE
)
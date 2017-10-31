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
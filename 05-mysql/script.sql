Create database nodemysql;

use nodemysql;

create table books (
	id int not null,
    title varchar (255) null,
    pageqty int null,
    primary key(id)
);

select * from books;
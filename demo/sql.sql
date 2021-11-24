-- SQL comment
/* Other SQL comment */

CREATE DATABASE db;

create table `table`(
  some_int int not null,
  some_bigint bigint default 0,
  some_string varchar(100),
  some_date date default getdate(),
  some_boolean boolean,
  constraint some_pk primary key (some_int)
);

select * from db.table_name as t where t.id = 1 or t.name = "name";

select a, b, c, d, e, f, g from table_name where (a + b - c) * d / e % f = g;

select table_name.some_name
from table_name
left join other_table on other_table.table_id = table_name.id
group by table_name.id;

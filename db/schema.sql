
use hm3sftlcpyb2o0ng;

drop table burgers;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name VARCHAR(255) NOT NULL,
	devoured BOOLEAN NOT NULL Default false,
    createdAt TIMESTAMP NOT NULL default current_timestamp,
	PRIMARY KEY (id)
);


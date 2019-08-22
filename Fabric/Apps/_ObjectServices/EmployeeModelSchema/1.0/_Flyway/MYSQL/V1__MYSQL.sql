CREATE TABLE `Department`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`Department_id` BIGINT NOT NULL AUTO_INCREMENT,
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Name` VARCHAR(50) NOT NULL,
	`SoftDeleteFlag` BOOLEAN,
	PRIMARY KEY(`Department_id`)
);
ALTER TABLE `Department`
	ADD CONSTRAINT `a525cd5e71da38afd80944eb89366b` UNIQUE KEY(`Department_id`),
	ADD CONSTRAINT `07cebf0577cb5c01eaf9729d1e60ad` UNIQUE KEY(`Name`);
CREATE TABLE `Status`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Name` VARCHAR(45) NOT NULL,
	`SoftDeleteFlag` BOOLEAN,
	`Status_id` VARCHAR(8) NOT NULL,
	PRIMARY KEY(`Status_id`)
);
ALTER TABLE `Status`
	ADD CONSTRAINT `b52a3448d10daf2e899e93861661ea` UNIQUE KEY(`Name`),
	ADD CONSTRAINT `fa0ed085691138b3d30e815899987e` UNIQUE KEY(`Status_id`);
CREATE TABLE `Media`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`employee_id` VARCHAR(32),
	`Extension` VARCHAR(32),
	`Image` LONGBLOB,
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Media_id` BIGINT NOT NULL AUTO_INCREMENT,
	`Media_name` VARCHAR(50),
	`Media_type_id` VARCHAR(32) NOT NULL,
	`SoftDeleteFlag` BOOLEAN,
	`Url` VARCHAR(200),
	PRIMARY KEY(`Media_id`)
);
ALTER TABLE `Media`
	ADD CONSTRAINT `e4e544d83034b16cbcb415c23678cd` UNIQUE KEY(`Media_id`);
CREATE TABLE `Employee`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`Department_id` BIGINT NOT NULL,
	`Designation_id` BIGINT NOT NULL,
	`Employee_id` VARCHAR(32) NOT NULL,
	`First_name` VARCHAR(32),
	`image` LONGBLOB,
	`Last_name` VARCHAR(32),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Location_id` BIGINT NOT NULL,
	`Manager_id` VARCHAR(10),
	`SoftDeleteFlag` BOOLEAN,
	`Status_id` VARCHAR(8),
	PRIMARY KEY(`Employee_id`)
);
ALTER TABLE `Employee`
	ADD CONSTRAINT `87f66f51343b4a25d1ce4f92917387` UNIQUE KEY(`Employee_id`);
CREATE TABLE `Location`(
	`Address1` VARCHAR(100) NOT NULL,
	`Address2` VARCHAR(100),
	`City` VARCHAR(45),
	`Country` VARCHAR(45),
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Location_id` BIGINT NOT NULL AUTO_INCREMENT,
	`SoftDeleteFlag` BOOLEAN,
	`State` VARCHAR(45),
	`Zipcode` VARCHAR(10),
	PRIMARY KEY(`Location_id`)
);
ALTER TABLE `Location`
	ADD CONSTRAINT `cd592371b2a97fb294e9290d1f6da6` UNIQUE KEY(`Location_id`);
CREATE TABLE `Designation`(
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`Designation_id` BIGINT NOT NULL AUTO_INCREMENT,
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`Name` VARCHAR(50) NOT NULL,
	`SoftDeleteFlag` BOOLEAN,
	PRIMARY KEY(`Designation_id`)
);
ALTER TABLE `Designation`
	ADD CONSTRAINT `72a9d9f1fefff4b3305589c1d937d4` UNIQUE KEY(`Designation_id`),
	ADD CONSTRAINT `9f71d3b6f41e73459de57d8c43f784` UNIQUE KEY(`Name`);
CREATE TABLE `Contact`(
	`Contact_id` BIGINT NOT NULL AUTO_INCREMENT,
	`Contact_type_id` VARCHAR(8) NOT NULL,
	`CreatedBy` VARCHAR(32),
	`CreatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
	`employee_id` VARCHAR(32),
	`Is_primary` BOOLEAN,
	`LastUpdatedBy` VARCHAR(32),
	`LastUpdatedDateTime` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3),
	`SoftDeleteFlag` BOOLEAN,
	`Value` VARCHAR(50) NOT NULL,
	PRIMARY KEY(`Contact_id`)
);
ALTER TABLE `Contact`
	ADD CONSTRAINT `d70ee969200638f3d90108752d8ebc` UNIQUE KEY(`Contact_id`);
ALTER TABLE `Employee`
	ADD CONSTRAINT `15ed1e92761a351ad61f3747c3654b` FOREIGN KEY(`Department_id`) REFERENCES `Department`(`Department_id`);
ALTER TABLE `Employee`
	ADD CONSTRAINT `3301b7040296fb50d27c73f1ba3847` FOREIGN KEY(`Status_id`) REFERENCES `Status`(`Status_id`);
ALTER TABLE `Contact`
	ADD CONSTRAINT `d69a3c50b5879c16220c86bdfe3a9e` FOREIGN KEY(`employee_id`) REFERENCES `Employee`(`Employee_id`);
ALTER TABLE `Employee`
	ADD CONSTRAINT `af5709827a940156a20ff4b33cd684` FOREIGN KEY(`Location_id`) REFERENCES `Location`(`Location_id`);
ALTER TABLE `Employee`
	ADD CONSTRAINT `403c67359b8b0e218816cbc633962a` FOREIGN KEY(`Designation_id`) REFERENCES `Designation`(`Designation_id`);

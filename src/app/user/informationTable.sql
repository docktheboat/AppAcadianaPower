/*
The first part is to create the database table before inserting the data into thte table.
GeoID variable is the official geographical location ID
RegionName variable is the region names in Lafayette Parish
RegionNameCode variable is the current census tract code of each region name
Internet variable is the Internet data and the Electric variable is the electric data.*/

CREATE TABLE Lafayette_information (
	GeoID bigint primary key,
	RegionName varchar(255), 
	RegionNameCode int,
	InternetStatus varchar(100),
	ElectricStatus varchar(100),
	ZipCode int
);

/*The second part is to insert the actual data into the table.*/
INSERT INTO Lafayette_information VALUES (22055002101,'Census Tract 21.01',2101,'stable','stable',70520), 
(22055001300,'Census Tract 13',1300,'stable','stable',70501),
(22055001403,'Census Tract 14.03',1403,'stable','stable',70508),
(22055001200,'Census Tract 12',1200,'stable','stable',70501),
(22055001404,'Census Tract 14.04',1404,'stable','stable',70592),
(22055001405,'Census Tract 14.05',1405,'stable','stable',70508),
(22055001902,'Census Tract 19.02',1902,'stable','stable',70583),
(22055001500,'Census Tract 15',1500,'stable','stable',70503),
(22055001407,'Census Tract 14.07',1407,'stable','stable',70508),
(22055001903,'Census Tract 19.03',1903,'stable','stable',70529),
(22055001904,'Census Tract 19.04',1904,'stable','not stable',70506),
(22055001905,'Census Tract 19.05',1905,'not stable','not stable',70508),
(22055000100,'Census Tract 1',100,'not stable','stable',70506),
(22055001600,'Census Tract 16',1600,'not stable','stable',70503),
(22055002001, 'Census Tract 20.01',2001,'not stable','stable',70583),
(22055001410, 'Census Tract 14.1',1410,'stable','stable',70592),
(22055001409,'Census Tract 14.09',1409,'not stable','not stable',70592),
(22055002102,'Census Tract 21.02',2102,'not stable','stable',70520),
(22055002002,'Census Tract 20.02',2002,'stable','not stable',70583),
(22055000900,'Census Tract 9',900,'stable','stable',70506),
(22055000200,'Census Tract 2',200,'stable','not stable',70501),
(22055000500,'Census Tract 5',500,'not stable','stable',70506),
(22055000602,'Census Tract 6.02',602,'stable','not stable',70506),
(22055001002,'Census Tract 10.02',1002,'not stable','stable',70507),
(22055001003,'Census Tract 10.03',1003,'stable','stable',70507),
(22055000700,'Census Tract 7',700,'not stable','not stable',70583),
(22055001001,'Census Tract 10.01',1001,'stable','not stable',70583),
(22055001100,'Census Tract 11',1100,'stable','stable',70501),
(22055001401,'Census Tract 14.01',1401,'not stable','stable',70503),
(22055001700,'Census Tract 17',1700,'stable','not stable',70503),
(22055001802,'Census Tract 18.02',1802,'stable','stable',70503),
(22055001406,'Census Tract 14.06',1406,'not stable','not stable',70503),
(22055001901,'Census Tract 19.01',1901,'not stable','not stable',70504),
(22055002200,'Census Tract 22',2200,'stable','stable',70503),
(22055001411,'Census Tract 14.11',1411,'not stable','not stable',70518),
(22055002104,'Census Tract 21.04',2104,'not stable','not stable',70507),
(22055001402,'Census Tract 14.02',1402,'stable','stable',70592),
(22055000800,'Census Tract 8',800,'stable','stable',70506),
(22055000604,'Census Tract 6.04',604,'stable','not stable',70506),
(22055002103,'Census Tract 21.03',2103,'not stable','stable',70520),
(22055001801,'Census Tract 18.01',1801,'stable','stable',70520),
(22055980000,'Census Tract 9800',980000,'not stable','not stable',70508),
(22055000603,'Census Tract 6.03',603,'stable','stable',70506);

/*The last part is to extract the data from the database table.*/
SELECT *
FROM Lafayette_information
ORDER BY GeoID;
























































































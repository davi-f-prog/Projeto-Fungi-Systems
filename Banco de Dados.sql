create database FungiSystem;



use FungiSystem;

create table Cultivador(
idCultivador int primary key auto_increment, 
Nome varchar(100),
CPF char (11),
RG varchar(20),
CNPJ char (14),
Email varchar (100),
Endereço varchar (200),
TelefoneFixo char (10),
TelefoneCelular char(11)
);

insert into Cultivador values
(null,'Vanessa Rosa','48456247892','42152145214','14562578921548','Vanessa@Rosa.gmail.com','Rua Serra tucuruvi, n45, J.Paineira, itaquaquecetuba, 085810-00','4216520120','90234598751'),
(null,'Roberto Gomes','58456247855','5215299524','24562578921588','Roberto@Gomes.gmail.com','Rua Pedro Alvares, n123, P.Dom Pedro, Tatuapé, 085860-10','4648750209','96015486301'),
(null,'Fernanda Lima','45862105478','1452023048','25369147896566','fernanda@lima.hotmail.com','Rua Prof Marise, n587, Vila Madalena, Suzano, 087810-89','4562018674','95451205780');


create table LoginUsuario(
idUsuario int auto_increment,
loginn varchar(50),
senha varchar(50),
FKCultivador int,
foreign key(FKCultivador) references Cultivador(idCultivador),
primary key(idUsuario,FKCultivador)
) auto_increment = 10500;

insert into LoginUsuario values
(null,'Radix123','Cult125@bBb',1),
(null,'Fabuww896','145Sempre%63b',2),
(null,'aloserra589'	,'896@Quero',3),
(null,'Amor158','eusou125$%',1);

create table Estufa(
idEstufa int primary key auto_increment, 
localizacao varchar(50),
TotalCogumelo int,
check(TotalCogumelo > 0),
FKCultivador int,
foreign key(FKCultivador)  references Cultivador(idCultivador)
)auto_increment = 1000;

insert into Estufa values
(null,'2B','2800',1),
(null,'2C','3000',1),
(null,'123-ladoF','5000',2),
(null,'123-ladoG','6000',2),
(null,'890-M','1500',3),
(null,'890-N','1450',3),
(null,'2A','1800',1);

create table Sensores(
Umidade decimal(4,2),
Temperatura decimal(4,2),
Luminosidade int,
dataHora datetime,
setor int,
FKEstufa int,
foreign key(FKEstufa) references Estufa(idEstufa),
primary key(dataHora,FKEstufa)
);

insert into sensores values
('85.22','18.23','1500','2020-01-05 17:10:00','12',1000),
('86.00','19.00','1523','2020-01-05 17:20:00','13',1000),
('86.30','19.00','1520','2020-01-05 17:30:00','14',1000),
('85.40','18.90','1550','2020-02-25 22:50:39','23',1001),
('87.00','15.40','1600','2020-02-25 23:00:00','24',1001),
('87.80','15.60','1650','2020-02-25 23:10:00','25',1001),
('87.40','15.00','1600','2020-02-25 23:20:00','26',1001),
('88.00','16.40','1700','2020-03-20 18:00:00','8',1002),
('88.10','17.40','1710','2020-03-20 18:10:00','9',1002),
('88.00','18.30','1500','2020-04-20 11:00:00','56',1003),
('88.89','18.20','1580','2020-04-20 11:10:00','54',1003),
('88.80','18.90','1600','2020-04-20 11:20:00','55',1003),
('89.00','14.30','1800','2020-06-14 04:10:00','325',1006),
('89.45','20.30','1850','2020-06-14 04:20:00','326',1006),
('89.00','14.20','1890','2020-06-14 04:30:00','327',1006),
('89.00','14.30','1800','2020-08-20 06:50:00','123',1005),
('89.85','14.10','1809','2020-08-20 07:00:50','124',1005),
('88.00','18.30','1500','2020-09-20 10:00:00','89',1004);
select *from Cultivador;
select *from loginusuario;
select *from estufa;
select *from sensores;


















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
idSensores int auto_increment primary key,
Umidade decimal(4,2),
Temperatura decimal(4,2),
Luminosidade int,
dataHora datetime,
setor int,
FKEstufa int,
foreign key(FKEstufa) references Estufa(idEstufa)
)auto_increment = 3000;


select *from Cultivador;
select *from loginusuario;
select *from estufa;
select *from sensores;



















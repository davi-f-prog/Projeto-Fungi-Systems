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


create table LoginUsuario(
idUsuario int,
loginn varchar(50),
senha varchar(50),
FKCultivador int,
foreign key(FKCultivador) references Cultivador(idCultivador),
primary key(idUsuario,FKCultivador)
);

select *from Cultivador;
select *from LoginUsuario;

create table Estufa(
idEstufa int primary key, 
localizacao varchar(50),
TotalCogumelo int,
check(TotalCogumelo > 0),
FKCultivador int,
foreign key(FKCultivador)  references Cultivador(idCultivador)
)auto_increment = 1000;

select *from Estufa;
drop table Estufa;

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
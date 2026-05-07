const { DataTypes, Model } = require('sequelize');
const sequelize =  require('../database/dbconfig');

class Atendimento extends Model {} //ele herda as config do model

Atendimento.init({
    nomeCliente: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefone:{
        type: DataTypes.STRING,
        allowNull: false,    
    },
    horario: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    data: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    dataNascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    tipoServico: {
        type: DataTypes.ENUM('Unhas', 'Cabelo', 'Pele'),
        allowNull:false
    },
    profissional:{
        type: DataTypes.STRING,
        allowNull: false
    }
    },{
        sequelize,
        modelName: 'Atendimentos',
        tableName: 'atendimentos',
});

module.exports = Atendimento;
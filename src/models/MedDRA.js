const { DataTypes }  = require('sequelize');
const { sequelize } = require('../config/database');

const MedDRA = sequelize.define('meddra', {
    soc_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'soc_code'
    },
    soc_name: {
        type: DataTypes.STRING(999),
        allowNull: true,
        field: 'soc_name'
    },
    soc_abbrev: {
        type: DataTypes.STRING(999),
        allowNull: true,
        field: 'soc_abbrev'
    },
    hlgt_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'hlgt_code'
    },
    hlgt_name: {
        type: DataTypes.STRING(999),
        allowNull: true,
        field: 'hlgt_name'
    },
    hlt_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'hlt_code'
    },
    hlt_name: {
        type: DataTypes.STRING(999),
        allowNull: true,
        field: 'hlt_name'
    },
    pt_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'pt_code'
    },
    pt_name: {
        type: DataTypes.STRING(999),
        allowNull: true,
        field: 'pt_name'
    },
    llt_code: {
        type: DataTypes.INTEGER,
        allowNull: true,
        field: 'llt_code'
    },
    llt_name: {
        type: DataTypes.STRING(999),
        allowNull: true,
        field: 'llt_name'
    },
    version: {
        type: DataTypes.STRING(999),
        allowNull: true,
        field: 'version'
    },
    language: {
        type: DataTypes.STRING(999),
        allowNull: true,
        field: 'language'
    }
}, {
    //tableName: 'meddra',
    freezeTableName: true,
    timestamps: false,
    //underscored: true,
});

MedDRA.removeAttribute('id'); // Remove the default 'id' attribute

module.exports = MedDRA;
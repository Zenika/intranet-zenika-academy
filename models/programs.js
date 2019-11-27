module.exports = (sequelize, DataTypes) => {
    const Programs = sequelize.define('Programs', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING,
                get() {
                    return this.getDataValue('id').split(';')
                },
                set(val) {
                    this.setDataValue('id', val.join(';'));
                },
            }
        },
        {
            classMethods:{
                associate:function(models){
                    Programs.belongsToMany(models.Promotions, { foreignKey: 'programId'} );
                }
            }
    });

    return Programs;
};

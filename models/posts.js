module.exports =(Sequelize,type)=>{
    return Sequelize.define('post',{
        id:{
            type: type.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        titulo:type.STRING,
        contenido: type.STRING,
        imagen: type.STRING,
        categoria: type.STRING,
    })
}



// test-db.js

const mysql = require('mysql2/promise');

async function testConnection() {
  const config = {
    host: 'db',           // nombre del servicio del contenedor MySQL
    user: 'phpmyadmin',     // tu usuario
    password: 'cs3q6jfe4bm0txh1xhq7jflj9pnttmio', // tu contraseña
    database: 'tu_base_de_datos',  // tu base de datos
  };

  try {
    const connection = await mysql.createConnection(config);
    console.log('✅ Conexión exitosa a la base de datos.');

    const [rows] = await connection.execute('SHOW TABLES;');
    console.log('📋 Tablas:', rows);

    await connection.end();
  } catch (error) {
    console.error('❌ Error al conectar a la base de datos:', error.message);
  }
}

testConnection();

const UserRepositoryPort = require('../domain/userRepositoryPort');
const pool = require('./db');
class UserRepositoryAdapter extends UserRepositoryPort {
  async create(user){ const [r]=await pool.execute('INSERT INTO usuarios (nombre,email,password) VALUES (?,?,?)',[user.nombre,user.email,user.password]); return {id:r.insertId,nombre:user.nombre,email:user.email}; }
  async findAll(){ const [rows]=await pool.execute('SELECT id,nombre,email FROM usuarios ORDER BY id ASC'); return rows; }
  async findById(id){ const [rows]=await pool.execute('SELECT id,nombre,email FROM usuarios WHERE id=? LIMIT 1',[id]); return rows[0]||null; }
  async findByEmail(email){ const [rows]=await pool.execute('SELECT id,nombre,email FROM usuarios WHERE email=? LIMIT 1',[email]); return rows[0]||null; }
  async update(id,user){ await pool.execute('UPDATE usuarios SET nombre=?, email=?, password=? WHERE id=?',[user.nombre,user.email,user.password,id]); return {id:Number(id),nombre:user.nombre,email:user.email}; }
  async delete(id){ await pool.execute('DELETE FROM usuarios WHERE id=?',[id]); return true; }
}
module.exports = UserRepositoryAdapter;

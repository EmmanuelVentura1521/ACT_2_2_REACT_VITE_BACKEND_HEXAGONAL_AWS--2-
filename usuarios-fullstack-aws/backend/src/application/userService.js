const User = require('../domain/user');
class UserService {
  constructor(userRepository,passwordHasher){ this.userRepository=userRepository; this.passwordHasher=passwordHasher; }
  async registerUser(nombre,email,password){
    const user = new User(null, typeof nombre==='string'?nombre.trim():nombre, typeof email==='string'?email.trim().toLowerCase():email, password);
    user.validar();
    const existente = await this.userRepository.findByEmail(user.email);
    if (existente){ const e=new Error('El correo electrónico ya está registrado'); e.status=409; throw e; }
    user.password = await this.passwordHasher.hash(user.password);
    return this.userRepository.create(user);
  }
  async getUsers(){ return this.userRepository.findAll(); }
  async updateUser(id,nombre,email,password){
    const actual = await this.userRepository.findById(id);
    if (!actual){ const e=new Error('Usuario no encontrado'); e.status=404; throw e; }
    const user = new User(id, typeof nombre==='string'?nombre.trim():nombre, typeof email==='string'?email.trim().toLowerCase():email, password);
    user.validar();
    const existente = await this.userRepository.findByEmail(user.email);
    if (existente && Number(existente.id)!==Number(id)){ const e=new Error('El correo electrónico ya está registrado'); e.status=409; throw e; }
    user.password = await this.passwordHasher.hash(user.password);
    return this.userRepository.update(id,user);
  }
  async deleteUser(id){
    const actual = await this.userRepository.findById(id);
    if (!actual){ const e=new Error('Usuario no encontrado'); e.status=404; throw e; }
    await this.userRepository.delete(id); return actual;
  }
}
module.exports = UserService;

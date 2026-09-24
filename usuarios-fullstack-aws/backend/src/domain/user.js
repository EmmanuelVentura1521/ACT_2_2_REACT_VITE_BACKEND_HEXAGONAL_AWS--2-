class User {
  constructor(id, nombre, email, password) { this.id=id; this.nombre=nombre; this.email=email; this.password=password; }
  validar() {
    if (!this.nombre || !this.email || !this.password) throw new Error('Los campos nombre, email y password son obligatorios');
    if (typeof this.nombre !== 'string' || this.nombre.trim().length < 3) throw new Error('El nombre debe contener al menos 3 caracteres');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) throw new Error('El correo electrónico no tiene un formato válido');
    if (typeof this.password !== 'string' || this.password.length < 8) throw new Error('La contraseña debe contener al menos 8 caracteres');
  }
}
module.exports = User;

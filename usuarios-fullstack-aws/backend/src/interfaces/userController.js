class UserController {
  constructor(userService){ this.userService=userService; }
  register = async (req,res)=>{ try{ const {nombre,email,password}=req.body||{}; const usuario=await this.userService.registerUser(nombre,email,password); return res.status(201).json({mensaje:'Usuario registrado correctamente',usuario}); } catch(e){ return res.status(e.status||400).json({error:e.message}); } };
  getAll = async (req,res)=>{ try{ const usuarios=await this.userService.getUsers(); return res.status(200).json({cantidad:usuarios.length,usuarios}); } catch(e){ console.error(e); return res.status(500).json({error:'Error interno del servidor'}); } };
  update = async (req,res)=>{ try{ const {id}=req.params; const {nombre,email,password}=req.body||{}; const usuario=await this.userService.updateUser(id,nombre,email,password); return res.status(200).json({mensaje:'Usuario actualizado correctamente',usuario}); } catch(e){ return res.status(e.status||400).json({error:e.message}); } };
  delete = async (req,res)=>{ try{ const {id}=req.params; const usuario=await this.userService.deleteUser(id); return res.status(200).json({mensaje:'Usuario eliminado correctamente',usuario}); } catch(e){ return res.status(e.status||400).json({error:e.message}); } };
}
module.exports = UserController;

// AdminUser.ts
import User from '../models/User_model'; // El modelo de Sequelize

// AdminUser.ts
class AdminUser extends User {

    constructor(userData: any) {
    super()
      this.username = userData.username;
      this.email = userData.email;
      this.password = userData.password;
      this.role = 'admin';
      this.id = userData.id; // Asigna el id de la base de datos
    }
  }
  
  export default AdminUser;
  
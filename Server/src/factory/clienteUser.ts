// ClienteUser.ts
import User from '../models/User_model';

class ClienteUser extends User {
  // Métodos y propiedades específicos para el cliente
  constructor(userData: any) {
    super();
    this.id = userData.id;
    this.username = userData.username;
    this.email = userData.email;
    this.password = userData.password;
    this.role = 'user';
  }
}

export default ClienteUser;

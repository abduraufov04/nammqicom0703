// AuthService.js

class AuthService {
    // Simulated data storage for users
    static users = [];
  
    // Method to register a new user
    static registerUser(username, email, password) {
      const newUser = {
        id: this.users.length + 1,
        username,
        email,
        password,
        createdAt: new Date().toISOString(),
      };
      this.users.push(newUser);
      console.log(this.users);
      return newUser;
    }
  
    // Method to login a user
    static loginUser(email, password) {
      const user = this.users.find(
        (user) => user.email === email && user.password === password
      );
      return user ? { ...user, password: null } : null;
    }
  
    // Method to get user by ID
    static getUserById(userId) {
      return this.users.find((user) => user.id === userId);
    }
  }
  
  export default AuthService;
  
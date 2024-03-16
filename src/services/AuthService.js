class AuthService {
  // API ning URL manzili
  static apiUrl = 'https://nammqicommunity.pythonanywhere.com/login/';

  // Method to login a user using the API
  static async loginUser(username, password) {
      try {
          const response = await fetch(this.apiUrl, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password })
          });

          if (!response.ok) {
              throw new Error('Login failed');
          }

          const user = await response.json();
          return user;
      } catch (error) {
          console.error('Error during login:', error.message);
          return null;
      }
  }



  // API's URL address
  static apiUrlr = 'https://nammqicommunity.pythonanywhere.com/register/';

  // Method to register a new user using the API
  static async registerUser(username, email, password) {
      try {
          const response = await fetch(this.apiUrlr, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, email, password })
          });

          if (!response.ok) {
              throw new Error('Registration failed');
          }

          const user = await response.json();
          return user;
      } catch (error) {
          console.error('Error during registration:', error.message);
          return null;
      }
  }
}



export default AuthService;

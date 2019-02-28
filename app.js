const http = new EasyHTTP;

//Get users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));


//Create user 
const data = [
  {
    name: 'John',
    username: 'johndoe',
    email: 'john@gmail.com'
  },
  {
    name: 'John2',
    username: 'johndoe2',
    email: 'john2@gmail.com'
  }
]

http.post('https://jsonplaceholder.typicode.com/users', data[0])
  .then(data => console.log(data))
  .catch(err => console.log(err));


//Update user
http.put('https://jsonplaceholder.typicode.com/users/2', data[1])
  .then(data => console.log(data))
  .catch(err => console.log(err));


//Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));

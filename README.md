# smnosql

## Description

This is a back end for asocialmedia network that uses MongoDB Mongoose and Express. The application lets create users, thoughts, add friends and react to friends' thoughts.

## Table of Contents

- [Installation](#installation)
- [Walkthrough Video](#walkthrough-video)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To get started with the application, follow: these steps:

1. Clone the repository to your local machine.
2. Make sure you have node.js and mongoDb installed
3. Install the required dependencies using npm install.
4. Start the application using npm start.

## Walkthrough Video

[- Walkthrough video link](https://drive.google.com/file/d/1f8pa5je9l5Z9A-jIqUayvWMymxx2qyvw/view)

---bash---
# Tests
To test the application, you can perform the following tests:

1. GET All Users: Use Insomnia to send a GET request to /api/users and verify that all userss are returned in JSON format.

2. GET Single User: Use Insomnia to send a GET request to /api/users/:id (replace :id with a valid user ID) and verify that the specific user is returned in JSON format.

3. POST New User: Use Insomnia to send a POST request to /api/users with the required data and verify that the new user is created in the database.

4. PUT Update user: Use Insomnia to send a PUT request to /api/user/:id (replace :id with a valid user ID) with the updated data and verify that the user is updated in the database.

5. DELETE User: Use Insomnia to send a DELETE request to /api/users/:id (replace :id with a valid user ID) and verify that the user is deleted from the database.

Repeat similar tests for thoughts, friends and reaction routes.

## Usage

After starting the application, you can use tools like Insomnia or Postman to interact with the API routes. Here are the available routes:
- GET /api/users: Get all users.
- GET /api/users/:id: Get a single user by ID.
- POST /api/users: Create a new user.
- PUT /api/users/:id: Update a user by ID.
- DELETE /api/users/:id: Delete a user by ID.
Similar routes are available for thoughts, friends and reaction routes.

## License
This project is licensed under the MIT License

## Contributing

Contributions are welcome! Here are some guidelines:

- Fork the repository.
- Create your feature branch: git checkout -b feature/my-feature.
- Commit your changes: git commit -am 'Add my feature'.
- Push to the branch: git push origin feature/my-feature.
- Submit a pull request.

## Questions 
If you have any questions or need further assistance, feel free to reach out.

GitHub: [zaort](https://github.com/zaort)
email: [czafra.ortega@gmail.com](mailto:czafra.ortega@gmail.com)

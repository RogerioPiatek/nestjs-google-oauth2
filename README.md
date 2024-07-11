# NestJS OAuth2 Google Authentication Example

This project demonstrates the implementation of OAuth2 authentication with Google using NestJS, PostgreSQL, Docker, and TypeORM.

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="90" alt="Nest Logo" /></a>
</p>

## Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.
- **PostgreSQL**: A powerful, open-source object-relational database system.
- **Docker**: A platform for developing, shipping, and running applications using containerization.
- **TypeORM**: An ORM that can be used to help interact with the database.

## Project Setup

### Prerequisites

- Node.js and npm installed locally.
- Docker installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file based on `.env.example`.

4. Start the Docker container:

   ```bash
   docker-compose up -d
   ```

5. Run the application:
   ```bash
   npm run start:dev
   ```

## Functionality

### Google OAuth2 Authentication

- **`/auth/google/login`**: Initiates the Google OAuth2 login process.
- **`/auth/google/redirect`**: Handles the OAuth2 callback from Google.
- **`/auth/status`**: Checks the authentication status of the user.

### Database Interaction

- **TypeORM** is used to define entities and interact with the PostgreSQL database.
- **`AuthService`**: Validates users using OAuth2 details and manages user data in the database.

## Folder Structure

```
project-root/
├── src/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── utils/
│   ├── typeorm/
│   │   └── entities/
│   │       └── User.ts
│   └── ...
├── docker-compose.yml
├── .env.example
└── README.md
```

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your enhancements.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

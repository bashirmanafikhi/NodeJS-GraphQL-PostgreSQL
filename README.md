# NodeJS-GraphQL-PostgreSQL

Welcome to **NodeJS-GraphQL-PostgreSQL**, a backend application featuring **GraphQL API** for managing products, orders, and users. With **user authentication**, **authorization** based on roles, and an exciting database-backed system, this app is designed to help you build, manage, and interact with e-commerce-like data effortlessly. 🚀

---

## Features

### 🚀 **User Authentication & Authorization**

- **Role-based Access**:
    - **SELLER**: Can create products but **cannot create orders**.
    - **BUYER**: Can create orders but **cannot create products**.
    - **ADMIN**: Has full control over all entities.
- **JWT Authentication**: Secure login and access control with JWT tokens.
- **Role-based Authorization**: Different roles can access different parts of the application, ensuring strict permissions.

### 🔥 **Powerful GraphQL API**

- Fetch and manage **users**, **products**, **orders**, and **order items** seamlessly.
- Handle operations like **registering new users**, **creating products**, **placing orders**, and more.

---
## Usage

### 🎮 **GraphQL Playground**

Navigate to `http://localhost:4000/graphql` to interact with the API and test queries and mutations using GraphQL Playground.

---

## Queries & Mutations

### Queries

- **`users`**: Fetch all users.
- **`user(id: ID!)`**: Fetch a user by ID.
- **`products`**: Fetch all products.
- **`product(id: ID!)`**: Fetch a product by ID.
- **`orders`**: Fetch all orders with their products.
- **`order(id: ID!)`**: Fetch a specific order.
- **`orderItems`**: Fetch all order items.
- **`orderItem(id: ID!)`**: Fetch a specific order item.

### Mutations

- **`register(username: String!, email: String!, password: String!, role: String!)`**: Register a new user.
- **`login(email: String!, password: String!)`**: Log in and receive a JWT token for authentication.
- **`createProduct(name: String!, price: Float!, stock: Int!, ownerId: ID!)`**: Create a new product (SELLERS only).
- **`createOrder(buyerId: ID!)`**: Place a new order (BUYERS only).
- **`addItemToOrder(orderId: ID!, productId: ID!, quantity: Int!, price: Float!)`**: Add a product to an order.

---

## Authentication & Authorization

- All operations are **protected** by JWT authentication. To access any of the API endpoints, you need to include the `Authorization` header in your requests like so:

bash

CopyEdit

`Authorization: Bearer <Your-Token-Here>`

### Roles in the System

- **SELLER**: Can create products but **cannot** place orders.
- **BUYER**: Can create orders and buy products but **cannot** create products
- **ADMIN**: Can manage users, orders, products, and more.

---

## Environment Variables

Make sure to set up the following environment variables:

- `DATABASE_URL`: The connection string for your PostgreSQL database.
- `JWT_SECRET`: A secret key used for signing JWT tokens.

Example `.env` file:

env

CopyEdit

`DATABASE_URL=postgres://user:password@localhost:5432/dbname JWT_SECRET=mysecretkey`

---

## Technologies Used

- **Apollo Server** for building GraphQL APIs.
- **Sequelize** as an ORM to interact with the PostgreSQL database.
- **JWT** for user authentication and session management.
- **PostgreSQL** for data storage.
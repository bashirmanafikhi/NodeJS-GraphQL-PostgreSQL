# NodeJS-GraphQL-PostgreSQL


## Usage

- Navigate to the GraphQL Playground at `http://localhost:4000/graphql` to test queries and mutations.

## Queries & Mutations

### Queries

- `users`: Fetch all users.
- `orders`: Fetch all orders with their products.
- `orderItems`: Fetch all order items.
- `products`: Fetch all products.

### Mutations

- `register`: Register a new user.
- `createProduct`: Add a new product.
- `createOrder`: Place a new order.

## Environment Variables

Make sure to set the following environment variables:

- `DATABASE_URL`: Connection string to your database.
- `JWT_SECRET`: Secret for JWT authentication.
# Online Courses App

## Installation

1. **Install dependencies:**

    ```bash
    cd frontend
    npm install

    cd ../backend
    npm install
    ```

## Configuration

1. **Create a `.env` file:**

   Inside the frontend directory of the project, create a `.env` file with the following environment variables:

    ```bash
    REACT_APP_BACKEND_URL="http://localhost:5000/api"
    ```

    Inside the backend directory of the project, create a `.env` file with the following environment variables:

    ```bash
    PORT=5000
    DB_USER=
    DB_PASSWORD=
    DB_CLUSTER_URL=
    DB_APP_NAME=
    DB_NAME=
    ```

2. **Start the development server:**

    ```bash
    npm run start
    ```
3. **Access the application:**

    Open your web browser and go to [http://localhost:3000](http://localhost:3000).

4. **Testing - Backend**

To run tests, use the following command:

```bash
cd backend
npm run test
```
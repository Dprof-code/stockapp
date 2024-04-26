# Stock REST API

## Description
This project is a RESTful API for managing stock data. It allows users to perform CRUD operations on stock records using NodeJS and MySQL.

## Team Members
- Afolabi Raymond Olumide - IFT/19/0645
- Awoyemi Happiness Olatomiwa - IFT/19/0656
- Moses Obedience Ago-Oghene - IFT/19/0668
- Olawale Adedamola Abraham - IFT/19/0681
- Olajide-Ige Simisola Adebola - IFT/20/5056

## Installation

To get started with this project, clone the repository and install the dependencies.

```bash
### Clone the repository
git clone https://github.com/Dprof-code/stockapp.git

### Navigate to the repository directory
cd stockapp

### Install dependencies
npm install
```

## Usage
Here’s how you can start the server and make requests to the API.

## Start the server
```
npm start

The server starts on http://localhost:3000
Use Postman or any other API client to interact with the API
```

## API Endpoints

### Table

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /stocks | Get all stock records |
| GET | /stocks/:id | Get a single stock record |
| POST | /stocks | Add a new stock record |
| PUT | /stocks/:id | Update a stock record |
| DELETE | /stocks/:id | Delete a stock record |

License
This project is licensed under the MIT License.
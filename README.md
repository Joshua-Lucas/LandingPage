# TestPage


To run just frontend run "npm run-frontend"



## Requirements
- postgres: `brew install postgres`
- node: 

## Getting Started

### 1. Requirements
#### Postgress
You will need to [install homebrew](https://brew.sh/) if you do not already have it.
```sh 
brew install postgres
```

#### Node
https://nodejs.org/en/ install the LTS

### 2. Database Setup
#### Creating the Database
```sh
make db-create
```

#### Running the Migrations
```sh
make db-migrate
```

### 3. Installing Packages
```sh
make -j2 install
```

### 4. Running the App
```sh
make -j2 dev
```

You should now be able to access the app at http://localhost:3000


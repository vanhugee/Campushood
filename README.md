## 🚗 Campushood
> CampusHood is your go-to platform for resource management and sharing within your campus community. Whether you need a ride for weekend outings without a car or you have surplus food and cleaning supplies you don't want to go to waste, CampusHood has you covered.

## 💫 Inspirations
CampusHood was born out of the challenges faced by international students on U.S. campuses. Inspired by the need for accessible transportation and resource sharing, CampusHood aims to empower students to explore, connect, and thrive within their campus community.

## 🙉 Contributors
- Awais Abid
- Blake Craig
- Huy Nguyen
- Paul Skok

## 💻 Technologies 
- Frontend: React.js
- Backend: Node.js, Express.js
- Database: PostgreSQL
- APIs: Firebase Auth API
- Language: Typescript

## 🔨 Installation
### Prerequisites
- Node.js installed
- A SQL database server running (PostgreSQL recommended)
### Installation steps
- Create a `.env` file in the `campushood` directory and set up the database connection URL
```bash
DATABASE_URL="YOUR_DATABASE_URL"
```
- In the `campushood` directory, install all the dependencies
```bash
$ npm install
```
- Invoke the Prisma CLI
```bash
$ npx prisma
```
- Migrate data model to the database schema
```bash
$ npx prisma migrate dev --name init
```
- Start the backend server
```bash
$ npm start
```
- Navigate to the `client` directory, install all the dependencies
```bash
$ npm install
```
- Start the frontend server
```bash
$ npm start
```
Additional scripts for the client can be found in the `README.md` file in the `client` directory





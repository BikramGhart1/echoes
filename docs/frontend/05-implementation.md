# 1. Overview
This doc focuses on implementation documentation part of the application. 
It documents which technology stack and utilities are used, How Project structure 
is designed, How will be the state managed and how data flows between components, 
How routes and url pathnames are designed. 

# 2. Technologies Used
- **React** v19.1.0
- **React Router DOM** v7.7.1 (Object-based routing)
- **Redux Toolkit** v2.8.2 (Using RTK Query)
- **Tailwind CSS** v3.4.17
- **Vite** v7.0.3 (Build tool and development server)
- **EsLint** v9.30.1
- **Prettier** (Code formatter) 

# 3. Project folder Structure
Tree Diagram of frontend directory

frontend/
├── public/
|
├── src/
|    ├── components/
|    |   ├── router/
|    |   ├── partials/
|    |   └── Sign_in/
|    ├── contexts/
|    ├── layouts/
|    ├── pages/
|    
     
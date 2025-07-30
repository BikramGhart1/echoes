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
|    |   ├── partials/
|    |   └── Sign_in/
|    ├── contexts/           
|    ├── layouts/
|    ├── pages/
|    ├── router/
|
|
├── App.jsx
└── Main.jsx      

# 4. Layout design
There are 4 layouts that define the structure of all the pages and how they will appear.

  1. AuthLayout.jsx 
  Used for unauthenticated routes such as login and signup pages.        
      - Functions as standlone layout.
      - Exists outside the Protected Layout. 
      - Is a sibling to the protectedLayout in the route structure. 

  2. ProtectedLayout.jsx 
  Used for all authenticated routes. 
      - Wraps all pages except login and signup.
      - Checks for a valid token; if invalid or absen; it directs to the login page.
      - Ensures only authorized users can access protected content.

  3. MainLayout.jsx 
  Acts as the primary container layout for most internal pages. 
      - structures most pages into two-column layout. 
      - wraps ket shared components like Navbar and Sidebar.

  4. HomeLayout.jsx 
  A specialized layout for the Home page. 
      - Returns a structure with three columns of components

  # 5. Routes Configuration
  For routing, React Router DOM v7.7.1 is used with the object-based routing approach
  Hierarchry of Routes is configured with accordance to hierarchy of Layout design.
  
  ## Tree diagram representing routes hierarchy:

    /                       # ProtectedLayout
    └── /                   # MainLayout
        ├── (index)         # HomePageLayout
        ├── profile         # ProfilePage
        ├── post            # ViewPost
        ├── create-post     # CreatePost

    /auth                   # AuthLayout
    ├── (index)             # Login
    └── signup              # Signup

   ## Routes in detail

    | **Route Path** | **Component**    | **Layout**   | **Access** | **Description**                           |
    | -------------- | ---------------- | ------------ | ---------- | ----------------------------------------- |
    | `/`            | `HomePageLayout` | `MainLayout` | Protected  | Main landing page for authenticated users |
    | `/profile`     | `ProfilePage`    | `MainLayout` | Protected  | Shows logged-in user's profile            |
    | `/user/:id`    | `UserPage`       | `MainLayout` | Protected  | View other users' profiles                |
    | `/post`        | `ViewPost`       | `MainLayout` | Protected  | View a single post                        |
    | `/create-post` | `CreatePost`     | `MainLayout` | Protected  | Create a new post                         |
    | `/auth`        | `Login`          | `AuthLayout` | Public     | Login page                                |
    | `/auth/signup` | `Signup`         | `AuthLayout` | Public     | Signup page                               |
  
  # 6. State Management
  Primary and complex state management is implemented in React Redux Toolkit.
  Basic and simple state for global assess is implemented using useContext hook.   

  ## 6.1 useContext 
  ### 6.1.1 Hamburger Menu
  Hamburger Menu appears only in small screen, its purpose is to toggle the display of Navbar which is on the left.

  useContext hook manages the state of Navbar component's display using a variable `navbarIsOpen`.
  In MainLayout where Navbar is structured as a static component `navbarIsOpen` variable is checked and accordingly toggled the display of Navbar component.

  useContext manages a function too, `toggleNavbar()` which will be called when hamburger menu button or close Navbar button is clicked to toggle the state of `navbarIsOpen`.

  By wrapping the MainLayout with context Provider, `navbarIsOpen` and `toggleNavbar()` are passed as props.

  ## 6.2 React Redux Toolkit 
  


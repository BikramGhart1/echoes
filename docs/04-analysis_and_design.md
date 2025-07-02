# Analysis and Design
Analysis and design phase has been divided into three sub phases:
  1. System analysis using UML diagrams
  2. UI/UX design
  3. Database Schema Design 

## 1. System analysis using UML diagrams

### Data Flow Diagram
Data Flow Diagram level 0 and 1 describe how data will flow and how different 
processes will handle different modules.

 #### Context Diagram
 ![Context_Diagram](./diagrams/UML/context%20diagram.png)

 This describes overall system in abstract level.

 #### Level 0
 ![level_0](./diagrams/UML/dfd%20lvl%200%20revised.png)

 This diagram has defined all the processes and entities here.

 #### level 1
 ![level_1_1](./diagrams/UML/dfd%20lvl%201%20revised%201.png)

 This diagram describes the account registration and login modules

 ![level_1_2](./diagrams/UML/dfd%20lvl%201%20revised%202.png)

 This diagram describes the post management module

 ![level_1_3](./diagrams/UML/dfd%20lvl%201%20revised%203.drawio%20(1).png)

 This diagram describes the profile management module

### Sequence Diagram
This sequence diagram decribes how login module works to provide authentication token
and how token can be used to access protected routes.

![sequence_diagram](./diagrams/UML/sequence%20diagram%20for%20auth.drawio%20(1).png)

-------------------------------------------------------------------------------------------------------------------------

## 2. UI/UX Design
* This design is not finalized concrete design, I intend to be more flexible and experiment with the
* deisgns as suitable it can be during development phase

- Principle - Mobile first approach
- Color choices:
  1. Primary : #F55600
  2. Secondary : #9F9F9F
  3. Background : #D9D9D9
  4. Text : #FFFFFF / #000000

[Link to the figma desing prototype](https://www.figma.com/proto/ybmCaUpTtiaLXOcoenOw4s/Untitled?node-id=25-15&p=f&t=onKqHWT5d7ywiHzK-0&scaling=scale-down&content-scaling=fixed&page-id=11%3A2)

### Screenshots of figma designed pages 

#### Overview
![overview](./diagrams/figma/Screenshot%202025-06-30%20213919.png)

#### Logo 
![logo](./diagrams/figma/final%20logo.png)

1. Signup page 

   ![signuppage](./diagrams/figma/Signup%20wireframe%20(1).png)

   ![signuppage-phone](./diagrams/figma/signup%20wireframe%20-%20phone.png)

2. Login page

   ![loginpage](./diagrams/figma/login%20wireframe.png)

   ![loginpage-phone](./diagrams/figma/login%20wireframe%20-%20phone.png)

3. Home page
   
   ![hoempage](./diagrams/figma/homepage%20wireframe.png)

   ![homepage-phone](./diagrams/figma/home%20page%20-%20phone.png)

   ![homepage-phone-sidebar](./diagrams/figma/home%20page%20with%20sidebar%20-%20phone.png)

4. Specific Post page

   ![specific-post](./diagrams/figma/specific%20post%20page.png)

5. create post page

   ![create-post](./diagrams/figma/create%20post.png)

6. Profile page

   > Profile page with posts 
   ![profile-page](./diagrams/figma/Screenshot%202025-06-30%20213558.png)     

   > Profile page with comments
   ![profile-page-comments](./diagrams/figma/profile%20page%20with%20comments%20(1).png)

   > profile page with posts scrolled up
   ![profile-page-posts-up](./diagrams/figma/profile%20page%20with%20posts.png)

   > Profile posts
   ![posts-in-profile](./diagrams/figma/posts%20user%20profile.png)

   > Followee lists in profile
   ![followee-lists](./diagrams/figma/user%20profile%20followee%20page.png)

7. Edit Profile

   ![edit-profile](./diagrams/figma/Edit%20profile.png)

-------------------------------------------------------------------------------------------------------------------------

## 3. Database Schema Design 
### 3.1 Technology Stack
    The project uses PostgreSQL as the primary relational database system due to its performance, strong ACID compliance, and extensive support for complex queries and data types.
      
### 3.2 Schema Overview
    The database schema has been designed to support the core functionalities of the Echoes platform, including:

   - User management and authentication
   - Content posting (text, media)
   - Social interactions (comments, likes, follows, saves)
   - Profile features (editing, viewing, avatar URL storage)

### 3.3 Entity Tables and Relationships
Below is an overview of key tables with primary relationships:

#### 3.3.1 users
| Column Name   | Data Type        | Constraints & Description                        |
| ------------- | ---------------- | ------------------------------------------------ |
| id            | `VARCHAR` (UUID) | Primary key, generated using `v4 UUID`           |
| username      | `VARCHAR(50)`    | Unique, used for user handle                     |
| display_name  | `VARCHAR(100)`   | Full name or display label                       |
| email         | `VARCHAR(100)`   | Unique                                           |
| password      | `TEXT`           | Hashed password                                  |
| avatar_url    | `TEXT`           | Profile picture image URL (stored in Supabase)   |
| bio           | `TEXT`           | User’s biography                                 |
| created_at    | `TIMESTAMP`      | Default to `now()`, account creation timestamp   |

#### 3.3.2 posts 
| Column Name   | Data Type        | Constraints & Description                        |
| ------------- | ---------------- | ------------------------------------------------ |
| id            | `VARCHAR` (UUID) | Primary key, generated using `v4 UUID`           |
| title         | `VARCHAR(150)`    | Post title                                      |
| content       | `TEXT`           | post content                                     |
| media_url     | `TEXT`           | image URL (stored in Supabase)                   |
| created_at    | `TIMESTAMP`      | Default to `now()`, post creation timestamp      |
| user_id       | `VARCHAR`        | Foreign key referencing users(id)                |


#### 3.3.3 comments
| Column Name | Data Type        | Constraints & Description                                   |
| ----------- | ---------------- | ----------------------------------------------------------- |
| id          | `VARCHAR` (UUID) | Primary key, generated using `v4 UUID`                      |
| content     | `TEXT`           | Comment content                                             |
| post_id     | `VARCHAR`        | Foreign key referencing posts(id)                           |
| user_id     | `VARCHAR`        | Foreign key referencing users(id)                           |
| parent_id   | `VARCHAR`        | Nullable, self-referencing foreign key to comments(id)      |
| created_at  | `TIMESTAMP`      | Default to `now()`, comment creation timestamp              |

* Note: 
  - parent_id enables nested comment replies by referencing another comment.
  - All foreign keys are ON DELETE CASCADE to ensure referential integrity.

#### 3.3.4 follows
| Column Name | Data Type        | Constraints & Description                                   |
| ----------- | ---------------- | ----------------------------------------------------------- |
| follower_id | `VARCHAR`        | Foreign key referencing users(id)                           |
| following_id| `VARCHAR`        | Foreign key referencing users(id)                           |
| followed_at | `TIMESTAMP`      | Default to `now()`, follow timestamp                        |
| PRIMARY     | composite        | Composite of (follower_id,following_id)                     |

#### 3.3.5 likes
| Column Name | Data Type        | Constraints & Description                                   |
| ----------- | ---------------- | ----------------------------------------------------------- |
| user_id     | `VARCHAR`        | Foreign key referencing users(id)                           |
| post_id     | `VARCHAR`        | Foreign key referencing posts(id)                           |
| liked_at    | `TIMESTAMP`      | Default to `now()`, liked timestamp,for sorting             |
| PRIMARY     | composite        | Composite of (user_id,post_id)                              |

#### 3.3.6 saved_posts
| Column Name | Data Type        | Constraints & Description                                   |
| ----------- | ---------------- | ----------------------------------------------------------- |
| user_id     | `VARCHAR`        | Foreign key referencing users(id)                           |
| post_id     | `VARCHAR`        | Foreign key referencing posts(id)                           |
| saved_at    | `TIMESTAMP`      | Default to `now()`, saved timestamp                         |
| PRIMARY     | composite        | Composite of (user_id,post_id)                              |

### 3.4 Notes
All media files (avatars, post images) are stored in Supabase Storage, and only their public URLs are saved in the database.

created_at, liked_at, saved_at, and followed_at columns are used for easy sorting and analytics.


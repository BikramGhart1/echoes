# Requirements 
I've decided to make system accessible in two roles:
1. Admin role based
2. User role based

For now I'll be working on user role based,
Admin role will be for future plan

## 1. Functional Requirements
Describes what services the system provides — features, behavior, and workflows.
*Functional requirements are classified according to several modules given below*

### 1.1. Account and Auth Management
- Users can create an account using a unique username and password.
- Users can log in and log out securely.
- Users can reset their password via email.
- Users must verify their email upon registration. (Recosidering this part)

### 1.2. Profile Management
- Users can edit their profile: username, bio, and profile picture.
- Users can make a display name 
- Users can view their own and others’ public profiles.

### 1.3. Post Management
- Users can create, edit, and delete posts (text-based and image for now).
- Users can view a timeline of posts from people they follow.
- Users can discover new posts.
- Posts display author, timestamp, and number of likes/comments and comment contents.

### 1.4. Engagement/Interaction Features
- Users can like and unlike posts.
- Users can save the post.
- Users can comment on posts.
- Users can delete their own comments.
- Users can search and find other users.

### 1.5. Follow System
- Users can follow and unfollow other users.
- Users can view their list of followers and followings.
- User profiles display follow/following count.

### 1.6. Notifications (not now)
- Users receive notifications when followed, or when someone likes/comments on their posts.

### Representation of functional requirements in usecase diagram
![usecasediagram](./diagrams/usecase%20Diagram.png)

## Future scability features
- Repost System
- Sub group communities for likeminded users
- Users can mention and tag other users
- Users can share the posts

---

## 2. Non-Functional Requirements
Specifies **quality attributes**

### 2.1. Security
- Passwords must be hashed and securely stored.
- Sessions or tokens should be securely managed using JWT.
- Email verification must be enforced. (need to reconsidered)

### 2.2. Scalability
- System should be scalable to support future growth in users and posts.

### 2.3. Maintainability
- The codebase should follow best practices and be well-documented.

### 2.4. Portability
- The application should run consistently across different browsers and devices.

### 2.5. Usability
- The UI should be responsive and accessible to a wide range of users.

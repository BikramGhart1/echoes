# Analysis and Design
I've divided analysis and design phase into three sub phases:
  1. System analysis using UML diagrams
  2. UI/UX design
  3. Database Schema Design 

## 1. System analysis using UML diagrams

### Data Flow Diagram
I've designed Data Flow Diagram level 0 and 1 describing how data will flow and different 
processes will handle different modules.

 #### Context Diagram
 ![Context_Diagram](./diagrams/UML/context%20diagram.png)

 This describes overall system in abstract level.

 #### Level 0
 ![level_0](./diagrams/UML/dfd%20lvl%200%20revised.png)

 I've defined all the processes and entities here.

 #### level 1
 ![level_1_1](./diagrams/UML/dfd%20lvl%201%20revised%201.png)

 This diagram describes the account registration and login modules

 ![level_1_2](./diagrams/UML/dfd%20lvl%201%20revised%202.png)

 This diagram describes the post management module

 ![level_1_3](./diagrams/UML/dfd%20lvl%201%20revised%203.drawio%20(1).png)

 This diagram describes the profile management module

### Sequence Diagram
The sequence diagram I designed decribes how login module work to provide authentication token
and how that token can be used to access protected routes.

![sequence_diagram](./diagrams/UML/sequence%20diagram%20for%20auth.drawio%20(1).png)

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

1. Signup page 

  [!signuppage](./diagrams/figma/Signup%20wireframe%20(1).png)

  [!signuppage-phone](./diagrams/figma/signup%20wireframe%20-%20phone.png)

2. Login page

   [!loginpage](./diagrams/figma/login%20wireframe.png)

   [!loginpage-phone](./diagrams/figma/login%20wireframe%20-%20phone.png)

3. Home page
   
   [!hoempage](./diagrams/figma/homepage%20wireframe.png)

   [!homepage-phone](./diagrams/figma/home%20page%20-%20phone.png)

   [!homepage-phone-sidebar](./diagrams/figma/home%20page%20with%20sidebar%20-%20phone.png)

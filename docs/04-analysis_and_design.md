# Analysis and Design
I've divided analysis and design phase into three sub phases:
  1. System analysis using UML diagrams
  2. Layout and UI/UX design
  3. Database Design 

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
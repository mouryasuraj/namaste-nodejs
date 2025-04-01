/*

02. Microservices vs Monolith - How to Build a Project


//How project build in industry

1. Requirement - (Product/Project Manager )
--> 
    a. What are the feature to implement
    b. Who are the target audience
    c. What are the tech stack we are going to use for this product
    d. What will be the look of the UI
2. Design - (Tech Team)
-->
    a. Designing the architecture of the project
    b. Tech stack design
    c. HLD and LLD
3. Development - (Developers)
4. Testing - (SDET) - Software Development Engineer Testing
5. Deployment - (Devops Engineer)
6. Maintenance - Recycle the whole thing from 1 to 5



// Monolith VS Mircroservices

1. Monolith:
--> 
    a. You have one project and inside that, you have backend, frontend, database, authenticate, send emails, analytics,
    b. Dev speed - Slow because it have a one code repo and all the developer have to work on that repo
    c. Scalability - Tough to scale
    d. Deployment - Single deployment
    e. Tech stack - Limited to one techstack(like react for UI)
    f. infra cost - low
    g. complexity - Tough
    h. Fault isolation - whole project will crash if some part will crash
    i. Testing - Testing in monolith is easier
    j. Maintenance - difficult to maintain 
    k. Debugging - Easier to debug



2. Microservices
-->
    a. Multiple services - (New Service, New Project, New Application)
    b. Microservice for frontend, backend, authentication, admin, notification, 
    c. Dev speed - Fast, we can create multiple repo and work independently
    d. Scalability - easy to scale
    e. Deployment - Multiple deployment 
    f. Tech stack - We can create multiple services for UI and we can also change the tech stack of it
    g. infra cost - high
    h. complexity - Easy
    i. Fault isolation - only that project will crash if some part will crash
    j. Testing - Testing in microservies is little tough
    k. Maintenance - easy to maintain
    l. Debugging - defficult to debug


Questions 
1. What is Waterfall Model
2. What is monolith and microservices


*/
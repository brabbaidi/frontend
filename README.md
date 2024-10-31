
### Title: Product Store
### Subtitle: A Full stack MERN Application
# Presented By: Bibata Rabba Idi
Product Store is an e-commerce application designed to allow users to browse, create, update, and delete products.
To deliver a seamless user experience for managing products in an online store environment, showcasing CRUD operations, user authentication, and real-time updates.
### Tech Stack: Built using the MERN stack (MongoDB, Express.js, React, Node.js) to handle both the frontend and backend seamlessly.
- Admins: 
  - Add, update, and delete products in the store.
  - Manage product details, including images, prices
- Customers: 
  - Browse available products with details on price 
  - View individual product pages for a more in-depth look.
  - Add items to a cart or wish list for future purchases.
-Future Users (e.g., authenticated users): 
    Personalized recommendations based on previous interactions.
    Access order history and manage account preferences.
Technical Functionality (High-Level)
   - RESTful API endpoints to handle CRUD operations for products.
   - Middleware for data validation and error handling.
   - CORS enabled for front-end-backend communication.

Database (MongoDB):
   - Data is stored in MongoDB, with a schema designed to store product details, user information, and order history.
   - Mongoose ORM for easy data manipulation and model validation.

Authentication: In the future
   - Basic user authentication for secure access, using JWTs or session tokens.
   - Secure routes for admin functionalities.
### Key Lessons Learned
- Full stack Integration: Improved understanding of how frontend and backend layers communicate, especially handling asynchronous requests and managing CORS issues.
- Code Modularity: Organizing the codebase into components, routes, controllers, and services helped maintain readability and scalability.
- Database Schema Design: Gained insights into structuring a database schema that efficiently serves app requirements and supports relational data.

### Future Enhancements
    - User Profiles & Authentication:
    -Add comprehensive user profiles with sign-up and login capabilities.
   -Include an admin dashboard for detailed product and order management.
   -Integrate a fully functional shopping cart.
   -Implement order placement and tracking, with payment gateway integration.
   - Add search functionality to help users quickly find products.
   - Include filtering options (e.g., by category, price range) for a better user experience.
   - Build an analytics dashboard for admins to monitor sales, user activity, and product popularity.




# Resources
 - Class Material
 - Youtube Video: https://www.youtube.com/watch?v=P43DW3HUUH8&t=22s

# Challenges
- Postman/MongoDB (404 error messages)

# Limited access to free e-commerce API's
- Used https://fakestoreapi.com/ because it is the only one I found

# Link to fronend site
https://bibata.netlify.app/

// filepath: backend/middlewares/requireAuth.js
export const requireAuth = (req, res, next) => {
    // Authentication logic here
    console.log('Authentication middleware triggered');
    next();
  };
  export default requireAuth; // Use ES module export
// src/auth.js
export const getUser = () => {
  // Simulated auth; replace with real logic
  return {
    isAuthenticated: false, // change to false for testing guest routes
    role: "admin", // "admin", "artist", "maker", or "guest"
  };
};

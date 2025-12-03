<<<<<<< HEAD
export type userRoles = "admin" | "trader";

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: userRoles;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
=======
export type roles = "admin" | "trader";
>>>>>>> 1b4ee87 (TSFP-51: Write Register component and add routes to configure react router dom to add route for register)

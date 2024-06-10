import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSession() {
  const userData = localStorage.getItem('user');

  if (userData) {
    try {
      const user = JSON.parse(userData);
      return {
        isLoggedIn: true,
        userData: user
      };
    } catch (error) {
      console.error('Error: ', error);
      return {
        isLoggedIn: false,
        userData: null
      };
    }
  }
  return {
    isLoggedIn: false,
    userData: null
  };
}

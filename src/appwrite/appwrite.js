// LocalStorage-based Authentication Service
// Completely replaces external Appwrite dependency to prevent ad-blocker blocks and network errors.

const USERS_STORAGE_KEY = "ss_safety_users";
const CURRENT_USER_STORAGE_KEY = "ss_safety_current_user";

function isBrowser() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

function getStoredUsers() {
  if (!isBrowser()) return [];
  try {
    const raw = window.localStorage.getItem(USERS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.warn("Failed to read users from localStorage:", err);
    return [];
  }
}

function saveUsers(users) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (err) {
    console.error("Failed to save users to localStorage:", err);
  }
}

export class AuthenticationService {
  isAvailable = true;

  // ✅ REGISTER
  async register({ name, email, pass }) {
    if (!isBrowser()) {
      throw new Error("Local storage is not available in this environment.");
    }

    if (!name || !name.trim()) {
      throw new Error("Full name is required.");
    }
    if (!email || !email.trim()) {
      throw new Error("Valid email is required.");
    }
    if (!pass || pass.length < 6) {
      throw new Error("Password must be at least 6 characters.");
    }

    const normalizedEmail = email.trim().toLowerCase();
    const users = getStoredUsers();

    const existingUser = users.find(
      (u) => u.email && u.email.toLowerCase() === normalizedEmail
    );

    if (existingUser) {
      throw new Error("An account with this email already exists. Please log in instead.");
    }

    const userId = "usr_" + Date.now() + "_" + Math.random().toString(36).substring(2, 8);
    const newUser = {
      $id: userId,
      name: name.trim(),
      email: normalizedEmail,
      pass: String(pass),
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    saveUsers(users);

    return {
      $id: newUser.$id,
      name: newUser.name,
      email: newUser.email,
    };
  }

  // ✅ LOGIN
  async login({ email, pass }) {
    if (!isBrowser()) {
      throw new Error("Local storage is not available in this environment.");
    }

    if (!email || !pass) {
      throw new Error("Email and password are required.");
    }

    const normalizedEmail = email.trim().toLowerCase();
    const users = getStoredUsers();

    const user = users.find(
      (u) => u.email && u.email.toLowerCase() === normalizedEmail && u.pass === String(pass)
    );

    if (!user) {
      throw new Error("Invalid email or password. Please check your credentials.");
    }

    const sessionUser = {
      $id: user.$id,
      name: user.name,
      email: user.email,
      loggedInAt: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(
        CURRENT_USER_STORAGE_KEY,
        JSON.stringify(sessionUser)
      );
    } catch (err) {
      console.error("Failed to save current session:", err);
    }

    return {
      $id: "session_" + Date.now(),
      userId: user.$id,
      ...sessionUser,
    };
  }

  // ✅ CURRENT USER
  async currentuser() {
    if (!isBrowser()) return null;

    try {
      const raw = window.localStorage.getItem(CURRENT_USER_STORAGE_KEY);
      if (!raw) return null;
      const user = JSON.parse(raw);
      if (user && user.email) {
        return user;
      }
      return null;
    } catch (err) {
      console.warn("Failed to get current user from localStorage:", err);
      return null;
    }
  }

  // ✅ LOGOUT
  async logout() {
    if (!isBrowser()) return true;

    try {
      window.localStorage.removeItem(CURRENT_USER_STORAGE_KEY);
      return true;
    } catch (err) {
      console.error("Failed to logout from localStorage:", err);
      return false;
    }
  }
}

const auths = new AuthenticationService();
export default auths;

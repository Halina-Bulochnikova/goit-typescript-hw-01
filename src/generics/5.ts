type UserRole = "admin" | "editor" | "guest";
type RoleDescription = Record<UserRole, string>;

const RoleDescription: RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
console.log(RoleDescription);

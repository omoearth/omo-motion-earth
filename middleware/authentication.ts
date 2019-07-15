const noAuthentication = [
  "register-id",
  "terms",
  "imprint",
  "login-id",
  "index",
  "privacy"
];
export default function({ store, redirect, route }) {
  if (!noAuthentication.includes(route.name) && !store.state.user) {
    return redirect("/");
  }
}

const noAuthentication = ["register-id", "login-id", "index"];
export default function({ store, redirect, route }) {
  if (!noAuthentication.includes(route.name) && !store.state.user) {
    return redirect("/");
  }
}

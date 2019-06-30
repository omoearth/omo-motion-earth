const noAuthentication = ["register-id", "login-id", "index"];
export default function({ store, redirect, route, nuxt }) {
  if (!noAuthentication.includes(route.name) && !store.state.auth) {
    return redirect("/");
  }
}

export default function ({route, redirect}) {
  if (route.fullPath === "/signup" || route.fullPath === "/signup/") {
    return redirect('/signup/first-name')
  }
  if (route.fullPath === "/travel" || route.fullPath === "/travel/") {
    return redirect('/travel/enter-route')
  }
  if (route.fullPath === "/login" || route.fullPath === "/login/") {
    return redirect('/login/email')
  }
}

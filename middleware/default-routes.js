export default function ({route, redirect}) {
  if (route.fullPath === "/app" || route.fullPath === "/app/") {
    return redirect('/app/enter-route')
  }
}

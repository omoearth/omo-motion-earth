<template>

  <div>
    <section class="columns">
      <div class="column is-two-thirds">
        <nuxt-child />
      </div>
      <div class="column">
        <aside class="menu sticky">
          <p class="menu-label">
            Steps
          </p>
          <ul class="menu-list">
            <li>
              <NuxtLink to="/signup/first-name">first name: {first name}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/signup/last-name">last name: {last name}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/signup/email">email: {email}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/signup/password">password: {accepted}</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/signup/accept-terms">terms & conditions: {accepted}</NuxtLink>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </div>

</template>

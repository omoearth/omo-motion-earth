<template>
   <div>
    <section class="columns">
      <div class="column is-two-thirds">
        <nuxt-child />
      </div>
      <div class="column sticky">
        <aside class="menu sticky">
          <p class="menu-label">
            Steps
          </p>
            <ul class="menu-list">
            <li>
              <NuxtLink to="/signup/first-name">email: {email}</NuxtLink>
            </li>
             <li>
              <NuxtLink to="/signup/password">password: {accpeted}</NuxtLink>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </div>
</template>

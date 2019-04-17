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
              <NuxtLink to="/travel/enter-route">enter start and destination</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel/open-vehicle">find and open the vehicle</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel/drive-vehicle">Drive to your destination</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel/park-vehicle">Park and lock the vehicle</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/travel/finish">Yeah! You made it! Still alive and healthy.</NuxtLink>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  </div>

</template>

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
            <li><a href="#start">email</a></li>
            <li><a href="#vehicle">password</a></li>
          </ul>
        </aside>
      </div>
    </section>
  </div>
</template>

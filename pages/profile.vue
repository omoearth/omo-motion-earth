<template>
  <div>
    <Navbar />
    <div class="columns">
      <div class="column">
        <section class="hero is-light">
          <div class="hero-body has-text-centered">
            <div class="container">
              <img src="@/assets/team/chuck.svg">
              <h1 class="title">
                Mister Chuck
              </h1>
              <h2 class="subtitle">
                MÜNCHEN
              </h2>
            </div>
          </div>
        </section>
      </div>
    </div>  

    <div class="container ">
      <div class="button">Choose your city</div>
      <div class="button">Invite friend</div>
     
      <br><br>

        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Leadership</p>
              <p class="title">25</p>
              <p class="sub">of 500</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Points</p>
              <p class="title">15</p>
              <p class="sub">best 65</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Invited Friends</p>
              <p class="title">5</p>
              <p class="sub">best 18</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Munich Rank</p>
              <p class="title">2.</p>
              <p class="sub">17 points to 1.</p>
            </div>
          </div>
          
        </nav>

        <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>City</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1.</th>
            <td>Mister Chuck</td>
            <td>Munich</td>
            <td>111</td>
          </tr>
          <tr>
            <th>2.</th>
            <td>Samuel </td>
            <td>Munich</td>
            <td>55</td>
          </tr>
          <tr>
            <th>3.</th>
            <td>Ade</td>
            <td>Munich</td>
            <td>22</td>
          </tr>
        </tbody>
      </table>
    </div>
  <CityList />
  </div>
</template>

<style scoped>

  img {
    border: 5px solid #fff;
    border-radius: 100%;
    background-color: #fefefe;
  }

  .sub {
    font-size: 1rem;
    color: lightgrey;
  }

</style>

<script>
  import Navbar from '~/components/Navbar'
  import CityList from '~/components/CityList'

  export default {
    data() {
      return {
      }
    },
    components: {
      Navbar,
      CityList
    },
    head() {
      return {
        bodyAttrs: {
          class: 'has-navbar-fixed-top'
        }
      }
    }
  }
</script>
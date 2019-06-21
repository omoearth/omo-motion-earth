<template>
  <div class="timeline">
    <div class="timeline-left">
      <img src="/demo/man01.png" />
      <div class="header-content">
        <h2><i class="fa fa-calendar" aria-hidden="true"></i> Today</h2>
      </div>
      <div class="content">
        <h3>John Addison</h3>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </div>
    </div>
    <div class="timeline-right">
      <img src="/demo/man02.png" />
      <div class="header-content">
        <h2><i class="fa fa-calendar" aria-hidden="true"></i> Yesterday</h2>
      </div>
      <div class="content">
        <h3>John Addison</h3>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </div>
    </div>
    <div class="timeline-left">
      <img src="/demo/man03.png" />
      <div class="header-content">
        <h2><i class="fa fa-calendar" aria-hidden="true"></i> July 14,2017</h2>
      </div>
      <div class="content">
        <h3>John Addison</h3>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </div>
    </div>
    <div class="timeline-right">
      <img src="/demo/man04.png" />
      <div class="header-content">
        <h2><i class="fa fa-calendar" aria-hidden="true"></i> Jun 14,2017</h2>
      </div>
      <div class="content">
        <h3>John Addison</h3>
        <p>
          Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum
          perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret
          expetendis his, te elit voluptua dignissim per, habeo iusto primis ea
          eam.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class OmoTimeline extends Vue {}
</script>

<style lang="scss" scoped>
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}
.timeline-left .header-content:after {
  content: " ";
  position: absolute;
  left: 0px;
  top: 40px;
  border-color: transparent;
  border-style: solid;
  border-width: 0px 20px 20px 0px;
  border-right-color: #e7db21;
}
.timeline-right .header-content:after {
  content: " ";
  position: absolute;
  right: 0px;
  top: 40px;
  border-color: transparent;
  border-style: solid;
  border-width: 0px 0px 20px 20px;
  border-left-color: #e56f57;
}
.timeline-left .header-content:before {
  content: " ";
  position: absolute;
  top: 0px;
  right: -40px;
  border: 20px solid transparent;
  border-left-color: #fec006;
}
.timeline-right .header-content:before {
  content: " ";
  position: absolute;
  top: 0px;
  left: -40px;
  border: 20px solid transparent;
  border-right-color: #ff7058;
}
.timeline-left .header-content,
.timeline-right .header-content {
  text-align: center;
  color: #fff;
  width: 97%;
  padding: 5px;
  height: 40px;
  background-color: #fec006;
  position: relative;
}
.timeline-right .header-content {
  background-color: #ff7058;
  margin-left: 18px;
}
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: white;
  top: 17px;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}
.timeline-right,
.timeline-left {
  padding: 10px 40px;
  position: relative;
  width: 50%;
}
.timeline-left img,
.timeline-right img {
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #fff;
  right: -25px;
  top: 7px;
  z-index: 1;
}
.timeline-right img {
  left: -25px;
}
.timeline-right {
  left: 50%;
}
.timeline-left .content,
.timeline-right .content {
  padding: 20px;
  background-color: #fff;
  position: relative;
  width: 90%;
  margin: 0px 0px 0px 20px;
}
.timeline-right .content {
  left: 15px;
  text-align: right;
}

@media (min-width: 320px) and (max-width: 360px) {
  .timeline-left img,
  .timeline-right img {
    left: 5px;
  }
  .timeline::after {
    left: 30px;
  }
  .timeline {
    width: 100%;
    padding-left: 0px;
    padding-right: 0px;
  }
  .timeline-left {
    width: 100%;
  }
  .timeline-right {
    width: 100%;
    left: 0px;
  }
  .timeline-left .header-content,
  .timeline-right .header-content {
    margin-left: 40px;
    width: 100%;
  }
  .timeline-right .content,
  .timeline-left .content {
    width: 80% !important;
    margin-left: 52px !important;
    left: 15px;
    text-align: left;
  }
  .timeline-left .header-content:before {
    right: unset;
    left: -40px;
    border: 20px solid transparent;
    border-right-color: #fec006;
  }
  .timeline-right .header-content:after {
    border-width: 0px 0px 30px 26px;
  }
  .timeline-left .header-content:after {
    content: " ";
    position: absolute;
    left: unset;
    right: 0px;
    top: 40px;
    border-color: transparent;
    border-style: solid;
    border-width: 0px 0px 30px 26px;
    border-left-color: #e7db21;
  }
}
@media (min-width: 640px) and (max-width: 768px) {
  .timeline-right .content {
    margin: 0px 0 0 4px;
  }
}
</style>

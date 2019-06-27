<template>
  <div>
    <div v-for="message in messages" :key="message.id">
      <div class="notification">{{ message.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({
  data() {
    return {
      messages: [
        {
          id: "124wrbetsrgsdf",
          sender: "Samuel",
          receiver: "",
          type: "notification",
          text: "Tom invited you to vote for Munich"
        },
        {
          id: "124wrbesdtsrgsdf",
          sender: "Samuel",
          receiver: "",
          type: "notification",
          text:
            "Welcome Greenfluencer, we are Chuck & Sam and we are locking forward to tranform with you Munich into a peacefully silent smart city of clean and interconnected mobility."
        },
        {
          id: "124wrbeasdftsrgsdf",
          sender: "Samuel",
          receiver: "",
          type: "notification",
          text: "Congratulations, you successfully voted for your city Munich."
        }
      ]
    };
  }
})
export default class OmoMessages extends Vue {}
</script>

<style lang="scss" scoped>
.notification {
  margin: 2rem;
  background: #ebeff5;
  font-weight: 400;
}
</style>

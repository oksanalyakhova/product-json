<template>
  <v-btn elevation="2" @click.native="downloadFile">
    Download
  </v-btn>
</template>

<script>
import vuetify from "@/plugins/vuetify";
import DateRepository from "@/repository/DateRepository";

export default {
  name: "DownloadButton",
  vuetify: vuetify,
  props: {
    products: {
      type: [Object, Array],
      default: null,
    }
  },
  methods: {
    downloadFile() {
      const today = DateRepository.get();
      const mapProducts = this.products.map((item) => {
        delete item.included;
        return item;
      });
      const products = JSON.stringify(mapProducts, null, 4);
      const blob = new Blob([products], { type: 'text/json' });
      const a = document.createElement('a');
      a.download = `${today}.json`;
      a.href = window.URL.createObjectURL(blob);
      const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      a.dispatchEvent(clickEvent);
      a.remove();
    },
  }
}
</script>

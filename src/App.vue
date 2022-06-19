<template>
  <v-app v-if="products.length" id="inspire">
    <v-container>
      <download-button :products="products" />
      <products-table :products="products" />
    </v-container>
  </v-app>
</template>

<script>
import vuetify from "@/plugins/vuetify";
import ProductService from "./service/ProductService";
import DownloadButton from "./components/DownloadButton";
import ProductsTable from "./components/ProductsTable.vue";

export default {
  name: 'App',
  vuetify: vuetify,
  components: {
    DownloadButton,
    ProductsTable,
  },
  data() {
    return {
      products: [],
    }
  },
  created() {
    ProductService.getProducts().then((res) => {
      const data = this.flatDeep(res.data, null, 15);
      this.products = data.filter((value, index, self) =>
          index === self.findIndex((findValue) => (
              findValue.id === value.id
          )
          ));
    });
  },
  methods: {
    flatDeep(arr, included, deep = 1) {
      if (deep > 0) {
        return arr.reduce((acc, val) => {
          if (included) {
            return acc.concat(Array.isArray(val.included) ? this.flatDeep(val.included, val, deep - 1) : val, included)
          } else {
            return acc.concat(Array.isArray(val.included) ? this.flatDeep(val.included, val, deep - 1) : val)
          }
        }, [])
      } else {
        return arr.slice();
      }
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

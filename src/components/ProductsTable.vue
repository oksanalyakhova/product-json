<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th
              v-for="(th, index) in thead"
              :key="index"
              class="text-left">
            {{ th }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
            v-for="(product, index) in products"
            :key="index"
            class="text-left">
        <td>{{ product.id }}</td>
        <td>{{ product.name }}</td>
        <td>{{ product.price / 100 }}</td>

        <td>
          <span v-if="product.included">Yes</span>
          <span v-else>No</span>
        </td>
      </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
import vuetify from "@/plugins/vuetify";

export default {
  name: "ProductsTable",
  vuetify: vuetify,
  props: {
    products: {
      type: Array,
      default: () => {},
    },
  },
  data() {
    return {
      thead: ['ID', 'Name', 'Price', 'Is package'],
    }
  },
}
</script>

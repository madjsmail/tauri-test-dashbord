import { defineStore } from 'pinia';

import Database from 'tauri-plugin-sql-api';
export const useDataStore = defineStore('data', {
  state: () => {
    return {
      allProduct: [],

    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async getAllProduct() {
      const db = await Database.load('mysql://madjidsmail:madjidsmail@localhost/wahab');

      const data = await db.select(`SELECT * FROM product`);
      this.allProduct = [...data];
      return data;
    },

  },

  getters: {









  },
});
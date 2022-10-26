<template>
  <div class="mt-4">
    <div class="p-6 bg-white rounded-md shadow-md">
      <h2 class="text-lg font-semibold text-gray-700 capitalize">
        Ajouter des {{ name }} Product id : {{ id }}
      </h2>

      <form @submit.prevent="submitProduct">
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
          <div>
            <label class="text-gray-700" for="entre">entre</label>
            <input
              required
              class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              type="text"
              v-model="newProduct.entre"
            />
          </div>
          <div>
            <label class="text-gray-700" for="sortie">sortie</label>
            <input
              required
              class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              type="text"
              v-model="newProduct.sortie"
            />
          </div>
          <div>
            <label class="text-gray-700" for="prix">prix</label>
            <input
              required
              class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              type="text"
              v-model="newProduct.prix"
            />
          </div>

          <div>
            <label class="text-gray-700" for="date">date</label>
            <input
              required
              class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
              type="date" name="date"  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"  min="1997-01-01"
              v-model="newProduct.date"
            />
          </div>
        </div>

        <div class="flex justify-end mt-4">
          <button
            class="px-4 py-2 text-gray-200 bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>

  <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
    <div class="inline-block min-w-full overflow-hidden rounded-lg shadow">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
            >
              Num
            </th>
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
            >
              Entrie
            </th>
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
            >
              sortie
            </th>
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
            >
              prix
            </th>
            <th
              class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
            >
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in product.value" :key="index">
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <div class="flex items-center">
                <div class="flex-shrink-0 w-10 h-10">
                  {{ 1 + index }}
                </div>
              </div>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p class="text-gray-900 whitespace-nowrap">{{ item.stockIN }}</p>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p class="text-gray-900 whitespace-nowrap">{{ item.stockOUT }}</p>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p class="text-gray-900 whitespace-nowrap">
                {{ item.price }}
              </p>
            </td>
            <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
              <p class="text-gray-900 whitespace-nowrap">
                {{ item || 'date' }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      <div
        class="flex flex-col items-center px-5 py-5 bg-white border-t xs:flex-row xs:justify-between"
      >
        <span class="text-xs text-gray-900 xs:text-sm"
          >Showing 1 to 4 of 50 Entries</span
        >

        <div class="inline-flex mt-2 xs:mt-0">
          <button
            class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-l hover:bg-gray-400"
          >
            Prev
          </button>
          <button
            class="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-300 rounded-r hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  onActivated,
  onBeforeMount,
  onMounted,
  reactive,
  ref,
} from '@vue/runtime-core';

import Database from 'tauri-plugin-sql-api';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = route.query.id?.toString();
const name = route.query.name?.toString();

const temp = ref([]);
const product = ref([]);

onBeforeMount(async () => {
  console.log('befor' + route);
  temp.value = await getProductStock(name);
});

onMounted(() => {
  console.log('on');
  product.value = temp;
});

async function getProductStock(productName) {
  console.log(productName);
  const db = await Database.load(
    'mysql://madjidsmail:madjidsmail@localhost/wahab'
  );
  const data = await db
    .select(
      `
  SELECT actionDate,  name,   stockIN,   stockOUT,   price  
  FROM   stock,   product 
  where   product.name = '${productName}'   and product.productID = stock.productID
  ORDER BY actionDate DESC
  `
    )
    .catch((err) => {
      console.log('err');
    });

  return data;
}

const newProduct = ref({
  entre: '',
  sortie: '',
  prix: '',

  date: '',
});

async function submitProduct(params) {
  console.log(newProduct.value);
  const db = await Database.load(
    'mysql://madjidsmail:madjidsmail@localhost/wahab'
  );
  const data = await db.select(`
  INSERT INTO stock (productID,stockIN,stockOUT,price,actionDate) 
  VALUE (${id},'${newProduct.value.entre}','${newProduct.value.sortie}','${newProduct.value.prix}','${newProduct.value.date}') ;
  `);

  temp.value = await getProductStock(name);
  product.value = temp;

  newProduct.value = ref();
}
</script>

<style></style>

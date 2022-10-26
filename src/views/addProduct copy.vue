<template>

 <div class="mt-8"> 
      <h4 class="text-gray-600">Forms</h4>

      <div class="mt-4">
        <div class="p-6 bg-white rounded-md shadow-md">
          <h2 class="text-lg font-semibold text-gray-700 capitalize">
            Ajouter des {{name}}
          </h2>

          <form @submit.prevent="register">
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
              <div>
                <label class="text-gray-700" for="quantite">quantities</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  v-model="data.quantite"
                />
              </div>

              <div>
                <label class="text-gray-700" for="prix"
                  >prix</label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  v-model="data.prix"
                />
              </div>

              <div>
                <label class="text-gray-700" for="statu">statu</label>
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="text"
                  v-model="data.statu"
                />
              </div>

              <div>
                <label class="text-gray-700" for="date"
                  >date</label
                >
                <input
                  class="w-full mt-2 border-gray-200 rounded-md focus:border-indigo-600 focus:ring focus:ring-opacity-40 focus:ring-indigo-500"
                  type="date"
                  v-model="data.date"
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
      <div class="mt-8">


      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">{{name}}</h2>

        <div class="flex flex-col mt-3 sm:flex-row">
          <div class="flex">
            <div class="relative">
              <select
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border border-gray-400 rounded-l appearance-none focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option>5</option>
                <option>10</option>
                <option>20</option>
              </select>

              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>

           <div class="relative">
              <select
                class="block w-full h-full px-4 py-2 pr-8 leading-tight text-gray-700 bg-white border-t border-b border-r border-gray-400 rounded-r appearance-none sm:rounded-r-none sm:border-r-0 focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
              >
                <option>All</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <div
                class="absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 pointer-events-none"
              >
                <svg
                  class="w-4 h-4 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div class="relative block mt-2 sm:mt-0">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                class="w-4 h-4 text-gray-500 fill-current"
              >
                <path
                  d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
                />
              </svg>
            </span>

            <input
              placeholder="Search"
              class="block w-full py-2 pl-8 pr-6 text-sm text-gray-700 placeholder-gray-400 bg-white border border-b border-gray-400 rounded-l rounded-r appearance-none sm:rounded-l-none focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div
            class="inline-block min-w-full overflow-hidden rounded-lg shadow"
          >
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
                  quantite
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                  prix
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                  date
                  </th>
                  <th
                    class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in store[name]" :key="index">
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <div class="flex items-center">
                      <div class="flex-shrink-0 w-10 h-10">
                            {{1+index}}
                      </div>
                    </div>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">{{  item.quantite }}</p>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ item.prix }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ item.date }}
                    </p>
                  </td>
                  <td
                    class="px-5 py-5 text-sm bg-white border-b border-gray-200"
                  >
                    <p class="text-gray-900 whitespace-nowrap">
                      {{ item.statu }}
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
      </div>
    </div>


    </div> -->
    <h1>
      madjid
    </h1>
</template>

<script setup lang="">
// import { defineComponent, onBeforeMount, ref } from "vue";
// import { useRoute, useRouter } from "vue-router";
// import  {useDataStore}  from "../stores/data";
// import { useTableData } from "../hooks/useTableData";

// const store = useDataStore()






// interface data {
//   quantite: string;
//   prix: string;
//   statu: string;
//   date: string;
// }

// const data = ref<data>({
//   quantite: "",
//   prix: "",
//   statu: "",
//   date: "",
// });

// // const register = () => {
// //   const temp = JSON.parse(JSON.stringify(data.value));
// //   console.log("Registered: ", temp);
// //   store.addToState(temp)
// // };

// const router = useRouter()
//     const route = useRoute()
// const name = route.query.id?.toString()
//     console.log(route.query.id);
    
// const register = () => {
//   const temp = JSON.parse(JSON.stringify(data.value));
//   console.log("Registered: ", temp);
//   store.addToState(name,temp)
// };


// const {
//   simpleTableData,
//   paginatedTableData,
//   wideTableData,
// } = useTableData();



</script>


<style>

</style>
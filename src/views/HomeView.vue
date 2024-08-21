<template>
  <div class="bg-info-subtle">
    <div class="container ">
      <div class="min-vh-100 d-flex justify-content-center align-items-center flex-column">
        <h1 class="pb-3">
          Welcome!
        </h1>
        <h3 class="pb-2">
          <router-link to="/news-site">Click here to read news.</router-link>
        </h3>
        <h3 class="pb-2">
           <router-link :to="{name:'weather'}">Click here to view weather forecast.</router-link>
        </h3>
        <h3 class="pb-2">
           <router-link :to="{name:'coins'}">Click here to view blockchain.</router-link>
        </h3>
        <h3 class="pb-2">
           <router-link :to="{name:'bible'}">Click here to see God's word.</router-link>
        </h3>
        
      </div>
    </div>
  </div>
</template>
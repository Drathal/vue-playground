<template>
  <!--
    REQUIRED
    The nuxt-container component is the container of your Vue.js application
    Nuxt replace automatically the nuxt-container component by <div id="_app"></div>
  -->
  <nuxt-container>
    <!--
      REQUIRED
      The nuxt component contains the content of your current page.
      Nuxt replace automatically the nuxt component by <router-view></router-view>
    -->
    <nuxt/>
    <!--
      Example : This footer will be display on every routes.
    -->
    <my-footer/>
  </nuxt-container>
</template>

<script>
import MyFooter from '~components/Footer.vue'

export default {
  components: {
    MyFooter
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: #3B8070;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #3B8070;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #3B8070;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2em;
  margin: 0;
}
</style>

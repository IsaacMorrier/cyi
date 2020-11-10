<script lang="ts">
    export let icon, width;
</script>

<style lang="scss">
  img {
      height: 100%;
      width: 100%;
  }
</style>

<div style="width: {width}; height: auto; display: inline-block;"> 
  <img alt="{icon} icon" src="/icons/{icon}.svg">
</div>
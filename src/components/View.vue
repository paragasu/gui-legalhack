<template>
<div class="ma-4">
  <div>
    <div class="title"> Vendor </div>
    <div> Name {{ sharedState.vendor.name }} </div>
    <div> Nric No {{ sharedState.vendor.name }} </div>
    <div> Income Tax No {{ sharedState.vendor.name }} </div>
    <div> Address {{ sharedState.vendor.name }} </div>
    <div> Contact / Email {{ sharedState.vendor.name }} </div>
    <div> Email {{ sharedState.vendor.name }} </div>
  </div>
  <div class="mt-4">
  <div class="title"> Purchaser </div>
    <div> Name {{ sharedState.purchaser.name }} </div>
    <div> Nric No {{ sharedState.purchaser.name }} </div>
    <div> Income Tax No {{ sharedState.purchaser.name }} </div>
    <div> Address {{ sharedState.purchaser.name }} </div>
    <div> Contact / Email {{ sharedState.purchaser.name }} </div>
    <div> Email {{ sharedState.purchaser.name }} </div>
  </div>
  <div>
  <div class="title mt-4"> Property </div>
    <div> Property {{ sharedState.property.name }} </div>
    <div> Description {{ sharedState.property.remarks }} </div>
  </div>
  <div>
  <div class="title mt-4"> Documents </div>
    <div> 
      <a target="_blank" href="https://lawframe-development.herokuapp.com/documents/10.pdf'"> Borang 16-N </a> <br/>
      <a target="_blank" href="https://lawframe-development.herokuapp.com/documents/11.pdf'"> Borang 14-A </a> <br/>
      <a target="_blank" href="https://lawframe-development.herokuapp.com/documents/12.pdf'"> Profile </a> <br/>
      <a target="_blank" href="https://lawframe-development.herokuapp.com/documents/13.pdf'"> Sales and purchase agreement </a> <br/>
    </div>
  </div>
  <div>
  <div class="title mt-4"> Workflows </div>
  </div>
</div>
</template>

<script>
import store from './../store'
export default {
  data(){
    return {
      sharedState: store.state
    }
  },

  created(){
    console.debug('sharedstate', JSON.parse(JSON.stringify(this.sharedState)))
  }
}
</script>

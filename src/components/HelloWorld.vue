<template>
  <div class="ma-4">
    <v-stepper v-model="el">
      <v-stepper-header>
        <v-stepper-step step="1" :complete="el > 1"> Vendors </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="2" :complete="el > 2"> Purchasers </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="3" :complete="el > 3"> Solicitors </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="4" :complete="el > 4"> Property </v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step step="5" :complete="el > 5"> Generate Docs </v-stepper-step>
      </v-stepper-header>

    <v-stepper-items>      
      <v-stepper-content step="1">
      <v-form ref="form1" >
      <v-container>
      <v-layout wrap> 

      <v-flex md6>
      <v-autocomplete
        outline
        v-model="vendor.name"
        class="mr-4"
        :rules="[ required ]"
        :items="['John Doe', 'Melissa Wong']"
        @change="changeVendor"
        label="Name" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        :rules="[ required ]"
        v-model="vendor.identity_number"
        label="Nric No. / Co No." />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        v-model="vendor.income_tax_number"
        :rules="[ required ]"
        class="mr-4"
        label="Income Tax No." />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        :rules="[ required ]"
        v-model="vendor.address"
        label="Address / Registered Office" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        v-model="vendor.contact"
        class="mr-4"
        :rules="[ required ]"
        label="Contact" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        v-model="vendor.email"
        :rules="[ required ]"
        label="Email" />
      </v-flex>

      </v-layout>
      </v-container>
      </v-form>
      </v-stepper-content>
      <v-stepper-content step="2">
      <v-form ref="form2">

      <v-container>
      <v-layout wrap> 
      <v-flex md6>
      <v-autocomplete
        outline
        class="mr-4"
        v-model="purchaser.name"
        :items="['Lee Kee Sing', 'Gopal Baba']"
        :rules="[ required ]"
        @change="changePurchaser"
        label="Name" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        v-model="purchaser.identity_number"
        :rules="[ required ]"
        label="Nric No. / Co No." />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        class="mr-4"
        :rules="[ required ]"
        v-model="purchaser.income_tax_number"
        label="Income Tax No." />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        v-model="purchaser.address"
        :rules="[ required ]"
        label="Address / Registered Office" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        class="mr-4"
        :rules="[ required ]"
        v-model="purchaser.contact"
        label="Contact" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        v-model="purchaser.email"
        :rules="[ required ]"
        label="Email" />
      </v-flex>

      </v-layout>
      </v-container>
      </v-form>
      </v-stepper-content>

      <v-stepper-content step="3">
      <v-form ref="form3">
      <v-container>
      <v-layout wrap>
      <v-flex md6>
      <v-autocomplete
        outline
        class="mr-4"
        :items="['Manan John', 'Maya Lee']"
        @change="changeVendorSolicitor"
        :rules="[ required ]"
        v-model="vendor_solicitor.name"
        label="Vendor's solicitors Name" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        :rules="[ required ]"
        v-model="vendor_solicitor.ic"
        label="Vendor's solicitors IC" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        class="mr-4"
        :rules="[ required ]"
        v-model="vendor_solicitor.contact"
        label="Vendor's Solicitor Contact" />
      </v-flex>

      <v-flex md6>
      <v-autocomplete
        outline
        :rules="[ required ]"
        :items="['Manan John', 'Maya Lee']"
        @change="changePurchaserSolicitor"
        v-model="purchaser_solicitor.name"
        label="Purchaser's solicitors Name" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        :rules="[ required ]"
        v-model="purchaser_solicitor.ic"
        class="mr-4"
        label="Purchaser's solicitors IC" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        :rules="[ required ]"
        v-model="purchaser_solicitor.contact"
        label="Purchaser's Solicitor Contact" />
      </v-flex>
      
      </v-layout>
      </v-container>
      </v-form>
      </v-stepper-content>

      <v-stepper-content step="4">
      <v-form ref="form4">
      <v-container>
      <v-layout wrap>
      <v-flex md6>
      <v-text-field
        outline
        class="mr-4"
        :rules="[ required ]"
        v-model="property.property"
        label="Property Address" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        :rules="[ required ]"
        v-model="property.address"
        label="Assessment Address" />
      </v-flex>

      <v-flex md6>
      <v-text-field
        outline
        :rules="[ required ]"
        class="mr-4"
        v-model="property.description"
        label="Description of the charge or encumbrance" />
      </v-flex>
      
      </v-layout>
      </v-container>
      </v-form>
      </v-stepper-content>


      <v-stepper-content step="5">
        <v-form ref="form6">
        <v-container>
          <v-flex>
            <v-checkbox v-model="template_names" value="Profile" label="Profile" />
            <v-checkbox v-model="template_names" value="Borang-14-A" label="Borang 14 A" />
            <v-checkbox v-model="template_names" value="Borang-16-N" label="Borang 16 N" />
            <v-checkbox v-model="template_names" value="SaleAndPurchaseAgreement" label="Sale And Purchase Agreement" />
            <v-checkbox v-model="template_names" value="Receipt" label="Receipt" />
          </v-flex>
        </v-container> 
        </v-form>
      </v-stepper-content>
    </v-stepper-items>      
    </v-stepper>


    <v-container>
      <v-layout align-content-end justify-end row>
        <v-flex>
          <v-btn color="primary" @click.stop="next()"> Save &amp; Next </v-btn>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
import { post } from './../api'
import store from './../store'

export default {
    data(){
      return {
        sharedState: store.state,
        vendor: {},
        purchaser: {},
        property: {},
        vendor_solicitor: {},
        purchaser_solicitor: {},
        post_results: {},
        template_names: [],
        el: 1,
        required: v => !!v || 'Required'
      }
    },

    methods:{
      next(){
        
        if(this.el === 4){
          //submit
          let data = {
            vendor: this.vendor,
            purchaser: this.purchaser,
            vendor_solicitor: this.vendor_solicitor,
            purchaser_solicitor: this.purchaser_solicitor,
            property: this.property
          }

          console.debug('submit', this.data)

          post('/profiles/create.json', data, (err, res) => {
            console.debug('create result', JSON.parse(JSON.stringify(res)))
            this.post_results = res
            this.sharedState.post_result = res
            this.sharedState.data = data
          })
        }

        if(this.el === 5){
          this.el = 0
          console.debug('documents', this.template_names, 'results', this.post_results)
          let params = {
            document: {
              stage: "",
              document_path: "",
              template_names: this.template_names,
              vendor_id: this.post_results.vendor,
              vendor_solicitor_id: this.post_results.vendor_solicitor,
              purchaser_id: this.post_results.purchaser,
              purchaser_solicitor_id: this.post_results.purchaser_solicitor,
              property_id: this.post_results.property
            }
          }

          //submit docs
          post('/documents/create_multiple.json', params, (err, res) => {
            console.debug('result', err || res)
            this.sharedState.documents = res
            this.$router.push({ path: '/gui-legalhack/docs/#/view' })
            
          })
        }

        if(this.el < 6){
          let id = 'form' + this.el
          if(this.$refs[id] && this.$refs[id].validate()){
            this.el++
          }
        }
      },

      changeVendor(){
        this.vendor = {
          identity_number: '840424-12-8383',
          income_tax_number: 'E84848',
          address: 'Jalan Tun Razak, Kuala Lumpur',
          contact: '0128447488',
          email: 'john@doe.com'
        }
      },

      changePurchaser(){
        this.purchaser = {
          identity_number: '840424-12-5555',
          income_tax_number: 'E4444',
          address: 'Jalan Something, Kuala Lumpur',
          contact: '0138447488',
          email: 'melissa@wong.com'
        }
      },

      changeVendorSolicitor(){
        this.vendor_solicitor = {
          ic: '880284-12-3838',
          contact: 'sarah@lee.com'          
        }
      },

      changePurchaserSolicitor(){
        this.purchaser_solicitor = {
          ic: '920284-12-3838',
          contact: 'vincent@wong.com'          
        }
      }
    }
}
</script>

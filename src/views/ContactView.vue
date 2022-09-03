<template>
  <div class="operational-diversification">
    <section class="w-100">
      <img :src="require(`@/assets/images/bg-1.webp`)" alt="Image">
      <b-container class="pt-5 pb-4">
        <b-row>
          <b-col>
            <b-card border-variant="light" class="p-3 mb-4 contact-form mx-auto">
              <h3>Llene el siguiente formulario:</h3>
              <br>
              <b-form @submit="onSubmit">
                <b-form-group id="input-group-1" label="Your Name:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.fillname"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Email:" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    type="email"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-3" label="Phone:" label-for="input-3">
                  <b-form-input
                    id="input-3"
                    v-model="form.phone"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-4" label="Your Company's Name:" label-for="input-4">
                  <b-form-input
                    id="input-4"
                    v-model="form.enterprise"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-5" label="How can we help you?" label-for="input-5">
                  <b-form-textarea
                    id="input-5"
                    v-model="form.about"
                    rows="3"
                    max-rows="6"
                  ></b-form-textarea>
                </b-form-group>
                <b-form-group class="text-right">
                  <b-button type="submit" squared variant="primary">Submit ></b-button>
                </b-form-group>
              </b-form>
            </b-card>
          </b-col>
          <b-col>
            <b-card class="p-3" style="background-color: black;">
              <h3 style="color: var(--primary);">{{ $t('surya') }}</h3>
              <hr class="ml-0" style="border-color: var(--primary);">
              <small style="color: white;">
                <b>Address:</b><br>
                Aquilino de La Guardia Street, Ocean Business Plaza, 14th Floor. Marbella, Panama.
                <br>
                <br>
                <b>Email:</b><br>
                info@suryastarholding.com<br>
                www.suryastarholding.com
              </small>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
export default {
  name: 'OperationalDiversificationView',
  data() {
    return {
      form: {
        fullname: '',
        email: '',
        phone: '',
        enterprise: '',
        about: ''
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    }
  }
}
</script>
<style lang="scss" scoped>
.operational-diversification section {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F5F5F5;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  img {
    position: absolute;
    min-height: 105%;
    min-width: 105%;
    filter: blur(1rem) brightness(.9);
    @media only screen and (max-width: 768px) {
      position: relative;
      display: inline-block;
      min-height: 0;
      min-width: 0;
      width: 100%;
    filter: blur(0) brightness(1);
    }
  }
}
</style>

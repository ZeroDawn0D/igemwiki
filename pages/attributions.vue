<template>
  <div>
    <div class = "">
      <div class = "courierprimebold h-64 w-screen text-black font-bold text-9xl max-md:text-6xl max-md:h-32">
        ATTRIBUTIONS
      </div>
    </div>

  
  <iframe
    style='width: 100%'
    id="igem-attribution-form"
    src="https://attributions.igem.org?team=IISc-Bengaluru&year=2023"
  >
  </iframe>



  </div>
</template>

<script>
export default {
    data() {
        return {
            currentPage: "attributions"
        };
    },
    methods:{
    },
    mounted(){
      window.addEventListener('message', function (e) {
      const {type, data} = JSON.parse(e.data);
      console.log("data: " + data)
      if (type === 'igem-attribution-form') {
        const element = document.getElementById('igem-attribution-form')
        element.style.height = data  + 50 + 'px'
      }
      });
  
    }
}
</script>
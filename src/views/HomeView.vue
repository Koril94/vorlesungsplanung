<template>
  <div
    id="carouselExampleInterval"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="3000">
        <img
          class="d-block w-100"
          src="../assets/images/Gebaude.png"
          alt="First slide"
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img
          class="d-block w-100"
          src="../assets/images/Girl_Buch.png"
          alt="Second slide"
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img
          class="d-block w-100"
          src="../assets/images/Girl_Laptop.png"
          alt="First slide"
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img
          class="d-block w-100"
          src="../assets/images/Head.png"
          alt="First slide"
        />
      </div>
      <div class="carousel-item" data-bs-interval="3000">
        <img
          class="d-block w-100"
          src="../assets/images/room.png"
          alt="First slide"
        />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleInterval"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script>
export default {
  setup() {},
  mounted() {
    let button = document.querySelector('.carousel-control-next');
    setInterval(() => {
        button.click();
    }, 5000);
    
  }
};
</script>

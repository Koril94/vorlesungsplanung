<script setup>
import { RouterLink, RouterView } from "vue-router";
import { store } from "./store";
</script>

<template>
  <header class="bg-dark">
    <div class="container">
      <div id="nav ">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid text-primary">
            <a class="navbar-brand" href="#">Uniplaner</a>
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="navbar-nav mr-auto">
                <RouterLink class="nav-link" to="/">Home</RouterLink>
                <RouterLink class="nav-link" to="/dashboard"
                  >Dashboard</RouterLink
                >
                <RouterLink class="nav-link" to="/studyProgram"
                  >Studiengang</RouterLink
                >
                <RouterLink class="nav-link" to="/lecturer">Dozent</RouterLink>
                <RouterLink class="nav-link" to="/studyClass"
                  >Studienjahrgang</RouterLink
                >
                <RouterLink class="nav-link" to="/semester"
                  >Semester</RouterLink
                >
                <RouterLink class="nav-link" to="/lecture"
                  >Vorlesung</RouterLink
                >
                <RouterLink class="nav-link" to="/lectureDate"
                  >Vorlesungstermin</RouterLink
                >
                <!-- <RouterLink to="/about">About</RouterLink> -->
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <RouterView />

  <!-- Footer -->
<footer class="text-center text-lg-start bg-dark text-muted pt-2">

  <!-- Section: Links  -->
  <section class="">
    <div class="container text-center text-md-start mt-5">
      <!-- Grid row -->
      <div class="row mt-3">
        <!-- Grid column -->
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <!-- Content -->
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>Ersteller
          </h6>
          <p>
            Eugen Fegler, Nikolai Beck, Sven Neubauer, Jens Hauner
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Hilfsmittel
          </h6>
          <p>
            <a href="#!" class="text-reset">HTML</a>
          </p>
          <p>
            <a href="#!" class="text-reset">CSS</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Vue</a>
          </p>
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Schon gesehen?
          </h6>
          <p>
            <a href="#!" class="text-reset">Einstellungen</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Hilfe</a>
          </p>
          <p>
            <a href="#!" class="text-reset">Impressum</a>
          </p>
         
        </div>
        <!-- Grid column -->

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <!-- Links -->
          <h6 class="text-uppercase fw-bold mb-4">
            Kontakt
          </h6>
          <p><i class="fas fa-home me-3"></i> Berlin, BE, Germany</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            email@email.email
          </p>
          <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
  </section>
  <!-- Section: Links  -->
</footer>
<!-- Footer -->
</template>

<style>
/* @import "@/assets/base.css"; */
/* @import "@/assets/css/bootstrap.min.css"; */
@import "@/assets/css/main.css";
</style>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { store } from "./store";
</script>

<template>
  <header>
    <div id="nav ">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid ">
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
              <RouterLink class="nav-link" to="/lecture">Vorlesung</RouterLink>
              <RouterLink class="nav-link" to="/lectureDate"
                >Vorlesungstermin</RouterLink
              >
              <RouterLink class="nav-link" to="/semester">Semester</RouterLink>
              <!-- <RouterLink to="/about">About</RouterLink> -->
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
  <div class="content">
    <RouterView />
  </div>
</template>

<style>
/* @import "@/assets/base.css"; */
@import "@/assets/css/bootstrap.min.css";
@import "@/assets/css/main.css";
</style>

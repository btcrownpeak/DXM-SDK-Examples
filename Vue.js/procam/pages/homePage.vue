<template>
  <div v-if="isLoaded">
    <header>
      <nav id="primaryNavContainer" class="navbar navbar-expand-md">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-3">
              <a class="navbar-brand" href="#" aria-label="Procam logo link to home page">
                <img src="https://s3.surety.financial.cprd.io/Skunks-Works/ProCam-React-SDK/_Assets/images/logo.svg" alt="Procam"/>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse"
                      data-target="#navigationContent"
                      aria-controls="navigationContent" aria-expanded="false"
                      aria-label="Toggle navigation">
                <span class="navbar-toggler-line"></span>
                <span class="navbar-toggler-line"></span>
                <span class="navbar-toggler-line"></span>
                <i aria-hidden="true" class="fas fa-times"></i>
              </button>
            </div>
            <div class="col-md-5">
              <HeaderNavigation :dataProvider="this.cmsDataProvider" />
            </div>
            <div class="utilities col-md-4 d-none d-lg-block">
              <a class="utilities-item" href="#" aria-label="Vist Instagram">
                <i aria-hidden="true" class="fab fa-instagram"></i>
              </a>
              <a class="utilities-item" href="#" aria-label="Vist Twitter">
                <i aria-hidden="true" class="fab fa-twitter"></i>
              </a>
              <a class="utilities-item" href="#" aria-label="Vist Facebook">
                <i aria-hidden="true" class="fab fa-facebook"></i>
              </a>
              <a class="language-control utilities-sm-nav-item" aria-label="Change language" href="#">
                <i aria-hidden="true" class="fas fa-globe-americas"></i>
              </a>
              <a class="login-register utilities-item" aria-label="Login/Register" href="#">
                <i class="fas fa-user"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <main id="main-content" className="main-content" role="main" aria-label="main content">
      <div className="cp-main-container">
        <HomeHero/>
        <ImagePanel/>
        <Products/>
        <TwoBluePanels/>
        <DropZone name="droppable"/>
      </div>
    </main>
    <footer class="full-width bg-dark-blue">
      <div class="container-fluid">
        <div class="row footer-nav justify-content-between">
          <div class="col-md-3">
            <h3 class="foot-head">Contact Us</h3>
            <ul class="foot-links">
              <li><a class="foot-link" href="tel:">+44 345 678 903</a></li>
              <li><a class="foot-link" href="mailto:">procam@mail.com</a></li>
              <li><a class="foot-link" href="#">Find a Store</a></li>
            </ul>
          </div>
          <div class="col">
            <h3 class="foot-head">Services</h3>
            <ul class="foot-links">
              <li><a class="foot-link" href="#">Contact Us</a></li>
              <li><a class="foot-link" href="#">Ordering &amp; Payment</a></li>
              <li><a class="foot-link" href="#">Shipping</a></li>
              <li><a class="foot-link" href="#">Returns</a></li>
              <li><a class="foot-link" href="#">FAQ</a></li>
            </ul>
          </div>
          <div class="col">
            <h3 class="foot-head">Information</h3>
            <ul class="foot-links">
              <li><a class="foot-link" href="#">About Procam</a></li>
              <li><a class="foot-link" href="#">Work With US</a></li>
              <li><a class="foot-link" href="#">Privacy Policy</a></li>
              <li><a class="foot-link" href="#">Terms &amp; Conditions</a></li>
              <li><a class="foot-link" href="#">Press Enquiries</a></li>
            </ul>
          </div>
          <div class="col-md-3 footer-social">
            <div class="float-lg-right">
              <a href="https://www.instagram.com">
                <i aria-hidden="true" class="fab fa-instagram"></i>
              </a>
              <a href="https://twitter.com/">
                <i aria-hidden="true" class="fab fa-twitter"></i>
              </a>
              <a href="https://www.facebook.com">
                <i aria-hidden="true" class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col footer-disclaimer">
            <p class="disclaimer">&copy; Procam 2020</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import Vue from 'vue';
import {CmsDynamicDataProvider, CmsDynamicPage, CmsStaticPage} from 'crownpeak-dxm-vuejs-sdk';
import HomeHero from "../components/procam/homeHero.vue";
import ImagePanel from "../components/procam/imagePanel.vue";
import Events from "../components/procam/events.vue";
import Products from "../components/procam/products.vue";
import TwoBluePanels from "../components/procam/twoBluePanels.vue";
import DropZone from "../components/functional/dropZone.vue";
import HeaderNavigation from "../components/procam/global/headerNavigation";

export default {
  extends: CmsDynamicPage,
  name: "HomePage",
  components: {
    HomeHero,
    ImagePanel,
    Events,
    Products,
    TwoBluePanels,
    DropZone,
    HeaderNavigation
  },
  cmsWrapper: "ProCam",
  cmsUseTmf: false,
  cmsSuppressModel: true,
  cmsSuppressFolder: true
};
</script>

<template>
  <div class="service">
    <div class="section-header">
      <p>What we do</p>
      <h2>Our Expertise Services</h2>
    </div>

    <div class="row q-col-gutter-xs">
      <div
        class="col-3 col-sm-4 col-xs-12"
        v-for="service in services"
        :key="service.id"
      >
        <ServiceComponent
          :title="service.title"
          :description="service.description"
          :icon="service.icon"
          :link="service.link"
        />
      </div>
    </div>
    <!-- <router-link class="btn" to="/practise-areas">All Our Services</router-link> -->
  </div>
</template>

<script setup>
import ServiceComponent from "./ServiceComponent.vue";
const services = [
  {
    id: 1,
    title: "Criminal Defense",
    description:
      "Experienced lawyers handling complex criminal cases with diligence and expertise.",
    icon: "gavel",
    link: "/services/criminal-defense",
  },
  {
    id: 2,
    title: "Civil Litigation",
    description:
      "Professional representation in civil disputes, protecting your rights in and out of court.",
    icon: "account_balance",
    link: "/services/civil-litigation",
  },
  {
    id: 3,
    title: "Mediation Services",
    description:
      "Resolving conflicts efficiently through skilled mediation, avoiding lengthy court processes.",
    icon: "handshake",
    link: "/services/mediation",
  },
  {
    id: 4,
    title: "Estate Planning",
    description:
      "Plan your legacy and protect your assets with comprehensive estate planning services.",
    icon: "assignment",
    link: "/services/estate-planning",
  },
  {
    id: 5,
    title: "Contract Law",
    description:
      "Expert guidance and representation in contract drafting, review, and enforcement.",
    icon: "description",
    link: "/services/contract-law",
  },
  {
    id: 6,
    title: "Family Law",
    description:
      "Compassionate and skilled assistance in family law matters, including divorce and custody.",
    icon: "family_restroom",
    link: "/services/family-law",
  },
];
</script>

<style scoped>
.service {
  position: relative;
  width: 100%;
  padding: 45px 0 15px 0;
  align-items: center;
}

.service .service-item {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  padding: 30px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

.service .service-item:hover {
  border-color: transparent;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}

q-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.service .service-item h3 {
  margin-bottom: 10px;
  font-size: 22px;
  font-weight: 300;
  letter-spacing: 1px;
}

.service .service-item p {
  margin-bottom: 10px;
  font-size: 16px;
}

.service .service-item a {
  position: relative;
  font-size: 16px;
  color: #0796fe;
  transition: 0.3s;
}

.service .service-item a::after {
  content: "";
  position: absolute;
  width: 80%;
  height: 2px;
  bottom: -3px;
  left: 10%;
  background: #0796fe;
}

.service .service-item:hover a.btn {
  color: #092a49;
  background: #1d2434;
  border-color: #1d2434;
}

/* .service a.btn {
  position: relative;
  margin: 30px auto;
  padding: 12px 25px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #092a49;
  border: 2px solid #092a49;
  border-radius: 0;
  background: none;
  transition: 0.3s;
}

.service a.btn:hover {
  color: #0796fe;
  background: #092a49;
} */
</style>

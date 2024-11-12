<template>
  <div class="page-header">
    <div>
      <div class="row">
        <div class="col-12">
          <h2>{{ formattedRouteName }}</h2>
        </div>
        <div class="col-12">
          <q-breadcrumbs gutter="md" align="center">
            <q-breadcrumbs-el label="Home" to="/" />
            <q-breadcrumbs-el
              v-for="(breadcrumb, index) in getBreadcrumbInfo"
              :key="index"
              :label="breadcrumb.label"
              :to="breadcrumb.path"
            />
          </q-breadcrumbs>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

// Function to add space before capitalized letters
const addSpaceBeforeCaps = (str) => {
  return str.replace(/([A-Z])/g, " $1").trim();
};

// Get and format the route name for page header
const routeName = computed(() => route.name);
const formattedRouteName = computed(() =>
  addSpaceBeforeCaps(routeName.value || ""),
);

// Split the route path into segments
const breadcrumbSegments = computed(() =>
  route.path.split("/").filter((segment) => segment),
);

// Function to generate the path and label for each breadcrumb link
const getBreadcrumbInfo = computed(() => {
  return breadcrumbSegments.value.map((segment, index) => {
    const path = "/" + breadcrumbSegments.value.slice(0, index + 1).join("/");
    const resolvedRoute = router.resolve(path);
    return {
      path,
      label: resolvedRoute.name
        ? addSpaceBeforeCaps(resolvedRoute.name)
        : addSpaceBeforeCaps(segment),
    };
  });
});
</script>

<style scoped>
.page-header {
  position: relative;
  margin-bottom: 30px;
  padding: 50px 0;
  text-align: center;
  background: #aa9166;
}

.page-header h2 {
  position: relative;
  color: #121518;
  font-size: 60px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 5px;
}

.page-header h2::after {
  position: absolute;
  content: "";
  width: 100px;
  height: 2px;
  left: calc(50% - 50px);
  bottom: 0;
  background: #121518;
}

@media (max-width: 767.98px) {
  .page-header h2 {
    font-size: 35px;
  }

  .page-header a {
    font-size: 18px;
  }
}
</style>

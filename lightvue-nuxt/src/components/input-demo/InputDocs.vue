<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Basic" file="pages/input-demo/examples/InputDemo_Basic" />
    <docs-card-vue title="Rounded" file="pages/input-demo/examples/InputDemo_Rounded" />
    <!-- <docs-card-vue title="Basic + Rounded side by side" file="views/input-demo/examples/InputDemo_Old" /> -->
    <template #api>
        <getting-started :package-name="$options.packageName" :component-name="$options.componentName"/>
        <docs-card title="Input APIs" :responsive="false">
            <docs-all-api :api-data="$options.apiData"/>
        </docs-card>
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from "@/components/docs-card/DocsPageLayout.vue";
import DocsCardVue from "@/components/docs-card/DocsCardVue.vue";
import DocsCard from "@/components/docs-card/DocsCard.vue";
import GettingStarted from "@/components/docs-card/GettingStarted.vue";
import DocsAllApi from "@/components/docs-card/DocsAllApi.vue";
import InputAPI from "./InputAPI.js";

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi
  },
  title: "Light-input",
  description: `Light-input provides with a variety of input fields with various available customizations which helps it to fulfill the need of almost every web application/project.`,
  packageName: "input",
  componentName: "LvInput",
  apiData: InputAPI,
};
</script>

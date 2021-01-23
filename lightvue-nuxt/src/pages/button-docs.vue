<template>
  <docs-page-layout :title="$options.title" :description="$options.description">
    <docs-card-vue title="Basic Usage" file="examples/buttons/ButtonDemo_Basic" />
    <docs-card-vue title="Rounded Buttons" file="examples/buttons/ButtonDemo_Rounded" />
    <docs-card-vue title="Button Groups" file="examples/buttons/ButtonDemo_Group" />
    <docs-card-vue title="Push Buttons" file="examples/buttons/ButtonDemo_Raised" />
    <docs-card-vue title="Miscellaneous Usage" file="examples/buttons/ButtonDemo_Misc" />
    <template #api>
        <getting-started :package-name="$options.packageName" :component-name="$options.componentName"/>
        <docs-card title="APIs" :responsive="false">
            <docs-all-api :api-data="$options.apiData"/>
        </docs-card>
    </template>
  </docs-page-layout>
</template>

<script>
import DocsPageLayout from "@/components/docs-card/DocsPageLayout";
import DocsCardVue from "@/components/docs-card/DocsCardVue";
import DocsCard from "@/components/docs-card/DocsCard";
import GettingStarted from "@/components/docs-card/GettingStarted";
import DocsAllApi from "@/components/docs-card/DocsAllApi";
import InputAPI from "@/collections/input/InputAPI";
import ButtonAPI from "@/collections/buttons/ButtonAPI";

export default {
  components: {
    DocsCardVue,
    DocsCard,
    GettingStarted,
    DocsPageLayout,
    DocsAllApi
  },
  title: "Button",
  description: `Button is an extension to standard button element with an option to add icons and your custom theming.`,
  packageName: "button",
  componentName: "LvButton",
  apiData: ButtonAPI,
};
</script>

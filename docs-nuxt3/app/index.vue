<template>
  <div>
    <Head>
      <Title>{{ route.meta.title }}</Title>
      <Meta name="description" :content="route.meta.desc" />
    </Head>
    <NuxtPage />
    <LvToast position="top" />
    <LvToast position="center" />
    <LvToast position="bottom" />
    <LvNotification />
    <LvNotification position="top-left" />
    <LvNotification position="bottom-left" />
    <LvNotification position="bottom-right" />
  </div>
</template>

<script>
import 'light-icons/dist/light-icon.css';
import '@/assets/styles/lightvue.scss';
export default {
  setup() {
    const route = useRoute();
    // useServerSeoMeta({
    //   title: route?.meta?.title,
    //   ogTitle: route?.meta?.title,
    //   description: route?.meta?.desc,
    //   ogDescription: route?.meta?.desc,
    // });
    return {
      route,
    };
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/docsGlobal.scss';
</style>

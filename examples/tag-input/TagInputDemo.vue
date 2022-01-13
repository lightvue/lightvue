<template>
  <div>   
    <lv-tag-input label="Default" placeholder="Add a Tag"/>
    <br>
    <lv-tag-input label="Rounded" rounded="true"/>
  </div>
</template>

<script>
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvTagInput from 'lightvue/tag-input'
export default{
  data() {
    return {
      allOptions: {
        'floating-label': false,
        'bottom-bar': false,
        rounded: false,
        placeholder: 'default color rgba(0, 0, 0, 0.3)',
        'help-text': 'You can create your Component',
        label: 'This is the best demo',
        'placeholder-color': 'rgba(0, 0, 0, 0.3)',
        'icon-left': 'light-icon-search',
        'icon-right': 'light-icon-arrow-up-right-circle',
      },
      stringProps: ['label', 'placeholder-color', 'icon-left', 'icon-right', 'help-text', 'placeholder'],
    };
  },
  components: {
    DocsCardBest,
    LvTagInput
  },
}
</script>
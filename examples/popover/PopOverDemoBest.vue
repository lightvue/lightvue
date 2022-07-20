<template>
<div>
    <docs-card-best title="Playground">
        <!-- <lv-button v-bind="allOptions" style="width: 100%" /> -->
        <div class="lv-demo_layout">
            <LvPopOver v-bind="allOptions" :offset="allOptions.offset" :placement="allOptions.placement">
                <template #anchor>
                    <LvButton class="lv--primary" >This is a Bottom PopOver</LvButton>
                </template>
                <div>
                    <div>
                        <a href="https://lightvue.org/">
                        <img src="/logo_v2.svg" class="header-logo" />
                        </a>
                    </div>
                
                    <div style="text-align: center; color: #263846; width: 250px; margin-top: 10px;">
                        <p>The Emerging UI Component Library Designed for Vue 3.x & Vue 2.x</p>
                    </div>
                    <div style="text-align: center;">
                        <LvButton label="Know More" class="lv--success" />
                    </div>
                </div>
            </LvPopOver>
            <!-- {{selectedPlacement.placement}} -->
        </div>
        <template #props>
            <lv-toggle-switch v-model="allOptions.hover" label="Hover" /> </br>
            <br />
            <!-- <lv-input v-model="allOptions.label" label="Label" /> <br /> -->
            <Lv-colorpicker class="backgroundColor" v-model="allOptions['backgroundColor']" label="Background Color" /><br/>
            </br />
            <lv-input v-model="allOptions['borderRadius']" label='PopOver Border Radius' bottomBar/> </br />
            <lv-input v-model="allOptions['padding']" label='PopOver Padding' bottomBar/> </br />
            <lv-number v-model="allOptions['offset']" label='PopOver Offset' /> </br />
            <lv-dropdown v-model="selectedPlacement" :options="options" label="PopOver Placement" optionLabel="placement" placeholder="Select Placement" clearable />
            <br/>
            
        </template>
        <template #code>
            <span class="dy-code-row --empty-row"></span>
            <span class="dy-code-row --tag-row">&nbsp;&lt;lv-popover</span>
            <span class="dy-code-row --attribute-row" v-for="(option, name) in enabledOptions" :key="name">
                <pre v-if="option">&nbsp; &nbsp; &nbsp;<span v-if="!stringProps.includes(name)">:</span>{{ name }}=<span>"{{ option }}"</span></pre>
            </span>
            <span class="dy-code-row --tag-row">&nbsp;/&gt;</span>
            <span class="dy-code-row --empty-row"></span>
        </template>
    </docs-card-best>
</div>
</template>

<script>
import DocsCardBest from '@/components/docs-card/DocsCardBest';
import LvInput from 'lightvue/input';
import LvColorpicker from 'lightvue/color-picker';
import LvToggleSwitch from 'lightvue/toggle-switch';
import LvPopOver from 'lightvue/popover';
import LvNumber from 'lightvue/number';
import LvDropdown from 'lightvue/dropdown';

export default {
  data() {
    return {
      selectedPlacement: { placement: 'Bottom', code: 'BT' },
      options: [
        { placement: 'Left', code: 'LT' },
        { placement: 'Right', code: 'RT' },
        { placement: 'Top', code: 'TT' },
        { placement: 'Bottom', code: 'BT' },
      ],
      allOptions: {
        hover: false,
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        padding: '16px',
        offset: 15,
        placement: 'bottom',
      },

      stringProps: ['label', 'backgroundColor', 'padding', 'borderRadius', 'placement'],
    };
  },
  components: {
    DocsCardBest,
    LvInput,
    LvToggleSwitch,
    LvColorpicker,
    LvPopOver,
    LvNumber,
    LvDropdown,
  },
  computed: {
    enabledOptions() {
      return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
    },
  },
};
</script>

<style lang="scss"></style>

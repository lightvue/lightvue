<template>
<div>
    <docs-card-best title="Playground">
        <!-- <lv-button v-bind="allOptions" style="width: 100%" /> -->
        <div class="lv-demo_layout">
            <LvPopOver v-bind="allOptions" :offset="allOptions.offset" :placement="allOptions.selectedPlacement">
                <template #anchor>
                    <LvButton :label='allOptions.label' class="lv--primary" />
                </template>
                <div >
                <div>
                    <img src="/logo_v2.svg" class="header-logo" />
                </div>
                </div>
                <div  style="text-align: center">
                    <p>Know More about <a href="https://lightvue.org/">Lightvue</a></p>
                </div>
                <!-- <br> -->
                <div >
                <LvButton style="width: 80px" label="Back" class="lv--primary" disabled/>
                <LvButton style="width: 80px" label="Next" class="lv--primary" />
                </div>
            </LvPopOver>
            {{allOptions.selectedPlacement}}
        </div>
        <template #props>
            <lv-toggle-switch v-model="allOptions.hover" label="Hover" /> </br>
            <br />
            <!-- <lv-input v-model="allOptions.label" label="Label" /> <br /> -->
            <lv-input v-model="allOptions['borderRadius']" label='PopOver Border Radius' bottomBar/> </br />
            <lv-input v-model="allOptions['padding']" label='PopOver Padding' bottomBar/> </br />
            <lv-number v-model="allOptions['offset']" label='PopOver Offset' /> </br />
            <br />
            <lv-dropdown v-model="allOptions.selectedPlacement" :options="allOptions.options" label="PopOver Placement" optionLabel="placement" optionName="code" placeholder="Select Placement" clearable /><br/>


            <br />
            <Lv-colorpicker class="backgroundColor" v-model="allOptions['backgroundColor']" label="Background Color" />
            </br />
            <br />

            <!-- <Lv-colorpicker v-model="allOptions['color']" label="Tooltip Color" /> -->
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
      allOptions: {
        hover: false,
        label: 'This is a Bottom PopOver',
        backgroundColor: '#FFFFFF',
        borderRadius: '4px',
        padding: '16px',
        color: '#fff',
        offset: 15,
        placement: this.selectedPlacement,
        selectedPlacement: null,
        options: [
          { placement: 'Left', code: 'LT' },
          { placement: 'Right', code: 'RT' },
          { placement: 'Top', code: 'TT' },
          { placement: 'Bottom', code: 'BT' },
        ],
      },
      stringProps: ['label', 'backgroundColor', 'padding', 'borderRadius', 'color'],
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

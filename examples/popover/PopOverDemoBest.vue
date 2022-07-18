<template>
<div>
    <docs-card-best title="Playground">
        <!-- <lv-button v-bind="allOptions" style="width: 100%" /> -->
        <div class="lv-demo_layout">
            <LvPopOver v-bind="allOptions" :offset="10" placement="bottom">
                <template #anchor>
                    <LvButton :label='allOptions.label' class="lv--primary" />
                </template>
                <div class="header">
                <div>
                    <img src="/logo_v2.svg" class="header-logo" />
                </div>
                </div>
                <div class="body" style="text-align: center">
                    <p>Know More about <a href="https://lightvue.org/">Lightvue</a></p>
                </div>
                <!-- <br> -->
                <div class="footer">
                <LvButton style="width: 80px" label="Back" class="lv--primary" disabled/>
                <LvButton style="width: 80px" label="Next" class="lv--primary" />
                </div>
            </LvPopOver>
        </div>
        <template #props>
            <lv-toggle-switch v-model="allOptions.hover" label="Hover" /> </br>
            <br />
            <lv-input v-model="allOptions.label" label="Label" /> <br />
            <lv-input v-model="allOptions['borderRadius']" label='Border Radius' /> </br />
            <lv-input v-model="allOptions['padding']" label='Padding' /> </br />

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

export default {
    data() {
        return {
            allOptions: {
                hover: false,
                label: 'This is a Bottom PopOver',
                backgroundColor: '#FFFFFF',
                borderRadius: '4px',
                padding: '16px',
                color: '#fff'

            },
            stringProps: ['label', 'backgroundColor','padding', 'borderRadius', 'color'],
        };
    },
    components: {
        DocsCardBest,
        LvInput,
        LvToggleSwitch,
        LvColorpicker,
        LvPopOver,
    },
    computed: {
        enabledOptions() {
            return Object.entries(this.allOptions).reduce((a, [k, v]) => (v ? ((a[k] = v), a) : a), {});
        },
    },
};
</script>

<style lang="scss"></style>

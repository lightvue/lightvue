<template>
    <button class="lv-button" :class="buttonClass" v-bind="$attrs" v-on="listeners" :type="type">
        <div class="lv-button__prepend" v-if="$slots['prepend'] || icon">
            <slot name="prepend" >
                <div class="lv-button__icon" v-if="icon">
                    <i :class="icon" />
                </div>
            </slot>
        </div>
        <div class="lv-button__label">
            <slot>
                {{label||'&nbsp;'}}
            </slot>
        </div>
        <div class="lv-button__append" v-if="$slots['append'] || iconRight">
            <slot name="append" >
                <div class="lv-button__icon" v-if="iconRight">
                    <i :class="iconRight" />
                </div>
            </slot>
        </div>
    </button>
</template>

<script>
// import Ripple from '@/components/ripple/Ripple';
import './Button.scss';
import './ButtonTheme.scss';
export default {
    props: {
        icon: {
            type: String
        },
        iconRight: {
            type: String,
        },
        label: {
            type: String,
        },
        // loading: { // upcomming with needed slot
        //     type: Boolean,
        //     default: false,
        // },
        outlined: {
            type: Boolean,
            default: false
        },
        push: {
            type: Boolean,
            default: false
        },
        raised: {
            type: Boolean,
            default: false
        },
        rounded: {
            type: Boolean,
            default: false,
        },
        // ripple: { // upcomming
        //     type: Boolean,
        //     default: true
        // },
        size: {
            type: String,
            default: 'md',
            // validation: [TODO] for only possible values
        },
        type: {
            type: String,
            default: 'button'
        },
    },
    computed: {
        buttonClass() {
            return {
                '--icon-only': this.icon && !this.label,
                '--rounded': this.rounded,
                '--size-sm': this.size === 'sm',
                '--size-md': this.size === 'md',
                '--size-lg': this.size === 'lg',
                '--size-xl': this.size === 'xl',
                '--raised': this.raised,
                '--push': this.raised || this.outlined || this.push,
                '--outlined': this.outlined,
            }
        },
        listeners() {
            return this.$listeners ? { // Depreciated in Vue 3
                ...this.$listeners,
            } : {};
        },
    },
    // directives: {
    //     'ripple': Ripple
    // }
}
</script>

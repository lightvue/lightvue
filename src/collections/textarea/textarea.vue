<template>
  <div>
    <lv-input type="text" :editable="false" ref="mainInput" v-bind="$attrs">
            <textarea :class="`p-inputtextarea-resizable : ${autoResize}`" :maxlength="maxlength" class="lv-textarea" @keyup='remaincharCount()' v-bind="$attrs"  @input="this.updateValue" :value="modelValue" ref="textarea"/>
      <!-- <textarea v-bind="$attrs" class="lv-textarea" :class=" {'p-inputtextarea-resizable ': autoResize}" @input="this.updateValue" ref="textarea"></textarea> -->
    </lv-input>
    <!-- <span class="textarea__characters">{{ remaincharactersText }}</span> -->
    <div class="textarea__characters"> {{modalValue}} /  {{maxcharacter}}</div>
  </div>
</template>

<script>
import LvInput from '@/collections/input/Input.vue';

export default {
    name: 'LvTextarea',
    components: {
        LvInput,
    },
    props: {
          value: {
            type: String,
            default: ""
        },
        remaincharactersText: {
            type: String,
            default: "0/20"
        },
        maxlength: {
            type: Number,
            default: "20",
        }
    },
    cachedScrollHeight: null,
    mounted() {
        if (this.$refs.textarea.offsetParent && this.autoResize) {
            this.resize();
        }
    },
    updated() {
        if (this.$refs.textarea.offsetParent && this.autoResize) {
            this.resize();
        }
    },
    methods: {
        resize() {
            if (!this.cachedScrollHeight) {
                this.cachedScrollHeight = this.$refs.textarea.scrollHeight;
                this.$refs.textarea.style.overflow = "hidden";
            }

            if (this.cachedScrollHeight !== this.$refs.textarea.scrollHeight) {
                this.$refs.textarea.style.height = ''
                this.$refs.textarea.style.height = this.$refs.textarea.scrollHeight + 'px';

                if (parseFloat(this.$refs.textarea.style.height) >= parseFloat(this.$refs.textarea.style.maxHeight)) {
                    this.$refs.textarea.style.overflowY = "scroll";
                    this.$refs.textarea.style.height = this.$refs.textarea.style.maxHeight;
                }
                else {
                    this.$refs.textarea.style.overflow = "hidden";
                }

                this.cachedScrollHeight = this.$refs.textarea.scrollHeight;
            }
        },
          updateValue(event) {
      this.$emit('input-native', event);
      this.$emit('input', event.target.value); // Only for Vue 2
      this.$emit('update:modelValue', event.target.value); // Only for Vue 3
    },
        //  remaincharCount: function(){

        //     if(this.message.length > this.maxcharacter){
        //         this.remaincharactersText = "Exceeded "+this.maxcharacter+" characters limit.";
        //     }
        //     else{
        //     //    var remainCharacters = this.maxcharacter - this.message.length;
        //        var remainCharacters = this.message.length;
        //        this.remaincharactersText = "" + remainCharacters + "/" + this.maxcharacter;
        //     }
        // }
    },
    computed: {
        listeners() {
            return {
                ...this.$listeners,
                input: event => {
                    if (this.autoResize) {
                        this.resize();
                    }

                    this.$emit('input', event.target.value);
                }
            };
        },
        filled() {
            return (this.value != null && this.value.toString().length > 0)
        },
        modelValue() {
            return this.$attrs.modelValue ? this.$attrs.modelValue : this.value;
        },
    }
};
</script>

<style lang="scss">
textarea.lv-textarea{
    border: none;
    width: 100%;
    background: transparent;
    outline: none;
    resize: vertical;
}
span.textarea__characters{
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
}
</style>>


<template>
  <div :class="classes">
    <input ref="input" :type="_type" :name="name" :checked="shouldBeChecked" :value="value" @change="updateInput" :disabled="_disabled" :required="_required" />
    <div :class="onClasses">
      <slot name="extra"></slot>
      <label>
        <slot></slot>
      </label>
    </div>
    <div v-if="_toggle" :class="offClasses">
      <slot name="off-extra"></slot>
      <slot name="off-label"></slot>
    </div>
    <div v-if="_hover" :class="hoverClasses">
      <slot name="hover-extra"></slot>
      <slot name="hover-label"></slot>
    </div>
    <div v-if="_indeterminate" :class="indeterminateClasses">
      <slot name="indeterminate-extra"></slot>
      <slot name="indeterminate-label"></slot>
    </div>
  </div>
</template>

<script>
import './Checkbox.scss';

export default {
  name: 'LvCheckbox',
  model: {
    prop: 'modelValue',
    event: 'change',
  },

  props: {
    type: String,
    name: String,
    value: {},
    modelValue: {},
    trueValue: {},
    falseValue: {},
    checked: {},
    disabled: {},
    required: {},
    indeterminate: {},
    color: String,
    offColor: String,
    hoverColor: String,
    indeterminateColor: String,
    toggle: {},
    hover: {},
    focus: {},
    rounded: Boolean,
    filled: Boolean,
    thick: Boolean,
    pulse: Boolean,
    outline: Boolean,
    smooth: Boolean,
    plain: Boolean, // without outline
    icon: Boolean, //
    bigger: Boolean, //
    locked: Boolean, //
  },

  data() {
    return {
      m_checked: undefined,
      default_mode: false,
    };
  },

  computed: {
    _type() {
      if (this.$options.input_type) return this.$options.input_type;
      if (this.type) return this.type;

      return 'checkbox';
    },
    shouldBeChecked() {
      if (this.modelValue !== undefined) {
        // radio
        if (this._type === 'radio') {
          return this.modelValue === this.value;
        }

        // checkbox
        if (this.modelValue instanceof Array) {
          return this.modelValue.includes(this.value);
        }
        if (this._trueValue) {
          return this.modelValue === this.trueValue;
        }
        return typeof this.modelValue === 'string' ? true : !!this.modelValue;
      }

      // this.modelValue === undefined
      if (this.m_checked === undefined) return false;
      // return this.m_checked = (typeof this.checked === 'string' ? true : !!this.checked );
      else return this.m_checked;
    },
    _disabled() {
      return typeof this.disabled === 'string' ? true : !!this.disabled;
    },
    _required() {
      return typeof this.required === 'string' ? true : !!this.required;
    },
    _indeterminate() {
      return typeof this.indeterminate === 'string' ? true : !!this.indeterminate;
    },
    _trueValue() {
      return typeof this.trueValue === 'string' ? this.trueValue : !!this.trueValue;
    },
    _falseValue() {
      return typeof this.falseValue === 'string' ? this.falseValue : !!this.falseValue;
    },
    _toggle() {
      return typeof this.toggle === 'string' ? true : !!this.toggle;
    },
    _hover() {
      return typeof this.hover === 'string' ? true : !!this.hover;
    },
    _focus() {
      return typeof this.focus === 'string' ? true : !!this.focus;
    },
    classes() {
      return {
        'lv-checkbox': true,
        '--default': this.default_mode,
        '--radio': this._type === 'radio' ? this.default_mode : false,
        '--toggle': this._toggle,
        '--has-hover': this._hover,
        '--has-focus': this._focus, // Add Box-shadow
        '--has-indeterminate': this._indeterminate,
        '--rounded': this.rounded,
        '--filled': this.filled,
        '--outline': this.outline, // Outline color. correct suffix is: -o
        '--thick-outline': this.thick,
        '--no-outline': this.plain,
        '--animate-pulse': this.pulse,
        '--animate-smooth': this.smooth,
        '--with-icon': this.icon,
        '--bigger': this.bigger,
        '--locked': this.locked,
      };
    },
    onClasses() {
      let classes = {
        state: true,
        'lv-on': this._toggle,
      };
      if (this.color) {
        classes[`lv-${this.color}`] = true;
        if (this.outline) {
          classes[`lv-${this.color}-o`] = true;
        }
      }

      return classes;
    },
    offClasses() {
      let classes = {
        state: true,
        'lv-off': true,
      };
      if (this.offColor) classes[`lv-${this.offColor}`] = true;

      return classes;
    },
    hoverClasses() {
      let classes = {
        state: true,
        '--is-hover': true,
      };
      if (this.hoverColor) classes[`lv-${this.hoverColor}`] = true;

      return classes;
    },
    indeterminateClasses() {
      let classes = {
        state: true,
        '--is-indeterminate': true,
      };
      if (this.indeterminateColor) classes[`lv-${this.indeterminateColor}`] = true;

      return classes;
    },
  },

  watch: {
    checked(v) {
      this.m_checked = v;
    },
    indeterminate(v) {
      this.$refs.input.indeterminate = v;
    },
  },

  mounted() {
    if (this.$vnode.data && !this.$vnode.data.staticClass && !this.toggle && !this.plain) this.default_mode = true;
    if (this._indeterminate) this.$refs.input.indeterminate = true;
    this.$el.setAttribute(`lv-${this._type}`, '');
  },

  methods: {
    updateInput(event) {
      if (this._type === 'radio') {
        this.$emit('change', this.value);
        return;
      }

      this.$emit('update:indeterminate', false);

      let isChecked = event.target.checked;

      this.m_checked = isChecked;

      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value);
        } else {
          newValue.splice(newValue.indexOf(this.value), 1);
        }

        this.$emit('change', newValue);
      } else {
        this.$emit('change', isChecked ? (this._trueValue ? this.trueValue : true) : this._falseValue ? this.falseValue : false);
      }
    },
  },
};
</script>

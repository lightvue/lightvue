<template>
    <transition name="lv-overlaypanel__transition" @enter="onEnter" @leave="onLeave">
        <div class="lv-overlaypanel lv-component" v-if="visible" ref="overlayRef">
            <div class="lv-overlaypanel__content" @click="onContentClick">
                <slot></slot>
            </div>
            <LvButton class="lv-overlaypanel__close-btn" icon="pi pi-times" rounded @click="hide" v-if="showCloseIcon" :aria-label="ariaCloseLabel" type="button"/>
        </div>
    </transition>
</template>

<script>
import ConnectedOverlayScrollHandler from '@/utils/ConnectedOverlayScrollHandler';
import DomHandler from '@/utils/DomHandler';
import './OverlayPanel.scss';
import './OverlayPanelTheme.scss';

export default {
    props: {
		dismissable: {
			type: Boolean,
			default: true
		},
		showCloseIcon: {
			type: Boolean,
			default: false
		},
        appendTo: {
			type: String,
			default: null
		},
        baseZIndex: {
            type: Number,
            default: 0
        },
        autoZIndex: {
            type: Boolean,
            default: true
        },
        ariaCloseLabel: {
            type: String,
            default: 'close'
        },
        alignRight: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            visible: false
        }
    },
    selfClick: false,
    target: null,
    outsideClickListener: null,
    scrollHandler: null,
    resizeListener: null,
    // container: null,
    beforeDestroy() {
        this.onBeforeUnmount();
    },
    beforeUnmount() {
        this.onBeforeUnmount();
    },
    methods: {
        toggle(event) {
            if (this.visible)
                this.hide();
            else
                this.show(event);
        },
        show(event) {
            this.visible = true;
            this.target = event.currentTarget;
        },
        hide() {
            this.visible = false;
        },
        onContentClick() {
            this.selfClick = true;
        },
        onEnter() {
            this.appendContainer();
            this.alignOverlay();
            if (this.dismissable) {
                this.bindOutsideClickListener();
            }

            this.bindScrollListener();
            this.bindResizeListener();

            if (this.autoZIndex) {
                this.$refs.overlayRef.style.zIndex = String(this.baseZIndex + DomHandler.generateZIndex());
            }
        },
        onLeave() {
            this.unbindOutsideClickListener();
            this.unbindScrollListener();
            this.unbindResizeListener();
        },
        // alignOverlay() {
        //     DomHandler.absolutePosition(this.$refs.overlayRef, this.target);

        //     const containerOffset = DomHandler.getOffset(this.$refs.overlayRef);
        //     const targetOffset = DomHandler.getOffset(this.target);
        //     let arrowLeft = 0;

        //     if (containerOffset.left < targetOffset.left) {
        //         arrowLeft = targetOffset.left - containerOffset.left;
        //     }
        //     this.$refs.overlayRef.style.setProperty('--overlay-arrow-left', `${arrowLeft}px`);

        //     if (containerOffset.top < targetOffset.top) {
        //         DomHandler.addClass(this.$refs.overlayRef, '--flipped');
        //     }
        // },
        alignOverlay() {
            DomHandler.absolutePosition(this.$refs.overlayRef, this.target);

            const containerOffset = DomHandler.getOffset(this.$refs.overlayRef);
            const targetOffset = DomHandler.getOffset(this.target);
            let arrowLeft = 0;

            if (containerOffset.left < targetOffset.left) {
                arrowLeft = targetOffset.left - containerOffset.left;
            }
//MAGIC HAPPENED HERE:
            this.$refs.overlayRef.style.left = `${targetOffset.left + 210}px`;
            let targetWidth = this.target.getBoundingClientRect().right - this.target.getBoundingClientRect().left;
            let overlayWidth = this.$refs.overlayRef.getBoundingClientRect().right - this.$refs.overlayRef.getBoundingClientRect().left;
            this.$refs.overlayRef.style.left = `${targetOffset.left - (overlayWidth - targetWidth)}px`;
            this.$refs.overlayRef.style.setProperty('--overlay-arrow-left', `${arrowLeft}px`);
//THIS MUCH
            if (containerOffset.top < targetOffset.top) {
                DomHandler.addClass(this.$refs.overlayRef, '--flipped');
            }
        },
        bindOutsideClickListener() {
            if (!this.outsideClickListener) {
                this.outsideClickListener = (event) => {
                    if (this.visible && !this.selfClick && !this.isTargetClicked(event)) {
                        this.visible = false;
                    }
                    this.selfClick = false;
                };
                document.addEventListener('click', this.outsideClickListener);
            }
        },
        unbindOutsideClickListener() {
            if (this.outsideClickListener) {
                document.removeEventListener('click', this.outsideClickListener);
                this.outsideClickListener = null;
                this.selfClick = false;
            }
        },
        bindScrollListener() {
            if (!this.scrollHandler) {
                this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
                    if (this.visible) {
                        this.visible = false;
                    }
                });
            }

            this.scrollHandler.bindScrollListener();
        },
        unbindScrollListener() {
            if (this.scrollHandler) {
                this.scrollHandler.unbindScrollListener();
            }
        },
        bindResizeListener() {
            if (!this.resizeListener) {
                this.resizeListener = () => {
                    if (this.visible) {
                        this.visible = false;
                    }
                };
                window.addEventListener('resize', this.resizeListener);
            }
        },
        unbindResizeListener() {
            if (this.resizeListener) {
                window.removeEventListener('resize', this.resizeListener);
                this.resizeListener = null;
            }
        },
        isTargetClicked() {
            return this.target && (this.target === event.target || this.target.contains(event.target));
        },
        appendContainer() {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.$refs.overlayRef);
                else
                    document.getElementById(this.appendTo).appendChild(this.$refs.overlayRef);
            }
        },
        restoreAppend() {
            if (this.$refs.overlayRef && this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.removeChild(this.$refs.overlayRef);
                else
                    document.getElementById(this.appendTo).removeChild(this.$refs.overlayRef);
            }
        },
        onBeforeUnmount(){
            this.restoreAppend();
            if (this.dismissable) {
                this.unbindOutsideClickListener();
            }

            if (this.scrollHandler) {
                this.scrollHandler.destroy();
                this.scrollHandler = null;
            }
            this.unbindResizeListener();
            this.target = null;
            this.$refs.overlayRef = null;
        }
        // containerRef(el) {
        //     this.$refs.overlayRef = el;
        // }
    },
}
</script>

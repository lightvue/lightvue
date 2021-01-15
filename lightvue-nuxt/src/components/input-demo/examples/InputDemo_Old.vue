<template>
    <div>
        <div class="demo-row">
            <div class="demo-col">
                <h5>Basic</h5>
                <lv-input type="text" v-model="value1" label="First Name" placeholder="Enter your first name"/>
                <span :style="{marginLeft: '.5em'}">{{value1}}</span>
            </div>
            <div class="demo-col">
                <h5>Basic | ROUNDED</h5>
                <lv-input type="text" v-model="value1" label="First Name" placeholder="Enter your first name" rounded/>
                <span :style="{marginLeft: '.5em'}">{{value1}}</span>
            </div>
        </div>
        <div class="demo-row">
            <div class="demo-col">
                <h5>Material</h5>
                <lv-input id="username" type="text" v-model="value2" placeholder="Enter username here..." bottom-bar/>

            </div>
            <div class="demo-col">
                <h5>Material | Rounded</h5>
                <lv-input id="username" type="text" v-model="value2" placeholder="Enter username here..." bottom-bar rounded/>
            </div>
        </div>
        <div class="demo-row">
            <div class="demo-col">
                <h5>Floating Label</h5>
                <lv-input id="username" type="text" v-model="value2" label="Username" placeholder="Enter username here..." :floating-label="true"/>

            </div>
            <div class="demo-col">
                <h5>Floating Label</h5>
                <lv-input id="username" type="text" v-model="value2" label="Username" placeholder="Enter username here..." :floating-label="true" rounded/>
            </div>
        </div>




        <div class="demo-row">
            <div class="demo-col">

                <h5>Right Icon</h5>
                    <lv-input type="text" v-model="value4" icon-left="pi pi-search" icon-right="pi pi-spin pi-spinner"/>
            </div>
            <div class="demo-col">
                <h5>Right Icon | ROUNDED</h5>

                <lv-input type="text" v-model="value4" icon-left="pi pi-search" icon-right="pi pi-spin pi-spinner" :rounded="true"/>

            </div>
        </div>

        <div class="demo-row">
            <div class="demo-col">
                <h5>Prepend / append</h5>
                <lv-input type="text" v-model="value3" placeholder="Search" >
                    <template slot="prepend">
                        <Button icon="pi pi-check" class="p-button-primary"/>
                    </template>
                    <template slot="append">
                        <Button icon="pi pi-times" class="p-button-secondary"/>
                    </template>
                </lv-input>
            </div>
            <div class="demo-col">
                <h5>Prepend / append | ROUNDED</h5>
                <lv-input type="text" v-model="value3" placeholder="Search" :rounded="true">
                    <template slot="prepend">
                        <Button icon="pi pi-check" class="p-button-primary"/>
                    </template>
                    <template slot="append">
                        <Button icon="pi pi-times" class="p-button-danger"/>
                    </template>
                </lv-input>
            </div>
        </div>

        <div class="demo-row">
            <div class="demo-col">
                <h5>Custom append / prepend</h5>
                    <lv-input type="text" v-model="value3" placeholder="Search" >
                        <template slot="prepend">
                            <div class="prepend-box"> Prepend </div>
                        </template>
                        <template slot="append">
                            <div class="append-box"> Append </div>
                        </template>
                    </lv-input>
            </div>
            <div class="demo-col">
                <h5>Custom append / prepend | Rounded</h5>
                    <lv-input type="text" v-model="value3" placeholder="Search" :rounded="true">
                        <template slot="prepend">
                            <div class="prepend-box"> Prepend </div>
                        </template>
                        <template slot="append">
                            <div class="append-box"> Append </div>
                        </template>
                    </lv-input>
            </div>
        </div>

        <!-- <h5>Invalid</h5>
        <div class="p-field">
            <label for="username2">Username</label>
            <lv-input id="username2" type="username" aria-describedby="username2-help" class="p-invalid" />
            <small id="username2-help" class="p-invalid">Username is not available.</small>
        </div>

        <h5>Disabled</h5>
        <lv-input type="text" v-model="value5" disabled />

        <h5>Sizes</h5>
        <div class="sizes">
            <lv-input type="text" class="p-lv-input-sm" placeholder="Small" />
            <lv-input type="text" placeholder="Normal" />
            <lv-input type="text" class="p-lv-input-lg"  placeholder="Large" />
        </div> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: 'lightVue'
        }
    },
}
</script>

<style lang="scss" scoped>
.sizes {
    .p-lv-input {
        display: block;
        margin-bottom: .5rem;

        &:last-child {
            margin-bottom: 0;
        }
    }
}

.p-field * {
    display: block;
}
.prepend-box, .append-box{
    background-color: #38b2ab;
    color: #ffffff;
    display: flex;
    align-items: center;
    padding: 4px 12px;
    cursor: pointer;
}
.demo-row{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 30px;
}
.demo-col{
    flex-grow: 1;
    margin-right: 20px;
}
</style>

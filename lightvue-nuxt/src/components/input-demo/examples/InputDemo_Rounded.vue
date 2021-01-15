<template>
    <div>
        <lv-input
            type="text"
            v-model="value1"
            label="First Name"
            placeholder="Enter your first name"
            rounded
        />
        <br/>
        <lv-input
            type="text"
            v-model="value1"
            label="Email"
            help-text="Help text can also be given !!"
            placeholder="Enter your email"
            rounded
        />
        <br/>
        <lv-input
            type="text"
            v-model="value1"
            label="First Name"
            placeholder="Enter your first name"
            rounded
        />
        <br/>
        <lv-input
            id="username"
            type="text"
            v-model="value1"
            label="Material Effect"
            placeholder="Enter username here..."
            bottom-bar
            rounded
        />
        <br/>
        <lv-input
            id="username"
            type="text"
            v-model="value1"
            label="Floating Label"
            placeholder="Enter username here..."
            floating-label
            rounded
        />
        <br/>
        <lv-input
            type="text"
            v-model="value1"
            icon-left="pi pi-search"
            icon-right="pi pi-spin pi-spinner"
            label="Left Right Icons"
            rounded
        />
        <br/>
        <lv-input type="text" v-model="value1" placeholder="Search" label="Prepend Append" rounded>
            <template slot="prepend">
                <Button icon="pi pi-check" class="p-button-secondary" />
            </template>
            <template slot="append">
                <Button icon="pi pi-times" class="p-button-danger" />
            </template>
        </lv-input>
    </div>
</template>

<script>
export default {
    data(){
        return{
            value1: ""
        }
    }
}
</script>

<style>

</style>

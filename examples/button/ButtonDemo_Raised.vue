<template>
    <div>
        <h5>Push Buttons</h5>
        <LvButton label="Primary"  push class="lv--primary" />
        <LvButton label="Secondary"  push class="lv--secondary " />
        <LvButton label="Success"  push class="lv--success" />
        <LvButton label="Info"  push class="lv--info " />
        <LvButton label="Warning"  push class=" lv--warning " />
        <LvButton label="Help"  push class=" lv--help " />
        <LvButton label="Danger"  push class="lv--danger " />
        <LvButton label="Plain"  push class="lv--plain" />

        <h5>Raised buttons with push effect </h5>
        <LvButton label="Primary" raised class="lv--primary" />
        <LvButton label="Secondary" raised class="lv--secondary " />
        <LvButton label="Success" raised class="lv--success" />
        <LvButton label="Info" raised class="lv--info " />
        <LvButton label="Warning" raised class=" lv--warning " />
        <LvButton label="Help" raised class=" lv--help " />
        <LvButton label="Danger" raised class="lv--danger " />
        <LvButton label="Plain" raised class="lv--plain" />

        <h5>Text Buttons with push effect </h5>
        <LvButton label="Primary" raised class="--text-button" />
        <LvButton label="Secondary" raised class="lv--secondary --text-button" />
        <LvButton label="Success" raised class=" lv--success --text-button" />
        <LvButton label="Info" raised class="lv--info --text-button" />
        <LvButton label="Warning" raised class=" lv--warning --text-button" />
        <LvButton label="Help" raised class=" lv--help --text-button" />
        <LvButton label="Danger" raised class=" lv--danger --text-button" />
        <LvButton label="Plain" raised class="--text-button lv--plain" />
    </div>
</template>

<style lang="scss" scoped>
.lv-button {
    margin-right: .5rem;
    margin-bottom: .5rem;
}

.lv-buttonset {
    .lv-button {
        margin-right: 0;
        margin-bottom: 0;
    }
}
</style>

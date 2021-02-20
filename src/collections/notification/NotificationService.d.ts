import Vue, { PluginFunction } from 'vue';

export const install: PluginFunction<{}>;

interface NotificationServiceMethods {
    add(message: any): any;
    removeGroup(group: any): void;
    removeAllGroups(): void;
}

declare module 'vue/types/vue' {
    interface Vue {
        $notification: NotificationServiceMethods;
    }
}
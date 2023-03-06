<script setup lang="ts">
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
import { ref } from "vue";
import NavBar from "@/components/NavBar/NavBar.vue";
import MenuNavBar from "@/config/MenuNavBar";
import BaseIcon from "@/components/Icons/BaseIcon.vue";
import SideMenuItems from "@/config/SideMenuItems";
import NavBarItemPlain from "@/components/NavBar/NavBarItemPlain.vue";
import FormControl from "@/components/Forms/FormControl.vue";
import AsideMenu from "@/components/SideMenu/SideMenu.vue";

const isAsideMobileExpanded = ref(false);
const isAsideLgActive = ref(false);

const layoutAsidePadding = "xl:pl-60";

const menuClick = (_: PointerEvent, item) => {
  // if (item.isToggleLightDark) {
  //   styleStore.setDarkMode();
  // }

  if (item.isLogout) {
    //
  }
};
</script>
<template>
  <div
    :class="{
      dark: false,
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }"
  >
    <div
      :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
      class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-50 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
        :menu="MenuNavBar"
        :class="[layoutAsidePadding, { 'ml-60 lg:ml-0': isAsideMobileExpanded }]"
        @menu-click="menuClick"
      >
        <NavBarItemPlain
          display="flex lg:hidden"
          @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded"
        >
          <BaseIcon
            :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger"
            size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain
          display="hidden lg:flex xl:hidden"
          @click.prevent="isAsideLgActive = true"
        >
          <BaseIcon :path="mdiMenu" size="24" />
        </NavBarItemPlain>
        <NavBarItemPlain use-margin>
          <FormControl
            placeholder="Search (ctrl+k)"
            ctrl-k-focus
            transparent
            borderless
          />
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu
        :is-aside-mobile-expanded="isAsideMobileExpanded"
        :is-aside-lg-active="isAsideLgActive"
        :menu="SideMenuItems"
        @menu-click="menuClick"
        @aside-lg-close-click="isAsideLgActive = false"
      />
      <slot />
      <!-- <FooterBar>
        Get more with
        <a href="https://tailwind-vue.justboil.me/" target="_blank" class="text-blue-600"
          >Premium version</a
        >
      </FooterBar> -->
    </div>
  </div>
</template>
<style></style>

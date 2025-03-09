<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 my-4">
    <LinkCard
      v-for="link in randomLinks"
      :key="link.link"
      :title="link.title"
      :desc="link.desc"
      :link="link.link"
      :img="link.img"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import LinkCard from "./LinkCard.vue";

const links: { title: string; link: string; desc: string; img: string }[] = [
  {
    link: "https://lanmei.link/",
    title: "张蓝莓的小站",
    img: "https://lanmei.link/wp-content/uploads/2024/07/IMG_20230703_184634.jpg",
    desc: "道阻且长，行则将至",
  },
  {
    link: "https://szczk.top",
    title: "czk官网",
    img: "https://lanmei.link/wp-content/uploads/2024/10/1728197547-Image_1728197480384.jpg",
    desc: "czk的小破站",
  },
  {
    link: "https://haorwen.top/",
    title: "haorwen",
    img: "https://haorwen.top/img/favicon.jpg",
    desc: "一个兴趣使然的小站",
  },
  {
    link: "https://www.hyj120309.top",
    title: "Hyj's小站",
    img: "https://www.hyj120309.top/images/bg.jpg",
    desc: "Windows11小伙",
  },
  {
    link: "https://xqyworld.us.kg",
    title: "XQYWorld的博客",
    img: "https://xqyworld.us.kg/wp-content/uploads/2025/01/cropped-IMG_0070.png",
    desc: "XQYWorld的博客",
  },
  {
    link: "https://moyuzj.cn",
    title: "摸鱼真君不摸鱼",
    img: "https://moyuzj.cn/wp-content/uploads/2025/01/1735979350-微信图片_20250104162316.webp",
    desc: "不再整活，就在整活的路上",
  },
  {
    link: "https://emohe.cn",
    title: "阿涛的小破站",
    img: "https://emohe.cn/_astro/demo-avatar.CryhOpiU_8OdLC.webp",
    desc: "分享docker知识，记录生活",
  },
];

const randomLinks = computed(() => links.sort(() => Math.random() - 0.5));
</script>

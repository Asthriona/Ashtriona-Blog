<template>
<section class="homepage">
  <section id="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id" />
  </section>
</section>

</template>

<script>
import PostPreview from "@/components/Blog/PostPreview";
//import sideBar from '@/components/SideBar/sideBar';
export default {
  components: {
    PostPreview
  },
  asyncData(context) {
    return context.app.$storyapi.get('cdn/stories', {
      version: 'Published',
      starts_with: 'blog/'
    }).then(res => {
      return {
        posts: res.data.stories.map(bp => {
        return {
          id: bp.slug,
          title: bp.content.title,
          previewText: bp.content.summay,
          thumbnailUrl: bp.content.thumbnail
        }
      })
      };
    });
  }
};
</script>

<style lang="css" scoped>
#posts {
  padding: 2rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  width: 100%;
}
#posts > h1{
  font-weight: bold !important;
  font-size: 1.5rem !important;
}
@media (min-width: 35rem) {
    #posts {
      flex-direction: columns;
    }
}
</style>

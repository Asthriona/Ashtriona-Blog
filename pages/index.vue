<template>
<section class="homepage">
<b-container>
  <b-row>
    <b-col cols="12">
  <section id="posts">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :title="post.title"
      :excerpt="post.previewText"
      :thumbnailImage="post.thumbnailUrl"
      :id="post.id" />
  </section>
  </b-col>
  </b-row>
</b-container>
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
      console.log(res)
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#posts > h1{
  font-weight: bold !important;
  font-size: 1.5rem !important;
}
.right-bar{
  position: relative;
}
.right-bar section{
  -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    position: relative;
    background: rgb(128, 128, 128);
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 5px;
}
@media (min-width: 35rem) {
    #posts {
      flex-direction: row;
    }
}
</style>

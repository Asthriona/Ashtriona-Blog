
<template>
  <div id="post" v-editable="blok">
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image + ')'}"></div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1 class="title text-center">{{ title }}</h1>
        </b-col>
        <section class="post-content text-justify">
          <hr />
          <div class="product__description" v-html="$options.filters.markdown(blok.content)"></div>
        </section>
      </b-row>
      <hr>
      <b-row>
        <b-col offset-sm="1">
          <Signature />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Signature from "@/components/Signature/Signature";
export default {
  components: {
    Signature
  },
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/blog/" + context.params.postId, {
        version: "Published"
      })
      .then(res => {
        return {
          blok: res.data.story.content,
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          content: res.data.story.content.content
        };
      });
  }
};
</script>

<style>
.post-thumbnail {
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
}
.post-content {
  float: left;
  max-width: 700px;
  margin: auto;
}
.post-content p {
  white-space: pre-line;
}
.title {
  font-size: 3rem !important;
  font-weight: normal;
  width: 80%;
  margin: auto;
  margin-top: 50px;
  margin-bottom: 15px;
}
</style>
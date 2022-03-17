<template>
  <div>
    <div class="row">
      <div class="col-8">
        <b-card
            overlay
            img-src="https://picsum.photos/900/250/?image=3"
            img-alt="Post Image"
            text-variant="white"
            title="Post Title"
            class="d-flex"
        >
          <b-card-body body-class="h-100" style="position: relative; bottom: -60%;">
            <div class="row">
              <div class="col-4 d-flex flex-column align-items-start">Date</div>
              <div class="col-4 d-flex flex-column align-items-center">Author</div>
              <div class="col-4 d-flex flex-column align-items-end">Comments</div>
            </div>
          </b-card-body>
        </b-card>
        <div>
          <h1>Header</h1>
          <p>Description...</p>
        </div>
      </div>
      <div class="col-4">
        <b-card header-bg-variant="primary" header-tag="header">
          <template #header><h6 class="mb-0">Tags</h6></template>
          <b-card-text>
            <a href="#" class="m-1">#it</a>
            <a href="#" class="m-1">#blog</a>
            <a href="#" class="m-1">#lessen</a>
          </b-card-text>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutPage"
}
</script>

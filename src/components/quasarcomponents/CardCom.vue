<template>
  <q-layout>
    <q-page-container>
      <q-page>
        <div class="row q-col-gutter-md">
          <div class="col-3">
            <!-- First Card -->
            <q-card class="q-ma-md">
              <q-card-section>
                <div class="text-h5 text-dark text-bold">This card Heading</div>
                <div class="text-subtitle2 text-dark">
                  This is going to be a subtitle of card
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat impedit deserunt, similique asperiores ducimus nostrum
                blanditiis quae repudiandae, perferendis esse qui inventore
                cumque architecto quos natus voluptatum officia, aut beatae.
              </q-card-section>
              <q-card-actions vertical>
                <q-btn label="Watch" flat></q-btn>
                <q-btn label="Review" flat></q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!-- Second Card -->
          <div class="col-3">
            <q-card class="q-ma-md bg-amber-4">
              <q-card-section>
                <div class="text-h5 text-dark text-bold">This card Heading</div>
                <div class="text-subtitle2 text-dark">
                  This is going to be a subtitle of card
                </div>
              </q-card-section>
              <q-separator inset />
              <q-card-section>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat impedit deserunt, similique asperiores ducimus nostrum
                blanditiis quae repudiandae, perferendis esse qui inventore
                cumque architecto quos natus voluptatum officia, aut beatae.
              </q-card-section>
              <q-card-actions align="right">
                <q-btn label="Watch" flat></q-btn>
                <q-btn label="Review" flat></q-btn>
              </q-card-actions>
            </q-card>
          </div>

          <!-- third card  -->

          <div class="col-3">
            <q-card class="q-ma-md">
              <q-card-section class="image__div">
                <q-img
                  class="zoom-img"
                  src="@assets/images/coffeeshop.jpg"
                ></q-img>
              </q-card-section>
              <q-card-section class="q-pa-t-none">
                <div class="text-h6 text-bold">Coffee Shop</div>
                <div class="text-subtitle2">Enhance your coffee experience</div>
              </q-card-section>
              <q-separator inset />
              <q-card-actions align="right">
                <q-btn flat class="text-blue">
                  <a
                    href="http://www.youtube.com"
                    style="text-decoration: none"
                  >
                    Visit
                  </a>
                </q-btn>
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup></script>

<style scoped>
.image__div {
  overflow: hidden;
}
.zoom-img {
  transition: transform 0.3s ease;
}

.zoom-img:hover {
  transform: scale(1.5);
}
</style>

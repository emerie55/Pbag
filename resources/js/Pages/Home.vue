<template>
  <web-layout>
    <!-- <template #page_head>
            <header class="bg-white text-gray-900">
                <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 py-3">
                    <div>
                        <h2 class="text-xl">
                            Home
                        </h2>
                    </div>

                    <div class="text-right hidden md:block">
                        <span class="text-sm">
                            Home 
                        </span>
                    </div>
                </div>
            </header>
        </template> -->

    <div>
      <!-- site banner -->
      <div
        class="relative bg-gray-700 banner-home"
        :style="{ 'background-image': 'url(images/prayer.jpg)' }"
      >
        <div
          class="
            absolute
            left-4
            md:left-20
            text-white
            max-w-md
            md:max-w-2xl
            top-52
          "
        >
          <h1 class="font-bold uppercase text-xl mb-6">Our Mission</h1>
          <h1
            class="font-bold text-5xl md:text-6xl lg:text-7xl font-serif mb-6"
          >
            is to glorify God and loving <i>others</i>
          </h1>
          <Link
            :href="route('about')"
            class="
              con-btn
              uppercase
              bg-yellow-600
              text-white
              font-bold
              px-16
              py-3
              border-2 border-yellow-600
              hover:bg-gray-50
              hover:text-yellow-600
              hover:transition
              duration-500
            "
          >
            ministry
          </Link>
        </div>
      </div>

      <!-- small banner -->
      <div class="bg-yellow-600">
        <div class="mx-auto max-w-7xl">
          <div class="md:grid grid-cols-2">
            <div class="col-span-1 px-4 py-14">
              <h1 class="text-white text-4xl font-bold mb-4">
                Need Prayer? We’ll Pray For You!
              </h1>
              <h1 class="text-white text-sm">
                Need prayer? We would love to pray for you. You can send us a
                message for prayer.
              </h1>
            </div>
            <div class="col-span-1 py-14 text-center">
              <Link :href="route('contact')"
                class="
                  con-btn
                  uppercase
                  bg-yellow-600
                  rounded
                  text-white
                  tracking-widest
                  font-semibold
                  px-14
                  py-6
                  border-2 border-gray-50
                  hover:border-yellow-600
                  hover:bg-yellow-600
                  hover:text-gray-50
                  hover:transition
                  duration-500
                "
              >
                send us a message
              </Link>
            </div>
          </div>
        </div>
      </div>

      <!-- the church -->
      <div class="bg-white">
        <div class="mx-auto max-w-5xl py-28 px-8 lg:px-0">
          <h1
            class="
              font-bold
              tracking-widest
              uppercase
              text-yellow-600 text-center text-md
              mb-6
            "
          >
            the church
          </h1>
          <h1
            class="
              font-bold
              text-gray-800 text-3xl
              md:text-4xl
              lg:text-5xl
              font-serif
              mb-6
              text-center
            "
          >
            We are a church that believes in Jesus & loves God and people
          </h1>
          <h2 class="text-yellow-600 text-xl font-bold text-center mb-6">
            __________
          </h2>
          <h1 class="font-bold text-gray-500 text-md font-serif text-center">
            We are a church that believes in Jesus, a church that loves God and
            people. Overwhelmed by the gift of salvation we have found in Jesus,
            we have a heart for authentic worship, are passionate about the
            local church, and are on mission to see God’s kingdom established
            across the earth. We are a church that believes in Jesus, a church
            that loves God and people.
          </h1>
        </div>
      </div>

      <!-- the Mission -->
      <div class="">
        <div class="mx-auto max-w-5xl py-28 px-8 lg:px-0">
          <h1
            class="
              font-bold
              tracking-widest
              uppercase
              text-yellow-600 text-center text-md
              mb-6
            "
          >
            what we do
          </h1>
          <h1
            class="
              font-bold
              text-gray-800 text-3xl
              md:text-4xl
              lg:text-5xl
              font-serif
              mb-6
              text-center
            "
          >
            Our Mission
          </h1>
          <center><hr class="border border-yellow-600 w-20 mb-6" /></center>

          <div class="md:grid grid-cols-3 gap-8">
            <div
              class="col-span-1 mt-16"
              v-for="(post, i) in posts"
              :key="i"
              :value="post.id"
            >
              <div class="bg-gray-500 mb-6">
                <!-- <div class=" bg-gray-600 text-yellow-600 w-full h-full z-50 cover_img">Hello</div> -->
                <img
                  src="images/pray.jpg"
                  alt=""
                  class="object-cover w-full img_c"
                />
              </div>
              <h1
                class="
                  font-bold
                  text-gray-800 text-3xl
                  font-serif
                  mb-6
                  text-center
                  hover:text-yellow-600
                "
              >
                <i>{{ post.title }}</i>
              </h1>
              <center><hr class="border border-yellow-600 w-20 mb-6" /></center>
              <h1
                class="font-bold text-gray-500 text-md font-serif text-center"
              >
                {{ post.content }}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <!-- the Events -->
      <div class="bg-white">
        <div class="mx-auto max-w-5xl py-28 px-8 lg:px-0">
          <h1
            class="
              font-bold
              tracking-widest
              uppercase
              text-yellow-600 text-center text-md
              mb-6
            "
          >
            calendar
          </h1>
          <h1
            class="
              font-bold
              text-gray-800 text-3xl
              md:text-4xl
              lg:text-5xl
              font-serif
              mb-6
              text-center
            "
          >
            Upcoming Events
          </h1>
          <center><hr class="border border-yellow-600 w-20 mb-6" /></center>

          <div class="md:grid grid-cols-3 gap-8">
            <div
              class="shadow_event col-span-1 mt-16"
              v-for="(event, i) in events"
              :key="i"
              :value="event.id"
            >
              <div class="bg-gray-500 mb-8">
                <!-- <div class=" bg-gray-600 text-yellow-600 w-full h-full z-50 cover_img">Hello</div> -->
                <img
                  src="images/pray1.jpg"
                  alt=""
                  class="object-cover w-full img_c"
                />
              </div>
              <h1
                class="
                  p-2
                  font-bold
                  tracking-wide
                  uppercase
                  text-yellow-600 text-lg
                  mb-4
                "
              >
                {{ event.pdate }}
              </h1>
              <a href="" class="">
                <h1
                  class="
                    p-2
                    font-bold
                    text-gray-800 text-xl
                    font-serif
                    hover:text-yellow-600
                  "
                >
                  {{ event.title }}
                </h1>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Testimomies -->
      <div
        class="relative bg-gray-700 banner-home"
        :style="{ 'background-image': 'url(images/prayer12.jpg)' }"
      >
        <!-- <div class="banner-testi z-40 absolute top-0 bg-gray-900 "></div> -->
        <!-- <div class="overlay banner-home absolute top-0"></div> -->
        <div class="mx-auto max-w-5xl py-28 px-8 lg:px-0">
          <h1
            class="
              font-bold
              tracking-widest
              uppercase
              text-yellow-600 text-center text-md
              mb-6
            "
          >
            testimonials
          </h1>
          <h1
            class="
              font-bold
              text-gray-50 text-3xl
              md:text-4xl
              lg:text-5xl
              font-serif
              mb-6
              text-center
            "
          >
            People’s Stories
          </h1>
          <center><hr class="border border-yellow-600 w-20 mb-8" /></center>

          <div class="md:grid grid-cols-2 gap-8 bg-gray-900 bg-opacity-40 p-6" v-for="(testimony, i) in testimonies"
              :key="i"
              :value="testimony.id">
            <div class="col-span-1">
              <div class="text-white">
                <span class="text-2xl">“{{ testimony.subject }}”,</span>&nbsp;
                <span class="text-gray-200">by {{ testimony.fullname }}</span>
              </div>

              <div class="text-gray-200 mt-6 text-justify">
                  {{ testimony.content }}
              </div>
            </div>
            <div class="">
              <img
                src="images/pray1.jpg"
                alt=""
                class="object-cover w-full img_c"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </web-layout>
</template>

<script>
import WebLayout from "../Layouts/WebLayout.vue";
// import Button from '../Jetstream/Button.vue';
import { Link } from "@inertiajs/inertia-vue3";
import axios from "axios";

export default {
  components: { WebLayout, Link },
  data() {
    return {
      post: {
        title: "",
        // image: '',
        content: "",
      },
      posts: [],

      event: {
        title: "",
        pdate: "",
        // image: '',
        content: "",
      },
      events: [],

      testimony : {
          fullname:'',
          email:'',
          phone:'',
          subject:'',
          content:'',
      },
      testimonies:[],
    };
  },
  methods: {
    fetchPostmission() {
      axios
        .post(route("api.fetch.post.mission"))
        .then((res) => {
          this.posts = res.data;
        })
        .catch((ex) => {
          console.log(ex);
        });
    },

    fetchPostevent() {
      axios
        .post(route("api.fetch.post.event"))
        .then((res) => {
          this.events = res.data;
        })
        .catch((ex) => {
          console.log(ex);
        });
    },

    fetchTestimony(){
      axios.post(route('api.fetch.testimony.once'))
        .then((res) => {
            this.testimonies = res.data
        })
        .catch((ex) => {
            console.log(ex);
        })
      },
  },
  mounted() {
    this.fetchPostmission();
    this.fetchPostevent();
    this.fetchTestimony();
  },
};
</script>

<style>
.banner-home {
  height: 39.9rem;
  background-position: center;
  background-size: cover;
}

.con-btn:hover {
  box-shadow: 4px 8px 8px hsl(0deg 10% 10% / 0.38);
}

.shadow_event {
  box-shadow: 4px 8px 8px hsl(0deg 10% 10% / 0.38);
}

.img_c:hover .cover_img {
  display: block;
}
</style>

import React from "react";
import Hero from "../assets/Heading.png";
import Participa from "../components/Participa";
import WaveTop from "../assets/waveTop1.png";

const posts = [
  {
    id: 1,
    title: "Incrementa la teva taxa de conversió",
    image:
      "https://c.pxhere.com/photos/bc/ca/grapes_bunch_fruit_person_holding_harvest_ripe_organic-745906.jpg!d",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "16 de març de 2020",
    datetime: "2020-03-16",
    category: { title: "Màrqueting", href: "#" },
    author: {
      name: "Miquel Foraster",
      role: "Co-Fundador / Director Tècnic",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Optimitza la teva taxa de conversió",
    image:
      "https://c.pxhere.com/images/32/1b/6d3a791503d8ec9e723ae8ac3299-1571887.jpg!d",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "16 de març de 2020",
    datetime: "2020-03-16",
    category: { title: "Màrqueting", href: "#" },
    author: {
      name: "Miquel Foraster",
      role: "Co-Fundador / Director Tècnic",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Optimitza la teva taxa de conversió",
    image:
      "https://c.pxhere.com/photos/2d/77/vegetables_garden_harvest_organic_green_gardening_lettuce_summer-722088.jpg!d",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "16 de març de 2020",
    datetime: "2020-03-16",
    category: { title: "Vendes", href: "#" },
    author: {
      name: "Lluís Martí",
      role: "CMO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

function Home() {
  return (
    <div className="">
      <div className="">
        <img
          className="rounded-xl md:rounded-none aspect-video my-5"
          src={Hero}
          alt="Hero Image"
        />
      </div>

      <div className="">
        {" "}
        <Participa />
      </div>
      <div className="">
        <img className="w-0 md:w-screen md:h-32" src={WaveTop} alt="wave" />
      </div>
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              <div class="text-3xl md:text-5xl font-extrabold ...">
                <span class="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-sky-500">
                  Des-de el nostre Blog
                </span>
              </div>
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              "Aprèn com fer créixer el teu negoci amb els nostres consells
              d'experts..
            </p>
          </div>
          <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <img src={post.image} alt="" className="h-56 w-96 rounded-md" />
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>

                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img
                    src={post.author.imageUrl}
                    alt=""
                    className="h-10 w-10 rounded-full bg-gray-50"
                  />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

F8.component("counter-app", {
  data: () => ({
    name: "Counter App",
    count: 0,
  }),
  template: `
      <h1>{{ name }}</h1>
      <h1>Đã đếm: {{count}} lần</h1>
      <button v-on:click="count--">-</button>
      <button v-on:click="count++">+</button>
      <button v-on:dblclick="name='F8 học lập trình'">Change Title</button>
    `,
});

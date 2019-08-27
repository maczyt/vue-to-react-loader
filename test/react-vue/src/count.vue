<template>
  <div>
    <h2>This is count</h2>
    <p>Count: {{ count }}</p>
    <div>
      <button @click="add">+</button>
      <button @click="remove">-</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 66
    };
  },
  methods: {
    add() {
      this.count++;
    },
    remove() {
      this.count--;
    }
  }
};
</script>


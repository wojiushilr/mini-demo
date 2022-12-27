<template>
  <div>
    <todo-top @switchTaskStatus="switchTaskStatus" />
    <todo-card v-for="todo in todoData" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
/* eslint-disable no-console */
import TodoTop from '../../components/TodoTop'
import TodoCard from '../../components/TodoCard'

export default {
  components: {
    'todo-top': TodoTop,
    'todo-card': TodoCard,
  },
  data() {
    return {
      initData: [],
      todoData: [],
      isDone: false,
    }
  },
  async created() {
    await this.$axios.$get('/api/v1/todos').then((res) => {
      this.initData = res
      this.todoData = res.filter((data) => {
        return data.is_done === false
      })
    })
  },

  // async created(){
  //   const config = {
  //     headers:{
  //       'Accept': 'application/json'
  //     }
  //   }
  //   // const res = await this.$axios.$get('https://icanhazdadjoke.com/search', config)
  //   const res = await this.$axios.$get('/api/v1/todos', config)
  //   console.log(res)
  // }


  methods: {
    switchTaskStatus(value) {
      this.todoData = this.initData.filter((data) => {
        return data.is_done === value
      })
    },
  },

}
</script>
<template>
  <v-row>
    <v-col cols="7">
      <v-btn class="ma-2" color="info" large @click="$router.push('/todo')">
        新規作成
      </v-btn>
    </v-col>
    <v-col cols="5">
      <v-switch label="完了済み" @change="switchTaskStatus"></v-switch>
    </v-col>
  </v-row>
</template>
<script>
export default {
  methods: {
    switchTaskStatus(value) {
      this.$emit('switchTaskStatus', value)
    },
  },
}
</script>
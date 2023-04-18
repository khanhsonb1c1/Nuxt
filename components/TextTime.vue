<template>
  <span>{{ formatTime }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    timestamp: {
      type: Number,
      required: false,
    },
    dateOnly: {
      type: Boolean,
    },
  },
  computed: {
    formatTime() {
      if (!this.timestamp) {
        return "...";
      }
      const dateOptions = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      } as Intl.DateTimeFormatOptions;
      const dateTimeOptions = {
        ...dateOptions,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      } as Intl.DateTimeFormatOptions;
      const intlDate = new Intl.DateTimeFormat(
        "en-GB",
        this.dateOnly ? dateOptions : dateTimeOptions
      );
      // Timestamp format
      return intlDate.format(new Date(1000 * this.timestamp));
    },
  },
});
</script>

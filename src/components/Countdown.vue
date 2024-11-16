<template>
  <div>
    <p v-if="timeRemaining > 0">
      {{ days }}d : {{ hours }}h : {{ minutes }}m : {{ seconds }}s
    </p>
    <p v-else>Countdown Complete!</p>
  </div>
</template>

<script>
import { ref, computed, onMounted, onUnmounted } from "vue";

export default {
  name: "CountdownTimer",
  props: {
    endTime: {
      type: Date,
      required: true,
    },
  },
  setup(props) {
    const timeRemaining = ref(0);

    const calculateTimeRemaining = () => {
      const now = new Date().getTime();
      timeRemaining.value = Math.max(0, props.endTime.getTime() - now);
    };

    const days = computed(() =>
      Math.floor(timeRemaining.value / (1000 * 60 * 60 * 24)),
    );
    const hours = computed(() =>
      Math.floor(
        (timeRemaining.value % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      ),
    );
    const minutes = computed(() =>
      Math.floor((timeRemaining.value % (1000 * 60 * 60)) / (1000 * 60)),
    );
    const seconds = computed(() =>
      Math.floor((timeRemaining.value % (1000 * 60)) / 1000),
    );

    let intervalId;

    onMounted(() => {
      calculateTimeRemaining();
      intervalId = setInterval(calculateTimeRemaining, 1000);
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return { days, hours, minutes, seconds, timeRemaining };
  },
};
</script>

<style scoped>
p {
  font-size: 2em;
  font-weight: bold;
}
</style>

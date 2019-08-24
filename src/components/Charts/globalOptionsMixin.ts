import Chart from 'chart.js';
import { initGlobalOptions } from "@/components/Charts/config";
import Vue from 'vue';

export default class GlobalOptionsMixin extends Vue {
  mounted() {
    initGlobalOptions(Chart);
  }
}

import { Bar, mixins as mx } from 'vue-chartjs';
import globalOptionsMixin from "@/components/Charts/globalOptionsMixin";
import Component, { mixins } from 'vue-class-component'

@Component({
  name: 'bar-chart',
  extends: Bar
})
export default class BarChart extends mixins(mx.reactiveData, globalOptionsMixin, Bar) {
  props: {
    extraOptions: {
      type: Object,
      default: () => ({})
    },
    chartData: any
  };
  data() {
    return {
      ctx: null
    };
  }
  mounted() {
    this.$watch(
      'chartData',
      (newVal, oldVal) => {
        if (!oldVal) {
          this.renderChart(this.props.chartData, this.props.extraOptions);
        }
      },
      { immediate: true }
    );
  }
}

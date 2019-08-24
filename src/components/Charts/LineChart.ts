import { Line, mixins as mx } from 'vue-chartjs';
import globalOptionsMixin from "@/components/Charts/globalOptionsMixin";
import Component, { mixins } from 'vue-class-component';

@Component({
  name: 'line-chart',
  extends: Line
})
export default class LineChart extends mixins(mx.reactiveData, globalOptionsMixin, Line) {
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

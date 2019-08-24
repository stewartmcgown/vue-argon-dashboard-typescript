import { Doughnut, mixins } from 'vue-chartjs';
import globalOptionsMixin from "@/components/Charts/globalOptionsMixin";
import Component from 'vue-class-component';

@Component({
  name: 'doughnut-chart',
  mixins: [mixins.reactiveProp, globalOptionsMixin]
})
export default class BarChart extends Doughnut {
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
};
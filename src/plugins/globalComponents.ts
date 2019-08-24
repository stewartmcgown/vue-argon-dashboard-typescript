import Badge from "@/components/Badge.vue";
import BaseAlert from "@/components/BaseAlert.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseDropdown from "@/components/BaseDropdown.vue";
import BaseNav from "@/components/BaseNav.vue";
import BasePagination from "@/components/BasePagination.vue";
import BaseProgress from "@/components/BaseProgress.vue";
import BaseRadio from "@/components/BaseRadio.vue";
import BaseSlider from "@/components/BaseSlider.vue";
import BaseSwitch from "@/components/BaseSwitch.vue";
import BaseTable from "@/components/BaseTable.vue";
import BaseHeader from "@/components/BaseHeader.vue";
import Card from "@/components/Card.vue";
import StatsCard from "@/components/StatsCard.vue";
import Modal from "@/components/Modal.vue";
import TabPane from "@/components/Tabs/TabPane.vue";
import Tabs from "@/components/Tabs/Tabs.vue";

export default {
  install(Vue: Vue.VueConstructor) {
    Vue.component(Badge.name, Badge);
    Vue.component(BaseAlert.name, BaseAlert);
    Vue.component(BaseButton.name, BaseButton);
    Vue.component(BaseInput.name, BaseInput);
    Vue.component(BaseNav.name, BaseNav);
    Vue.component(BaseDropdown.name, BaseDropdown);
    Vue.component(BaseCheckbox.name, BaseCheckbox);
    Vue.component(BasePagination.name, BasePagination);
    Vue.component(BaseProgress.name, BaseProgress);
    Vue.component(BaseRadio.name, BaseRadio);
    Vue.component(BaseSlider.name, BaseSlider);
    Vue.component(BaseSwitch.name, BaseSwitch);
    Vue.component(BaseTable.name, BaseTable);
    Vue.component(BaseHeader.name, BaseHeader);
    Vue.component(Card.name, Card);
    Vue.component(StatsCard.name, StatsCard);
    Vue.component(Modal.name, Modal);
    Vue.component(TabPane.name, TabPane);
    Vue.component(Tabs.name, Tabs);
  }
};

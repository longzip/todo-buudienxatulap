<template>
  <div class="q-pa-md">
    <ListHeader bgcolor="bg-orange-4"
      >Danh sách thẻ BHYT cần gia hạn
      <q-btn rounded color="primary" label="Tải" @click="dongBo()" icon="sync"
    /></ListHeader>
    <div class="q-gutter-y-md column">
      <q-input
        outlined
        v-model="searchText"
        placeholder="Từ khóa"
        hint="Tìm kiếm danh sách hiện tại"
        dense
      >
        <template v-slot:append>
          <q-icon
            v-if="searchText !== ''"
            name="close"
            @click="searchText = ''"
            class="cursor-pointer"
          />
          <q-icon name="search" />
        </template>
      </q-input>
    </div>
    <q-list v-for="bhyt in timBhyts(searchText)" :key="bhyt.id">
      <ThongTinTheBHYT :bhyt="bhyt" />
      <q-separator spaced inset />
    </q-list>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions } from "vuex";
import ThongTinTheBHYT from "src/components/ThongTinTheBHYT.vue";
import ListHeader from "src/components/Tasks/Modals/Shared/ListHeader.vue";

export default defineComponent({
  components: { ThongTinTheBHYT, ListHeader },
  name: "IndexPage",
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    ...mapActions("bhyts", ["getAllBhyts", "dongBoDuLieu"]),
    async dongBo() {
      await this.dongBoDuLieu(
        this.timBhyts(this.searchText)
          .map((bhyt) => bhyt.maSoBhxh)
          .join()
      );
      this.$router.go();
    },
    async loadData() {
      await this.getAllBhyts({ chuaDongBo: "updated_at" });
      if (this.timBhyts(this.searchText).length) await this.dongBo();
    },
  },

  computed: {
    ...mapGetters("bhyts", ["timBhyts"]),
  },

  mounted() {
    this.loadData();
  },
});
</script>

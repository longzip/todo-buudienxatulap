<template>
  <div class="q-pa-md">
    <ListHeader bgcolor="bg-orange-4"
      >Danh sách thẻ BHYT cần gia hạn
      <q-btn rounded color="primary" @click="dongBo()" icon="sync" />
      <q-btn
        rounded
        color="primary"
        @click="copyTextToClipboard()"
        icon="content_copy"
      />
    </ListHeader>
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
import { Notify } from "quasar";
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
    async loadData() {
      await this.getAllBhyts({
        thang: 2,
        completed: "0",
        disabled: "0",
        taiTuc: "1",
      });
    },
    async dongBo() {
      this.dongBoDuLieu(
        this.timBhyts(this.searchText)
          .map((bhyt) => bhyt.maSoBhxh)
          .join()
      );
    },
    copyTextToClipboard() {
      navigator.clipboard
        .writeText([...new Set(this.soDienThoais)].join())
        .then(
          function () {
            Notify.create({
              type: "positive",
              message: `Bạn đã sao chép thành công!`,
            });
          },
          function (err) {
            Notify.create({
              type: "negative",
              message: "Không thực hiện được!" + err,
            });
          }
        );
    },
  },

  computed: {
    ...mapGetters("bhyts", ["timBhyts", "soDienThoais"]),
  },

  mounted() {
    this.loadData();
  },
});
</script>

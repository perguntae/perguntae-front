<template>
  <div class="room">
    <button @click="showRoomConnectionInfos">roomConnectionInfos</button>
    <div class="room_connection-infos">
      <el-dialog size="large" :visible.sync="roomConnectionInfosVisible">
        <div class="room_access-qrcode">
          <img :src="roomConnectionInfos.qrcode" />
        </div>
        <div class="room_access-link">
          {{ roomConnectionInfos.link }}
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import QRCode from 'qrcode';

import { APP } from '../config';

export default {
  name: 'room',
  data() {
    return {
      hash: '',
      roomConnectionInfosVisible: false,
      roomConnectionInfos: {
        qrcode: '',
        link: '',
      },
    };
  },
  methods: {
    showRoomConnectionInfos() {
      this.roomConnectionInfosVisible = true;
    },
    hideRoomConnectionInfos() {
      this.roomConnectionInfosVisible = false;
    },
  },
  created() {
    this.hash = this.$route.params.hash;

    if (this.hash) {
      this.eventHub.$emit('showFullscreenLoading');

      this.roomConnectionInfos.link = `${APP.URL}room/${this.hash}`;

      const options = {
        errorCorrectionLevel: 'H',
        type: 'image/jpeg',
      };

      QRCode.toDataURL(this.roomConnectionInfos.link, options, (err, url) => {
        if (err) {
          throw err;
        }

        this.roomConnectionInfos.qrcode = url;

        this.showRoomConnectionInfos();
        this.eventHub.$emit('hideFullscreenLoading');
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/variables.scss';

.room_connection-infos {
  text-align: center;
}

.room_access-link {
  color: $primary-color;
  word-wrap: break-word;
}
</style>

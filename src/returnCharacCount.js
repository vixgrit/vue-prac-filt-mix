export const returnCharacCount = {
  computed: {
    returnCharacCount() {
      let length = this.model.length;
      return `${this.model} (${length})`;
    }
  }
}

import Component from "@ember/component";
import discourseComputed from "discourse-common/utils/decorators";
import { inject as service } from "@ember/service";

export default Component.extend({
  @discourseComputed(
    "currentUser"
  )
  shouldShow(currentUser) {
    const isStaff = currentUser && currentUser.staff;
    const lowTrustLevel = currentUser && currentUser.trust_level < 2;
    // show banner only for anons and < TL 2
    return !isStaff && (!currentUser || lowTrustLevel);
  },
});

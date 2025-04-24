import { ComponentRefs as o } from "../../../utils/componentRefs.mjs";
const a = (r, n) => {
  try {
    const { updateWidget: t } = r;
    if (t.targetLayerId) {
      const e = o.getComponentRef(t.targetLayerId);
      e && e.ref && e.ref.refresh && e.ref.refresh();
    }
  } catch {
  }
};
export {
  a as executeUpdateWidgetAction
};

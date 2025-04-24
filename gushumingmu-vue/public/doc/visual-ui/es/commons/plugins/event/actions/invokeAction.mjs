import { ComponentRefs as r } from "../../../utils/componentRefs.mjs";
const f = (e, n) => {
  try {
    const { invokeAction: o } = e, t = r.getComponentRef(o.targetLayerId);
    t && t.ref[o.functionName](o.functionArgs, n);
  } catch {
  }
};
export {
  f as executeInvokeAction
};

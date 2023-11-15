export * from "./components";
export { VueSplide as default } from "./plugin/plugin";
import type { Options as SplideOptions } from "@splidejs/splide";
export type Options = SplideOptions & { shouldObserveToDestroy?: boolean };

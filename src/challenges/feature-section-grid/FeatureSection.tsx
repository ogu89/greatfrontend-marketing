import type { FeatureSectionItem } from "./FeatureSectionGrid";

interface Props {
  data: FeatureSectionItem;
}

export function FeatureSection({ data }: Props) {
  return (
    <>
      <div className="flex flex-col gap-y-6 items-center">
        {/* icon */}
        <div className="rounded-full shadow-sm p-3">{data.icon}</div>
        {/* text */}
        <div className="flex flex-col text-center gap-y-3">
          <span className="font-semibold text-neutral-900">{data.title}</span>
          <span className="text-neutral-600">{data.description}</span>
        </div>
      </div>
    </>
  );
}

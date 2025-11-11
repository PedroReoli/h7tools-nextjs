import { LandingPageTemplate } from '@/components/templates';
import { gridProducts, statistics } from '@/utils/mockData';

export default function Home() {
  return (
    <LandingPageTemplate
      gridProducts={gridProducts}
      statistics={statistics}
    />
  );
}



import { LandingPageTemplate } from '@/components/templates';
import { heroProducts, gridProducts, statistics } from '@/utils/mockData';

export default function Home() {
  return (
    <LandingPageTemplate
      heroProducts={heroProducts}
      gridProducts={gridProducts}
      statistics={statistics}
    />
  );
}



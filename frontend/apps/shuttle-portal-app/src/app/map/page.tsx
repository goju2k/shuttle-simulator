import { Metadata } from 'next';

import { StyledComponentsRegistryForPage } from './page-registry';

export const metadata: Metadata = {
  openGraph: {
    type: 'website',
    url: 'https://dev.shuttle.seoul.kr/map',
    title: '지도 탐색',
    description: '지도를 이용해 탐색하세요',
    images: 'https://dev.shuttle.seoul.kr/image/sc2.png',
  }, 
};

export default async function MapPage() {

  const res = await fetch('http://shuttle-dev-alb-1208893063.ap-northeast-2.elb.amazonaws.com:3000/api');
  const data = await res.json();

  return (
    <StyledComponentsRegistryForPage>
      <div>
        {data.message}
      </div>
    </StyledComponentsRegistryForPage>
  );

}
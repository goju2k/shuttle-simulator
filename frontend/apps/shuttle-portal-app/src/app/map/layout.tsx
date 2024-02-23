import { Metadata } from 'next';

import { StyledComponentsRegistry } from './registry';

export const metadata: Metadata = { title: '지도 탐색' };

export default async function MapLayout({ children }: {
  children: React.ReactNode;
}) {

  return (
    <>
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
    </>
  );
}
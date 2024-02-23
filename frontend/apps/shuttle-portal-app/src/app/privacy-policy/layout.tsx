import { Metadata } from 'next';

import { StyledComponentsRegistry } from './registry';

export const metadata: Metadata = { title: '개인정보 처리방침' };

export default function PrivacyLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <StyledComponentsRegistry>
      {children}
    </StyledComponentsRegistry>
  );
}
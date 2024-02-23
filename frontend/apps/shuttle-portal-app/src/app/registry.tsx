'use client';

import { useServerInsertedHTML } from 'next/navigation';
import React, { useState } from 'react';
import styled, { ServerStyleSheet, StyleSheetManager } from 'styled-components';

const MainLayoutRoot = styled.div`
  padding : 10px;
`;

export function StyledComponentsRegistry({ children }: {
  children: React.ReactNode;
}) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [ styledComponentsStyleSheet ] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    // Types are out of date, clearTag is not defined.
    // See: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/65021
    (styledComponentsStyleSheet.instance as any).clearTag();

    return <>{styles}</>;
  });

  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <MainLayoutRoot>
        {children}
      </MainLayoutRoot> 
    </StyleSheetManager>
  );
}
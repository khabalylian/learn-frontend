import React, { useEffect, useState, ReactNode } from 'react';
import { MDXProvider } from '@mdx-js/react';

interface MdxLoaderProps {
  path: string; // Шлях до MDX файлу
}

const MdxLoader: React.FC<MdxLoaderProps> = ({ path }) => {
  const [mdxContent, setMdxContent] = useState<ReactNode | null>(null);

  useEffect(() => {
    import(`./${path}.mdx`)
      .then((module) => {
        setMdxContent(() => {
          const { default: Component, ...rest } = module;
          return (
            <MDXProvider>
              <Component />
            </MDXProvider>
          );
        });
      })
      .catch((error) => {
        console.error('Error loading MDX:', error);
      });
  }, [path]);

  return <div>{mdxContent}</div>;
};

export default MdxLoader;






import React from 'react';
import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

export type TextLinkProps = {
  next?: boolean;
  href: string;
} & LinkProps;

const TextLink: React.FC<TextLinkProps> = ({
  children,
  next,
  href,
  ...props
}) => {
  if (next) {
    return (
      <NextLink href={href}>
        <Link as="p" fontWeight="500" {...props}>
          {children}
        </Link>
      </NextLink>
    );
  }

  return (
    <Link href={href} fontWeight="500" {...props}>
      {children}
    </Link>
  );
};

export default TextLink;

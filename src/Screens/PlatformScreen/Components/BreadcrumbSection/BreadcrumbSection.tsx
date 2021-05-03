import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Icon,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { HiChevronLeft } from 'react-icons/hi';
import { parsePlatformNameForUrl } from '@Utils';

export type BreadcrumbSectionProps = {
  platformName: string;
};

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  platformName,
}) => (
  <Flex alignItems="center">
    <Icon color="orange.500" as={HiChevronLeft} />
    <Breadcrumb color="orange.500">
      <BreadcrumbItem>
        <BreadcrumbLink as={NextLink} href="/">
          All Platforms
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={NextLink}
          href={`/${parsePlatformNameForUrl(platformName)}`}
        >
          {platformName}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Flex>
);

export default BreadcrumbSection;

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

export type BreadcrumbSectionProps = {
  platformName: string;
  id: string;
};

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  platformName,
  id,
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
        <BreadcrumbLink as={NextLink} href={`/platform/${id}`}>
          {platformName}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Flex>
);

export default BreadcrumbSection;

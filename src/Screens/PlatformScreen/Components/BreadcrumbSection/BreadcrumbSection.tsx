import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Icon,
} from '@chakra-ui/react';
import { HiChevronLeft } from 'react-icons/hi';

export type BreadcrumbSectionProps = {
  platformName: string;
  platformId: string;
};

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  platformName,
  platformId,
}) => (
  <Flex alignItems="center">
    <Icon color="orange.400" as={HiChevronLeft} />
    <Breadcrumb color="orange.400">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">All Platforms</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href={`/platforms/${platformId}`}>
          {platformName}
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Flex>
);

export default BreadcrumbSection;

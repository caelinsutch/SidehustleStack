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
  id: string;
};

const BreadcrumbSection: React.FC<BreadcrumbSectionProps> = ({
  platformName,
  id,
}) => (
  <Flex alignItems="center">
    <Icon color="orange.400" as={HiChevronLeft} />
    <Breadcrumb color="orange.400">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">All Platforms</BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink href={`/platform/${id}`}>{platformName}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  </Flex>
);

export default BreadcrumbSection;

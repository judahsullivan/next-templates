
"use client";
import { Tag, Tooltip, TagLabel, TagLeftIcon } from "@chakra-ui/react";

export default function IconButtons({ homebuttons }: any) {
  return (
    <Tooltip
      label={homebuttons.label}
      aria-label={homebuttons.label}
      placement="bottom-end"
      hasArrow
    >
      <Tag
        size={"lg"}
        bg={`${homebuttons.color}.400`}
        textColor={`${homebuttons.color}.800`}
        _hover={{
          backgroundColor: `${homebuttons.color}.50`,
          transition: "ease-in",
        }}
      >
        <TagLeftIcon as={homebuttons.icon} />
        <TagLabel fontWeight={800}>{homebuttons.title}</TagLabel>
      </Tag>
    </Tooltip>
  );
}

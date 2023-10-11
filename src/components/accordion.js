import React from "react";
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';

function DefaultAccordion() {
  return (
    // <div className="w-[100%] max-w-screen-md py-1 sm:p-4 mx-auto">
      <CAccordion>
        <CAccordionItem>
          <CAccordionHeader>Header #1</CAccordionHeader>
          <CAccordionBody>
            Content #1
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem>
          <CAccordionHeader>Header #2</CAccordionHeader>
          <CAccordionBody>
            Content #2
          </CAccordionBody>
        </CAccordionItem>
        <CAccordionItem>
          <CAccordionHeader>Header #3</CAccordionHeader>
          <CAccordionBody>
            Content #3
          </CAccordionBody>
        </CAccordionItem>
      </CAccordion>
    // </div>
  );
}

export default DefaultAccordion;

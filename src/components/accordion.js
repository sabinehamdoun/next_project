import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

function DefaultAccordion() {
  const [open, setOpen] = useState(false);

  return (
    <Accordion open={open} className="bg-[#f0f0f0] px-3 py-1 rounded-md">
      <AccordionHeader onClick={() => setOpen(!open)} className="text-lg">
        How can I learn a new programming language?
        {open ? (
          <AiOutlineMinus className="ml-auto" />
        ) : (
          <AiOutlinePlus className="ml-auto" />
        )}
      </AccordionHeader>
      <AccordionBody className={`py-3 ${open ? "block" : "hidden"}`}>
        Learning a new programming language involves studying its syntax,
        practicing coding, and working on projects to apply your knowledge.
        Online resources and courses can be helpful.
      </AccordionBody>
    </Accordion>
  );
}

export default DefaultAccordion;

//       <Accordion open={open === 2} className="bg-[#f0f0f031] px-3 py-1 rounded-md">
//         <AccordionHeader onClick={() => handleOpen(2)} className="text-lg">
//           What is version control and why is it important for software
//           development?
//           {open === 2 ? (
//             <AiOutlineMinus className="ml-auto" />
//           ) : (
//             <AiOutlinePlus className="ml-auto" />
//           )}
//         </AccordionHeader>
//         <AccordionBody className={`py-3 ${open === 2 ? "block" : "hidden"}`}>
//           Version control is a system that tracks changes to a codebase over
//           time. It is important for software development because it allows
//           multiple developers to collaborate, revert to previous versions, and
//           maintain a history of code changes, ensuring code stability and
//           accountability.
//         </AccordionBody>
//       </Accordion>

//       <Accordion open={open === 3} className="bg-[#f0f0f0] px-3 py-1 rounded-md">
//         <AccordionHeader onClick={() => handleOpen(3)} className="text-lg">
//           What is object-oriented programming (OOP)?
//           {open === 3 ? (
//             <AiOutlineMinus className="ml-auto" />
//           ) : (
//             <AiOutlinePlus className="ml-auto" />
//           )}
//         </AccordionHeader>
//         <AccordionBody className={`py-3 ${open === 3 ? "block" : "hidden"}`}>
//           Object-oriented programming is a programming paradigm that uses
//           objects, which are instances of classes, to represent and manipulate
//           data. It focuses on concepts like encapsulation, inheritance, and
//           polymorphism for building modular and maintainable code.
//         </AccordionBody>
//       </Accordion>
//     </div>
//   );
// }

// export default DefaultAccordion;
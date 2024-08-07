
import { links } from "@/src/utils/data";

export { };

declare global {

    type SectionName = (typeof links)[number]["name"];
    
}
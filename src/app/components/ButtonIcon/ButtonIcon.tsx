import Link from "next/link";
import { Button } from "../ui/button";
import type { ButtonIconProps } from "./ButtonIcon.type";

// type Icon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>[]

function ButtonIcon({href, children}: ButtonIconProps) {
    return (
        <Button variant="ghost" size="icon">
            <Link target='_blank' href={href}>
                {children??<></>}
            </Link>
        </Button>
    )
}

export { ButtonIcon }
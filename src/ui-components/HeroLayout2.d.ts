/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Home } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ImageProps, ViewProps } from "@aws-amplify/ui-react";
import { HeroLayout3Props } from "./HeroLayout3";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroLayout2OverridesProps = {
    HeroLayout2?: PrimitiveOverrideProps<ViewProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    HeroLayout3?: HeroLayout3Props;
} & EscapeHatchProps;
export declare type HeroLayout2Props = React.PropsWithChildren<Partial<ViewProps> & {
    home?: Home;
} & {
    overrides?: HeroLayout2OverridesProps | undefined | null;
}>;
export default function HeroLayout2(props: HeroLayout2Props): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AmpligramProps } from "./Ampligram";
import { CollectionProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewHomeCollectionOverridesProps = {
    NewHomeCollection?: PrimitiveOverrideProps<CollectionProps>;
    Ampligram?: AmpligramProps;
} & EscapeHatchProps;
export declare type NewHomeCollectionProps = React.PropsWithChildren<Partial<CollectionProps<any>> & {
    items?: any[];
    overrideItems?: (collectionItem: {
        item: any;
        index: number;
    }) => AmpligramProps;
} & {
    overrides?: NewHomeCollectionOverridesProps | undefined | null;
}>;
export default function NewHomeCollection(props: NewHomeCollectionProps): React.ReactElement;

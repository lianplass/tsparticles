import { IShapeValues } from "../../../../Core/Interfaces/IShapeValues";

/**
 * @category Options
 */
export interface IStarShape extends IShapeValues {
    /**
     * @deprecated use the new sides instead
     */
    nb_sides: number;

    sides: number;

    inset: number;
}

import type { ISplit } from "../../../Interfaces/Particles/Destroy/ISplit";
import type { IOptionLoader } from "../../../Interfaces/IOptionLoader";
import { SplitFactor } from "./SplitFactor";
import { RecursivePartial } from "../../../../Types";
import { SplitRate } from "./SplitRate";
import { IParticles } from "../../../Interfaces/Particles/IParticles";
import { Utils } from "../../../../Utils";

export class Split implements ISplit, IOptionLoader<ISplit> {
    count: number;
    factor: SplitFactor;
    rate: SplitRate;
    particles?: RecursivePartial<IParticles>;

    constructor() {
        this.count = 1;
        this.factor = new SplitFactor();
        this.rate = new SplitRate();
    }

    load(data?: RecursivePartial<ISplit>): void {
        if (!data) {
            return;
        }

        if (data.count !== undefined) {
            this.count = data.count;
        }

        this.factor.load(data.factor);
        this.rate.load(data.rate);

        if (data.particles !== undefined) {
            this.particles = Utils.deepExtend({}, data.particles) as RecursivePartial<IParticles>;
        }
    }
}
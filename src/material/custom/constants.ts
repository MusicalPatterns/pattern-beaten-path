// tslint:disable no-magic-numbers

import { as, Scalar } from '@musical-patterns/utilities'

const INITIAL_CORE_DURATION: Scalar = as.Scalar(1)

const ADJUSTMENT_SIZE_BELOW_WHICH_IT_MATTERS_NOT_AND_BREAKS_THE_TOTAL_DURATION_CALCULATION: number = 1 / 10000

export {
    INITIAL_CORE_DURATION,
    ADJUSTMENT_SIZE_BELOW_WHICH_IT_MATTERS_NOT_AND_BREAKS_THE_TOTAL_DURATION_CALCULATION,
}
